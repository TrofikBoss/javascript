'use strict'

document.querySelector("#age_form").onsubmit = (ev) => {
    ev.preventDefault();
    console.log(ev);
    let age = document.querySelector("#age_form input[name='age']").value;
    let gender_is_male = document.querySelector("#age_form #male").checked == true;
    console.log(gender_is_male);
    if (age <= 17) {
        document.querySelector("#age_form textarea").value = "Вам работать ещё рано — учитесь";
    } else if ((gender_is_male && age >= 18 && age <= 59) || (!gender_is_male && age >= 18 && age <= 54)) {
        document.querySelector("#age_form textarea").value = "Вам ещё работать и работать";
    } else if ((gender_is_male && age >= 60 && age <= 64) || (!gender_is_male && age >= 55 && age <= 59)) {
        document.querySelector("#age_form textarea").value = "Скоро пенсия!";
    } else if ((gender_is_male && age > 65) || (!gender_is_male && age > 60)) {
        document.querySelector("#age_form textarea").value = "Вам пора на пенсию";
    } else {
        document.querySelector("#age_form textarea").value = "Да кто ты такой?";
    }
}