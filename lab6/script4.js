let table = document.querySelector("#one");
let buttons_div = document.querySelector("#buttons");
let td_target;
let oldContent = "";
let edit_mode = false;

if (sessionStorage.getItem("table") !== null) {
    table.innerHTML = sessionStorage.getItem("table");
}

table.addEventListener("click" , (ev) => {
    if (!edit_mode) {
        td_target = ev.target;
        if (td_target.tagName == "TD" && !td_target.classList.contains("edit")) {
            td_target.classList.add("edit");
            oldContent = td_target.innerHTML.replaceAll("<br>", "\n");
            let textarea = document.createElement("textarea");
            textarea.value = oldContent;
            td_target.replaceChildren();
            td_target.appendChild(textarea);
            buttons_div.hidden = false;
            edit_mode = true;
        }
    }
})

document.querySelector("#but1").onclick = () => {
    td_target.innerHTML = oldContent.replaceAll("\n", "<br>");
    td_target.classList.remove("edit");
    buttons_div.hidden = false;
    edit_mode = false;
}

document.querySelector("#but2").onclick = () => {
    let content = td_target.querySelector("textarea").value.replaceAll("\n", "<br>");
    td_target.innerHTML = content;
    td_target.classList.remove("edit");
    buttons_div.hidden = false;
    edit_mode = false;
    sessionStorage.setItem("table", table.innerHTML);
}