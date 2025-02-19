function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; //Incorrect: should handle other falsy values like null, undefined, ''
  }
  return a + b;
}
console.log(foo(0, 1)); // 0
console.log(foo(1, null)); //Uncaught TypeError: Cannot convert undefined or null to object