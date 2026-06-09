let selected = document.querySelector("#one option[selected]");
console.log(selected.value);
console.log(selected.textContent);

selected.removeAttribute("selected");
document.querySelector("#one").innerHTML += "<option value='Classic' selected>Классика</option>";