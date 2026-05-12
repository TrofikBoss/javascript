function addBlackSpot(obj) {
    obj[Symbol.for("blackSpot")] = true;
    return obj;
}

console.log(addBlackSpot({}));