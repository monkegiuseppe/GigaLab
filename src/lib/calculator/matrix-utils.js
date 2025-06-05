export class MatrixOps {
  /**
   * Multiplies two matrices A and B.
   * @param {number[][]} A - The first matrix.
   * @param {number[][]} B - The second matrix.
   * @returns {number[][]} The resulting matrix from the multiplication.
   * @throws {Error} If matrix dimensions are invalid for multiplication.
   */
  static multiply(A, B) {
    if (A[0].length !== B.length) {
      throw new Error("Invalid matrix dimensions for multiplication.");
    }
    const result = [];
    for (let i = 0; i < A.length; i++) {
      result[i] = [];
      for (let j = 0; j < B[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < B.length; k++) {
          sum += A[i][k] * B[k][j];
        }
        result[i][j] = sum;
      }
    }
    return result;
  }

  /**
   * Calculates the determinant of a square matrix.
   * @param {number[][]} matrix - The square matrix.
   * @returns {number} The determinant of the matrix.
   * @throws {Error} If the matrix is not square or is empty.
   */
  static determinant(matrix) {
    const n = matrix.length;
    if (n === 0 || n !== matrix[0]?.length) {
      throw new Error("Matrix must be square and non-empty.");
    }
    if (n === 1) return matrix[0][0];
    if (n === 2) return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    let det = 0;
    for (let i = 0; i < n; i++) {
      const subMatrix = matrix.slice(1).map((row) => row.filter((_, colIndex) => colIndex !== i));
      det += matrix[0][i] * Math.pow(-1, i) * MatrixOps.determinant(subMatrix);
    }
    return det;
  }

  /**
   * Transposes a matrix (flips rows and columns).
   * @param {number[][]} matrix - The matrix to transpose.
   * @returns {number[][]} The transposed matrix.
   */
  static transpose(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return [];
    return matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
  }

  /**
   * Calculates the inverse of a square matrix using Gaussian elimination.
   * @param {number[][]} matrix - The square matrix to invert.
   * @returns {number[][]} The inverted matrix.
   * @throws {Error} If the matrix is not square, empty, or is singular (non-invertible).
   */
  static inverse(matrix) {
    const n = matrix.length;
    if (n === 0 || n !== matrix[0]?.length) {
      throw new Error("Matrix must be square and non-empty.");
    }
    const det = MatrixOps.determinant(matrix);
    if (Math.abs(det) < 1e-10) {
      throw new Error("Matrix is singular and cannot be inverted.");
    }
    // Fast path for 2x2 matrices
    if (n === 2) {
      return [
        [matrix[1][1] / det, -matrix[0][1] / det],
        [-matrix[1][0] / det, matrix[0][0] / det],
      ];
    }
    // Gauss-Jordan elimination for larger matrices
    const augmented = matrix.map((row, i) => [
      ...row,
      ...Array(n)
        .fill(0)
        .map((_, j) => (i === j ? 1 : 0)),
    ]);
    for (let i = 0; i < n; i++) {
      let maxRow = i;
      for (let k = i + 1; k < n; k++) {
        if (Math.abs(augmented[k][i]) > Math.abs(augmented[maxRow][i])) {
          maxRow = k;
        }
      }
      [augmented[i], augmented[maxRow]] = [augmented[maxRow], augmented[i]]; // Swap rows

      const pivot = augmented[i][i];
      if (Math.abs(pivot) < 1e-10) {
        throw new Error("Matrix is singular (pivot is zero).");
      }
      for (let j = i; j < 2 * n; j++) {
        augmented[i][j] /= pivot;
      }
      for (let k = 0; k < n; k++) {
        if (k !== i) {
          const factor = augmented[k][i];
          for (let j = i; j < 2 * n; j++) {
            augmented[k][j] -= factor * augmented[i][j];
          }
        }
      }
    }
    return augmented.map((row) => row.slice(n));
  }

  /**
   * Solves a system of linear equations Ax = b for x.
   * @param {number[][]} A - The coefficient matrix.
   * @param {number[]} b - The vector of constant terms.
   * @returns {number[]} The solution vector x.
   * @throws {Error} If the system cannot be solved (e.g., A is singular).
   */
  static solve(A, b) {
    try {
      const invA = MatrixOps.inverse(A);
      const bMatrix = b.map((val) => [val]);
      const resultMatrix = MatrixOps.multiply(invA, bMatrix);
      return resultMatrix.map((row) => row[0]);
    } catch (e) {
      throw new Error(`System solving failed: ${e.message || "System may have no unique solution"}`);
    }
  }
}