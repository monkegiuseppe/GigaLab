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
      return {
        evaluate: () => Number.NaN,
        originalExpression: expression,
      };
    }
  }

  /**
   * Calculates the symbolic derivative of an expression and returns it as a simplified string.
   * @param {string} expression - The expression to differentiate.
   * @param {string} [variable='x'] - The variable to differentiate with respect to.
   * @returns {string} The derivative expression as a string.
   */
  static derivativeToString(expression, variable = 'x') {
    try {
      // Use math.simplify for a cleaner output
      return math.simplify(math.derivative(expression, variable)).toString();
    } catch (e) {
      console.error(`Error taking derivative of "${expression}":`, e);
      return 'Error';
    }
  }

  /**
   * Attempts to find the symbolic integral of a basic expression.
   * @param {string} expression - The expression to integrate.
   * @param {string} [variable='x'] - The variable to integrate with respect to.
   * @returns {string} The antiderivative expression as a string, or a message if not found.
   */
  static symbolicIntegralToString(expression, variable = 'x') {
    if (variable !== 'x') return "Integration only supported for 'x'.";
    try {
        const node = math.simplify(expression);
        
        const integrateNode = (n) => {
            if (n.isSymbolNode) {
                if (n.name === 'x') return `(1/2) * x^2`;
                return `${n.toString()} * x`;
            }
            if (n.isConstantNode) {
                if (n.value === 0) return '0';
                return `${n.value} * x`;
            }
            if (n.isOperatorNode) {
                const op = n.op;
                const args = n.args;
                if (op === '+') return `${integrateNode(args[0])} + ${integrateNode(args[1])}`;
                if (op === '-') return `${integrateNode(args[0])} - ${integrateNode(args[1])}`;
                if (op === '*') {
                    if (args[0].isConstantNode) { // c * f(x)
                        return `${args[0].toString()} * (${integrateNode(args[1])})`;
                    }
                    if (args[1].isConstantNode) { // f(x) * c
                        return `(${integrateNode(args[0])}) * ${args[1].toString()}`;
                    }
                }
                if (op === '^' && args[0].isSymbolNode && args[0].name === 'x' && args[1].isConstantNode) {
                    const power = args[1].value;
                    if (power === -1) return `ln(abs(x))`;
                    const newPower = power + 1;
                    return `(1/${newPower}) * x^${newPower}`;
                }
            }
            if (n.isFunctionNode) {
                const func = n.name;
                const arg = n.args[0];
                if (arg.isSymbolNode && arg.name === 'x') {
                    if (func === 'sin') return '-cos(x)';
                    if (func === 'cos') return 'sin(x)';
                    if (func === 'exp') return 'exp(x)';
                    if (func === 'tan') return 'ln(abs(sec(x)))';
                }
            }
            throw new Error("No elementary integral found for this expression.");
        };

        const integral = integrateNode(node);
        return `${math.simplify(integral).toString()} + C`;

    } catch (e) {
        return e.message.includes("No elementary integral") 
            ? "No elementary integral found." 
            : "Cannot integrate complex expression.";
    }
  }

  /**
   * Calculates the numerical integral of a function over an interval using the trapezoidal rule.
   */
  static integrate(compiledFunc, a, b, variable = 'x', n = 1000) {
    if (!compiledFunc || typeof compiledFunc.evaluate !== 'function' || !isFinite(a) || !isFinite(b)) return Number.NaN;
    if (a === b) return 0;
    if (a > b) return -this.integrate(compiledFunc, b, a, variable, n);
    
    const h = (b - a) / n;
    let sum = 0.5 * (compiledFunc.evaluate({ [variable]: a }) + compiledFunc.evaluate({ [variable]: b }));
    if (!isFinite(sum)) sum = 0;

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
   * Creates a function that represents the numerical antiderivative.
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
   */
  static findRoot(f, df, x0, variable = 'x', maxIterations = 50, tolerance = 1e-7) {
    let x = x0;
    for (let i = 0; i < maxIterations; i++) {
      const scope = { [variable]: x };
      const fx = f.evaluate(scope);
      const dfx = df.evaluate(scope);

      if (Math.abs(fx) < tolerance) return x;
      if (Math.abs(dfx) < 1e-15) break;

      const newX = x - fx / dfx;
      if (!isFinite(newX)) break;
      if (Math.abs(newX - x) < tolerance) return newX;
      x = newX;
    }
    return Number.NaN;
  }

  /**
   * Finds multiple roots of a function within a given interval.
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
   */
  static findExtrema(expression, xMin, xMax) {
    const derivativeExpr = this.derivativeToString(expression, 'x');
    return this.findRoots(derivativeExpr, xMin, xMax, 50);
  }

  /**
   * Finds intersection points of two functions in an interval.
   */
  static findIntersections(expr1, expr2, xMin, xMax) {
    if (!expr1 || !expr2) return [];
    const differenceExpr = `(${expr1}) - (${expr2})`;
    return this.findRoots(differenceExpr, xMin, xMax, 40);
  }
}

/**
 * Creates a throttled function that only invokes `func` at most once per every `limit` milliseconds.
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