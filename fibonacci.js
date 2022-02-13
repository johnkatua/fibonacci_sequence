// soln 1
const fibonacci = (n) => {
  let a = 1, b = 0, temp;

  while (n > 0) {
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }

  return b;
};
console.log(fibonacci(5)); // 5
console.log(fibonacci(10)); // 55
console.log(fibonacci(28)); // 317811
console.log(fibonacci(35)); // 9227465
console.log(fibonacci(50)); // 12586269025

// soln 2
const fibonacci = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
};
console.log(fibonacci(5)); // 5
console.log(fibonacci(10)); // 55
console.log(fibonacci(28)); // 317811
console.log(fibonacci(35)); // 9227465
console.log(fibonacci(50)); // 12586269025
