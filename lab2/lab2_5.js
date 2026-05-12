function fib(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1 && n == 2) {
        return 1;
    }

    let a = 1n;
    let b = 1n;
    let c = 0n;

    for (let i = 3; i < n + 1; i++) {
        c = a + b;
        b = a;
        a = c;
    }
    return a;
} 
console.log(fib(0));
console.log(fib(100));