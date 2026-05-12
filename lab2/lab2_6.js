function compare(x) {
    return (y) => {
        if (y > x) { return true; }
        if (y < x) { return false; }
        if (y == x) { return null; }
    };
}
console.log(compare(5)(4));
console.log(compare(5)(5));
console.log(compare(5)(6));