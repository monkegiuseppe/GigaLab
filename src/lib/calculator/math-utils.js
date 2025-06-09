// lib/calculator/math-utils.js

import { create, all } from 'mathjs';

const math = create(all);

// Cache for compiled functions, especially derivatives
export const derivativeCache = new Map();

/**
 * A compiled mathjs expression object.
 * @typedef {object} CompiledExpression
 * @property {function(object): number} evaluate - Evaluates the expression with a given scope.
 * @property {string} originalExpression - The original string expression.
 */

export class MathParser {
  /**
   * Parses and compiles a mathematical expression string.
   * @param {string} expression - The mathematical expression (e.g., "x^2 + sin(x)").
   * @returns {CompiledExpression | null} A compiled expression object or null on error.
   */
  static parseFunction(expression) {
    try {
      const node = math.parse(expression);
      const code = node.compile();
      code.originalExpression = expression;
      return code;
    } catch (e) {
      console.error(`Error parsing expression "${expression}":`, e);
      // Return an object that always evaluates to NaN, maintaining a consistent structure
      return {
        evaluate: () => Number.NaN,
        originalExpression: expression,
      };
    }
  }

  /**
   * Calculates the symbolic derivative of an expression and returns it as a string.
   * @param {string} expression - The expression to differentiate.
   * @param {string} [variable='x'] - The variable to differentiate with respect to.
   * @returns {string} The derivative expression as a string.
   */
  static derivativeToString(expression, variable = 'x') {
    try {
      return math.derivative(expression, variable).toString();
    } catch (e) {
      console.error(`Error taking derivative of "${expression}":`, e);
      return 'NaN'; // An expression that will evaluate to NaN
    }
  }

  /**
   * Calculates the numerical integral of a function over an interval using the trapezoidal rule.
   * @param {CompiledExpression} compiledFunc - The compiled function to integrate.
   * @param {number} a - The lower bound of integration.
   * @param {number} b - The upper bound of integration.
   * @param {string} [variable='x'] - The variable of integration.
   * @param {number} [n=1000] - The number of subintervals to use.
   * @returns {number} The approximate area under the curve.
   */
  static integrate(compiledFunc, a, b, variable = 'x', n = 1000) {
    if (!compiledFunc || typeof compiledFunc.evaluate !== 'function' || !isFinite(a) || !isFinite(b)) return Number.NaN;
    if (a === b) return 0;
    if (a > b) return -this.integrate(compiledFunc, b, a, variable, n);
    
    const h = (b - a) / n;
    let sum = 0.5 * (compiledFunc.evaluate({ [variable]: a }) + compiledFunc.evaluate({ [variable]: b }));
    if (!isFinite(sum)) sum = 0; // Handle infinities at endpoints

    for (let i = 1; i < n; i++) {
      const x = a + i * h;
      const y = compiledFunc.evaluate({ [variable]: x });
      if (isNaN(y) || !isFinite(y)) continue;
      sum += y;
    }
    const result = h * sum;
    return isFinite(result) ? result : Number.NaN;
  }

  /**
   * Creates a function that represents the numerical antiderivative (integral function).
   * @param {CompiledExpression} compiledFunc - The function to find the antiderivative of.
   * @param {number} [x0=0] - The constant of integration (the point where the integral is zero).
   * @param {string} [variable='x'] - The variable of integration.
   * @returns {CompiledExpression} A compiled function representing the antiderivative.
   */
  static antiderivative(compiledFunc, x0 = 0, variable = 'x') {
    const antiDeriv = (scope) => {
      const x = scope[variable];
      if (x === x0) return 0;
      try {
        return MathParser.integrate(compiledFunc, x0, x, variable, 500);
      } catch {
        return Number.NaN;
      }
    };
    return {
      evaluate: antiDeriv,
      originalExpression: `∫(${compiledFunc.originalExpression})dx from ${x0}`,
    };
  }

