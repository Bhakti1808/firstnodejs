function fib(n, memo) {
    if (n < 2) {
      return n;
    }
    if(!memo[n]) {
      memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    }
    return memo[n];
  }
  
  console.log(fib(10, {})); 

