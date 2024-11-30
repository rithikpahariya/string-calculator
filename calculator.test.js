const { add } = require('./calculator');

describe('String Calculator', () => {
  test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test('returns the number itself for a single number', () => {
    expect(add("1")).toBe(1);
  });

  test('returns the sum of two numbers', () => {
    expect(add("1,2")).toBe(3);
  });

  test('handles multiple numbers', () => {
    expect(add("1,2,3")).toBe(6);
  });

  test('handles newlines as delimiters', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('supports custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test('supports custom delimiters with multiple characters', () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
  });

  test('throws an error for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
  });

  test('shows all negative numbers in the exception message', () => {
    expect(() => add("1,-2,-3")).toThrow("Negative numbers not allowed: -2, -3");
  });
});