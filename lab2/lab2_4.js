function factorial(n) {
    if (n > 1) {
        return BigInt(n) * factorial(n - 1);
    } else if (n == 1 || n == 0) {
        return 1n;
    }
}
console.log("!0: ", factorial(0));
console.log("!5: ", factorial(5));
console.log("!1: ", factorial(1));
console.log("!2: ", factorial(2));
console.log("!3: ", factorial(3));
console.log("!6: ", factorial(6));