  /**
   * Finds a root of a function using the Newton-Raphson method.
   * @param {CompiledExpression} f - The compiled function.
   * @param {CompiledExpression} df - The compiled derivative of the function.
   * @param {number} x0 - The initial guess for the root.
   * @param {string} [variable='x'] - The variable name.
   * @param {number} [maxIterations=50] - The maximum number of iterations.
   * @param {number} [tolerance=1e-7] - The desired precision.
   * @returns {number} The estimated root, or NaN if not found.
   */
  static findRoot(f, df, x0, variable = 'x', maxIterations = 50, tolerance = 1e-7) {
    let x = x0;
    for (let i = 0; i < maxIterations; i++) {
      const scope = { [variable]: x };
      const fx = f.evaluate(scope);
      const dfx = df.evaluate(scope);

      if (Math.abs(fx) < tolerance) return x;
      if (Math.abs(dfx) < 1e-15) break; // Avoid division by zero

      const newX = x - fx / dfx;
      if (!isFinite(newX)) break;
      if (Math.abs(newX - x) < tolerance) return newX;
      x = newX;
    }
    return Number.NaN;
  }

  /**
   * Finds multiple roots of a function within a given interval.
   * @param {string} expression - The function's expression string.
   * @param {number} xMin - The minimum x value of the search interval.
   * @param {number} xMax - The maximum x value of the search interval.
   * @param {number} [numSeeds=40] - The number of starting points to try.
   * @returns {number[]} An array of unique roots found in the interval.
   */
  static findRoots(expression, xMin, xMax, numSeeds = 40) {
    const f = this.parseFunction(expression);
    if (!f) return [];

    const derivativeKey = `derivative_of_${expression}`;
    let df = derivativeCache.get(derivativeKey);
    if (!df) {
      const df_expr = this.derivativeToString(expression, 'x');
      df = this.parseFunction(df_expr);
      if (df) derivativeCache.set(derivativeKey, df);
    }
    if (!df) return [];

    const roots = new Set();
    const step = (xMax - xMin) / numSeeds;

    for (let i = 0; i <= numSeeds; i++) {
      const seed = xMin + i * step;
      const root = this.findRoot(f, df, seed, 'x');

      if (isFinite(root) && root >= xMin && root <= xMax && Math.abs(f.evaluate({ x: root })) < 1e-5) {
        roots.add(parseFloat(root.toFixed(6)));
      }
    }
    return Array.from(roots).sort((a, b) => a - b);
  }

  /**
   * Finds x-values of local extrema for a function in an interval.
   * @param {string} expression - The function's expression string.
   * @param {number} xMin - The minimum x value of the search interval.
   * @param {number} xMax - The maximum x value of the search interval.
   * @returns {number[]} An array of x-values where local extrema occur.
   */
  static findExtrema(expression, xMin, xMax) {
    const derivativeExpr = this.derivativeToString(expression, 'x');
    return this.findRoots(derivativeExpr, xMin, xMax, 50);
  }

  /**
   * Finds intersection points of two functions in an interval.
   * @param {string} expr1 - The first function's expression.
   * @param {string} expr2 - The second function's expression.
   * @param {number} xMin - The minimum x value of the search interval.
   * @param {number} xMax - The maximum x value of the search interval.
   * @returns {number[]} An array of x-values where the functions intersect.
   */
  static findIntersections(expr1, expr2, xMin, xMax) {
    if (!expr1 || !expr2) return [];
    const differenceExpr = `(${expr1}) - (${expr2})`;
    return this.findRoots(differenceExpr, xMin, xMax, 40);
  }
}

/**
 * Creates a throttled function that only invokes `func` at most once per every `limit` milliseconds.
 * @param {Function} func The function to throttle.
 * @param {number} limit The amount of time to wait in milliseconds.
 * @returns {Function} Returns the new throttled function.
 */
export function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(
        function () {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        },
        limit - (Date.now() - lastRan),
      );
    }
  };
}