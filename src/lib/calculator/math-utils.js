// lib/calculator/math-utils.js

import { create, all } from 'mathjs';
import nerdamer from 'nerdamer/nerdamer.core.js';
import 'nerdamer/Calculus.js';

const math = create(all);

export const derivativeCache = new Map();

export class MathParser {
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

    static derivativeToLatex(expression, variable = 'x') {
        try {
            const derivativeNode = math.derivative(expression, variable);
            return {
                latex: derivativeNode.toTex(),
                simplified: derivativeNode.toString(),
            };
        } catch (e) {
            console.error(`Error taking derivative of "${expression}":`, e);
            return { latex: 'Error', simplified: 'Error' };
        }
    }

    static symbolicIntegralToLatex(expression, variable = 'x') {
        try {
            const integral = nerdamer(`integrate(${expression}, ${variable})`);
            if (integral.toString().includes('integrate')) {
                throw new Error("No elementary integral found.");
            }
            const simplifiedString = integral.toString();
            const latexString = `${integral.toTeX()} + C`;
            return {
                latex: latexString,
                simplified: simplifiedString,
            };
        } catch (e) {
            console.error(`Nerdamer integration error for "${expression}":`, e);
            return { 
                latex: `\\text{No elementary integral found}`,
                simplified: "" 
            };
        }
    }

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

    static findRoots(expression, xMin, xMax, numSeeds = 40) {
        const f = this.parseFunction(expression);
        if (!f || !f.originalExpression || f.originalExpression.includes('NaN')) return [];
        
        const derivativeKey = `derivative_of_${expression}`;
        let df = derivativeCache.get(derivativeKey);
        if (!df) {
            const { simplified: df_expr } = this.derivativeToLatex(expression, 'x');
            if (df_expr.includes('Error')) return []; // Don't proceed if derivative failed
            
            df = this.parseFunction(df_expr);
            if (df) derivativeCache.set(derivativeKey, df);
        }
        if (!df || !df.originalExpression || df.originalExpression.includes('NaN')) return [];

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

    static findExtrema(expression, xMin, xMax) {
        const { simplified: derivativeExpr } = this.derivativeToLatex(expression, 'x');
        if (derivativeExpr.includes('Error')) return []; // Don't proceed if derivative failed
        return this.findRoots(derivativeExpr, xMin, xMax, 50);
    }

    static findIntersections(expr1, expr2, xMin, xMax) {
        if (!expr1 || !expr2) return [];
        const differenceExpr = `(${expr1}) - (${expr2})`;
        return this.findRoots(differenceExpr, xMin, xMax, 40);
    }
}

export function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
        const context = this;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}