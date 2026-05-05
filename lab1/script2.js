'use strict'

document.querySelector("#form_count").onsubmit = (ev) => {
    ev.preventDefault();
    let num = parseInt(document.querySelector("#number").value);
    let str1 = "На ветке сидит " + num + " ворон";
    let last_number = num % 10;
    let last_number2 = (num % 100 - last_number) / 10;
    if (num == 1) {
        str1 += "а";
    } else if (num >= 2 && num <= 4) {
        str1 += "ы";
    } else if (num > 20) {
        if (last_number2 != 1) {
            if (last_number == 1) {
                str1 += "а";
            } else if (last_number >= 2 && last_number <= 4) {
                str1 += "ы";
            }
        }
    }
    alert(str1);
}
