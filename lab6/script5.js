let modalActive = false;

function showPrompt(html, callback) {
    modalActive = true;

    let form_elem = document.querySelector("#form");
    form_elem.innerHTML = html;

    document.querySelector("#form input[name='text']").focus();

    document.querySelector("#send").onclick = () => {
        callback(document.querySelector("#form input[name='text']").value);
        document.querySelector("#form").innerHTML = "";
        modalActive = false;
    }
    document.querySelector("#form").onsubmit = () => {
        callback(document.querySelector("#form input[name='text']").value);
        document.querySelector("#form").innerHTML = "";
        modalActive = false;
        document.querySelector(".body-content").style.pointerEvents = "auto";
        document.querySelector(".body-content").style.userSelect = "auto";
    }
    document.querySelector("#cancel").onclick = () => {
        callback(null);
        document.querySelector("#form").innerHTML = "";
        modalActive = false;
        document.querySelector(".body-content").style.pointerEvents = "auto";
        document.querySelector(".body-content").style.userSelect = "auto";
    }
    document.querySelector(".body-content").style.pointerEvents = "none";
    document.querySelector(".body-content").style.userSelect = "none";
}
let htmlForm = '<form action="" id="one"><h1>Введите сообщение</h1><input type="text" name="text"><button id="cancel">Отмена</button><button id="send">Ок</button></form>';
let body_content = document.querySelector(".body-content");

let formFunction = function(value) {
    alert(value);
};

showPrompt(htmlForm, formFunction);

document.addEventListener("scroll", (ev) => {
    if (modalActive)
        ev.preventDefault();
})