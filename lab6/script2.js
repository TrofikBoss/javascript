let one = document.querySelector("#one");
let two = document.querySelector("#two");

one.onfocus = () => {
    one.dataset.placeholder = one.placeholder;
    one.placeholder = "";
    two.textContent = one.dataset.placeholder
    two.hidden = false;
}

one.onblur = () => {
    one.placeholder = one.dataset.placeholder;
    two.hidden = true;
}