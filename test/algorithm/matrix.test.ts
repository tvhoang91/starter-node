import { createRandomMatrix } from '@src/algorithm/matrix';
import { describe, expect, it } from 'vitest';

describe('Create Matrix', () => {
  it('3x3 Matrix', () => {
    const matrix = createRandomMatrix();
    expect(matrix.length).toBe(3);
  });

  it('5x10 Matrix', () => {
    const matrix = createRandomMatrix(5, 10);
    expect(matrix.length).toBe(5);
    expect(matrix[0].length).toBe(10);
  });
});
