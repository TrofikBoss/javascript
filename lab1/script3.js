document.querySelector("#a").onclick = (ev) => {
    ev.preventDefault();
    if (numberLoop()) {
        window.location.href = document.querySelector("#a").href;
    } else {
        if (confirm("Вы уверены, что хотите перейти сюда?")) {
            window.location.href = document.querySelector("#a").href;
        }
    }
}
function numberLoop() {
    let num = 0;
    while (num != null && num <= 100) {
        num = prompt("Введите число более 100");
    }
    if (num > 100) {
        return true;
    } else {
        return false;
    }
}