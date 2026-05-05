'use strict'

document.querySelector("#form_count").onsubmit = (ev) => {
    ev.preventDefault();
    let num = document.querySelector("#number").value;
    let str1 = "На ветке сидит " + num + " ворон";
    let last_number = String(num)[String(num).length - 1];
    if (num == 1) {
        str1 += "а";
    } else if (num >= 2 && num <= 4) {
        str1 += "ы";
    } else if (num > 20) {
        if (last_number == "1") {
            str1 += "а";
        } else if (last_number >= 2 && last_number <= 4) {
            str1 += "ы";
        }
    }

    alert(str1);
}