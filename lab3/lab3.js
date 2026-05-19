export function getDecimal(num) {
    return Math.abs(+(Math.floor(num) - num).toFixed(6));
}

export function normalizeUrl(str) {
    if (str.indexOf("https://") == 0) {
        return str;
    } else if (str.indexOf("http://") == 0) {
        return str.replace("http://", "https://");
    } else {
        return "https://" + str;
    }
}