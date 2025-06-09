// lib/calculator/matrix-utils.js
import { create, all } from 'mathjs';

const math = create(all);

export class MatrixOps {
  /**
   * Calculates the determinant of a matrix.
   * @param {number[][]} matrix - The input matrix.
   * @returns {number} The determinant.
   * @throws {Error} if the matrix is not square.
   */
  static determinant(matrix) {
    if (matrix.length === 0 || matrix.length !== (matrix[0]?.length || 0)) {
      throw new Error("Matrix must be square to calculate determinant.");
    }
    // math.det will also throw an error for non-square matrices
    return math.det(matrix);
  }

  /**
   * Transposes a matrix.
   * @param {number[][]} matrix - The input matrix.
   * @returns {number[][]} The transposed matrix.
   */
  static transpose(matrix) {
    return math.transpose(matrix);
  }

  /**
   * Multiplies two matrices.
   * @param {number[][]} a - The first matrix.
   * @param {number[][]} b - The second matrix.
   * @returns {number[][]} The resulting matrix.
   * @throws {Error} if dimensions are incompatible for multiplication.
   */
  static multiply(a, b) {
    // mathjs handles dimension checks and throws a descriptive error
    return math.multiply(a, b);
  }

  /**
   * Calculates the inverse of a matrix.
   * @param {number[][]} matrix - The input matrix.
   * @returns {number[][]} The inverse matrix.
   * @throws {Error} if the matrix is not square or is singular.
   */
  static inverse(matrix) {
    if (matrix.length === 0 || matrix.length !== (matrix[0]?.length || 0)) {
      throw new Error("Matrix must be square to be invertible.");
    }
    // math.inv throws an error for singular matrices
    return math.inv(matrix);
  }
}