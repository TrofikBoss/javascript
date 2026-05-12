const sumTo = new Function("n", "let sum = 0;if (n > 0) {for(let i = 1; i < n + 1; i++) {sum += i;}} else{return 0;}return sum;");
console.log(sumTo(10));
