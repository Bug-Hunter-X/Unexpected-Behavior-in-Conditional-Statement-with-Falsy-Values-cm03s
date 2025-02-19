function foo(a, b) {
  if (!a || !b) {
    return 0; // Handles all falsy values
  }
  return a + b;
}
console.log(foo(0, 1)); // 0
console.log(foo(1, null)); //0
console.log(foo(1, undefined));//0
console.log(foo(1,''));//0