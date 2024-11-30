function add(numbers) {
    if (!numbers) return 0;
  
    let delimiters = /,|\n/; // Default delimiters
    if (numbers.startsWith("//")) {
      const match = numbers.match(/^\/\/(.+)\n/);
      delimiters = new RegExp(match[1]);
      numbers = numbers.split("\n").slice(1).join("\n"); // Remove delimiter line
    }
  
    const nums = numbers.split(delimiters).map(Number);
  
    const negatives = nums.filter((num) => num < 0);
    if (negatives.length) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }
  
    return nums.reduce((sum, num) => sum + num, 0);
  }
  
  module.exports = { add };
  
  
  
  
  test('supports custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
  });
  
  test('supports custom delimiters with multiple characters', () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
  });
  
  
  
  
  function add(numbers) {
    if (!numbers) return 0;
  
    let delimiters = /,|\n/; // Default delimiters
    if (numbers.startsWith("//")) {
      const match = numbers.match(/^\/\/(.+)\n/);
      delimiters = new RegExp(match[1]);
      numbers = numbers.split("\n").slice(1).join("\n"); // Remove delimiter line
    }
  
    const nums = numbers.split(delimiters).map(Number);
  
    const negatives = nums.filter((num) => num < 0);
    if (negatives.length) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }
  
    return nums.reduce((sum, num) => sum + num, 0);
  }
  
  module.exports = { add };