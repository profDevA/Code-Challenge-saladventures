var sum_to_n_a = function (n) {
  // your code here
  return (n * (n + 1)) / 2;
};

var sum_to_n_b = function (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

var sum_to_n_c = function (n) {
  let sum = 0,
    i = 1;

  while (i <= n) {
    sum += i;
    i++;
  }

  return sum;
};

console.log(sum_to_n_a(10));
console.log(sum_to_n_b(10));
console.log(sum_to_n_c(10));
