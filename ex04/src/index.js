function sumFibonacci(num) {
    if(num === 1) {
        return 1;
    }
    if(num > 0) {
        var sum = 2;

        var prev = 1;
        var curr = 1;
        var next = 2;

    while (next <= num) {
        prev = curr;
        curr = next;
        next = prev + curr;

    if (curr % 2 !== 0) {
      sum += curr;
    }
  }
  return sum;
} else {
    return 0;
}
}
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports=sumFibonacci;