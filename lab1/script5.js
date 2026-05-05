document.querySelector("#form").onsubmit = (ev) => {
    ev.preventDefault();
    let n = parseInt(document.querySelector("#n").value);
    let str1;
    let k = 0;
    for (let i = 0; i < n; i++) {
        str1 = "";
        for (let j = 0; j < 6; j++) { 
            if (k % 5 < 3) {
                str1 += "dog\t";
            } else {
                str1 += "cat\t";
            }
            k += 1;
        }
        console.log(str1);
    }
} 