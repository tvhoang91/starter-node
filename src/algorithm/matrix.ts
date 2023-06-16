import { faker } from '@faker-js/faker';

export function createRandomMatrix(x = 3, y = 3) {
  return Array.from({ length: x }, () =>
    Array.from({ length: y }, () => {
      return faker.number.int(10);
    }),
  );
}
