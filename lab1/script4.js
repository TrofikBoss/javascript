document.querySelector("#form").onsubmit = (ev) => {
    ev.preventDefault();
    let n = parseInt(document.querySelector("#n").value);
    let check = true;
    let str1 = "";

    for (let i = 2; i < n + 1; i++) {
        check = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                check = false;
                break;
            }
        }
        if (check) {
            str1 += i + " ";
        }
    }
    document.querySelector("#form textarea").value = str1;
}