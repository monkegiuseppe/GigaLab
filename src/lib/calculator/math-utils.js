/**
 * A function that takes a number and returns a number, with an added property to store its original string expression.
 * @typedef {function(number): number & { originalExpression: string }} ParsedFunction
 */

export class MathParser {
  /**
   * Parses a mathematical expression string into a JavaScript function.
   * @param {string} expression - The mathematical expression (e.g., "x^2 + sin(x)").
   * @returns {ParsedFunction} A function that evaluates the expression for a given x.
   */
  static parseFunction(expression) {
    const processed = expression
      .replace(/\^/g, "**")
      .replace(/sin/g, "Math.sin")
      .replace(/cos/g, "Math.cos")
      .replace(/tan/g, "Math.tan")
      .replace(/log/g, "Math.log10")
      .replace(/ln/g, "Math.log")
      .replace(/sqrt/g, "Math.sqrt")
      .replace(/abs/g, "Math.abs")
      .replace(/exp/g, "Math.exp")
      .replace(/pi/g, "Math.PI")
      .replace(/e(?![a-zA-Z])/g, "Math.E");

    const parsedFunc = (x) => {
      try {
        // Using eval is necessary here to dynamically interpret the string expression.
        // The expression is sanitized above to only include Math functions.
        return eval(processed.replace(/x/g, `(${x})`));
      } catch {
        return Number.NaN;
      }
    };
    parsedFunc.originalExpression = expression;
    return parsedFunc;
  }

  /**
   * Calculates the numerical derivative of a function at a point using the central difference formula.
   * @param {ParsedFunction} f - The function.
   * @param {number} x - The point at which to find the derivative.
   * @param {number} [h=0.0001] - The step size for the numerical differentiation.
   * @returns {number} The approximate derivative value.
   */
  static derivative(f, x, h = 0.0001) {
    try {
      const f_x_plus_h = f(x + h);
      const f_x_minus_h = f(x - h);
      if (isNaN(f_x_plus_h) || isNaN(f_x_minus_h) || !isFinite(f_x_plus_h) || !isFinite(f_x_minus_h)) {
        return Number.NaN;
      }
      return (f_x_plus_h - f_x_minus_h) / (2 * h);
    } catch {
      return Number.NaN;
    }
  }

  /**
   * Calculates the numerical integral of a function over an interval using the rectangle method.
   * @param {ParsedFunction} f - The function to integrate.
   * @param {number} a - The lower bound of integration.
   * @param {number} b - The upper bound of integration.
   * @param {number} [n=1000] - The number of subintervals (rectangles) to use.
   * @returns {number} The approximate area under the curve.
   */
  static integrate(f, a, b, n = 1000) {
    try {
      if (!isFinite(a) || !isFinite(b) || a >= b) return Number.NaN;
      const dx = (b - a) / n;
      let sum = 0;
      for (let i = 0; i < n; i++) {
        const x = a + i * dx;
        const y = f(x);
        if (isNaN(y) || !isFinite(y)) continue;
        sum += y;
      }
      return sum * dx;
    } catch {
      return Number.NaN;
    }
  }

  /**
   * Creates a function that represents the numerical antiderivative (integral function).
   * @param {ParsedFunction} f - The function to find the antiderivative of.
   * @param {number} [x0=0] - The constant of integration (the point where the integral is zero).
   * @returns {ParsedFunction} A function representing the antiderivative.
   */
  static antiderivative(f, x0 = 0) {
    const antiDeriv = (x) => {
      try {
        return MathParser.integrate(f, x0, x, 100);
      } catch {
        return Number.NaN;
      }
    };
    antiDeriv.originalExpression = `∫(${f.originalExpression || "f(x)"})dx from ${x0}`;
    return antiDeriv;
  }

  /**
   * Finds a root of a function using the Newton-Raphson method.
   * @param {ParsedFunction} f - The function.
   * @param {number} [x0=0] - The initial guess for the root.
   * @param {number} [maxIterations=50] - The maximum number of iterations.
   * @param {number} [tolerance=1e-10] - The desired precision.
   * @returns {number} The estimated root, or NaN if not found.
   */
  static findRoot(f, x0 = 0, maxIterations = 50, tolerance = 1e-10) {
    try {
      let x = x0;
      for (let i = 0; i < maxIterations; i++) {
        const fx = f(x);
        const fpx = MathParser.derivative(f, x);
        if (Math.abs(fx) < tolerance) return x;
        if (Math.abs(fpx) < tolerance) break;
        const newX = x - fx / fpx;
        if (Math.abs(newX - x) < tolerance) return newX;
        x = newX;
      }
      return x;
    } catch {
      return Number.NaN;
    }
  }

  /**
   * Finds multiple roots of a function within a given interval by seeding the Newton-Raphson method.
   * @param {ParsedFunction} f - The function.
   * @param {number} [xMin=-10] - The minimum x value of the search interval.
   * @param {number} [xMax=10] - The maximum x value of the search interval.
   * @param {number} [numSeeds=20] - The number of starting points to try.
   * @returns {number[]} An array of unique roots found in the interval.
   */
  static findRoots(f, xMin = -10, xMax = 10, numSeeds = 20) {
    const roots = [];
    const step = (xMax - xMin) / numSeeds;
    for (let i = 0; i < numSeeds; i++) {
      const seed = xMin + i * step;
      const root = MathParser.findRoot(f, seed);
      if (!isNaN(root) && isFinite(root) && root >= xMin && root <= xMax) {
        if (!roots.some((r) => Math.abs(r - root) < 1e-6)) {
          roots.push(root);
        }
      }
    }
    return roots.sort((a, b) => a - b);
  }
}

export const derivativeCache = new Map();

/**
 * Creates a throttled function that only invokes `func` at most once per every `limit` milliseconds.
 * @param {Function} func The function to throttle.
 * @param {number} limit The aount of time to wait in milliseconds.
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