import { describe, expect, it } from 'vitest';

describe('Variable Syntax', () => {
  it('Number', () => {
    const numa = 1;
    let numb = numa;
    numb++;
    expect(numa).toBe(1);
    expect(numb).toBe(2);
  });

  it('Object', () => {
    const obja = { a: 1 };
    const objb = obja;
    objb.a++;
    expect(obja.a).toBe(2);
    expect(objb.a).toBe(2);
  });
});
