let one = document.querySelector("#textarea");
let oldContent = "";
if (localStorage.getItem("content") !== null) {
    let content = localStorage.getItem("content");
    one.innerHTML = content;
} 

document.addEventListener("keydown", (ev) => {
    if (ev.ctrlKey == true && ev.code == "KeyE") {
        ev.preventDefault();
        let content = one.innerHTML.replaceAll("<br>", "\n");
        one.outerHTML = "<textarea id='textarea'>" + content + "</textarea>";
        one = document.querySelector("#textarea");
    }
})
document.addEventListener("keydown", (ev) => {
    if (ev.ctrlKey == true && ev.code == "KeyS") {
        ev.preventDefault();
        let content = one.value.replaceAll("\n", "<br>");
        oldContent = content;
        one.outerHTML = "<div id='textarea'>" + content + "</div>";
        one = document.querySelector("#textarea");
        localStorage.setItem("content", content);
    }
})
document.addEventListener("keydown", (ev) => {
    if (ev.code == "Escape") {
        ev.preventDefault();
        one.outerHTML = "<div id='textarea'>" + oldContent + "</div>";
        one = document.querySelector("#textarea");
    }
})