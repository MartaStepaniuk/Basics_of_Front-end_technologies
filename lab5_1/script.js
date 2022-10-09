const body = document.querySelector("body");
const div_with_answers = document.createElement("div");
let is_valid = true;
let error_fields = [];
let answer_fields = [];
function clear() {
    error_fields.forEach(error_field => {
        const field = document.getElementById(error_field);
        field.style.background = "white";
        field.style.border = "2px #858585 solid";
    });
    while (div_with_answers.firstChild) {
        div_with_answers.removeChild(div_with_answers.firstChild);
    }
    is_valid = true;
    error_fields = [];
    answer_fields = [];
}
function check(id, regex, name) {
    const valueFromElement = document.getElementById(id).value;
    if (valueFromElement.match(regex)) {
        const answer = document.createElement("p");
        answer.innerHTML = "<b>" + name + "</b>: " + valueFromElement;
        answer_fields.push(answer);
    } else {
        is_valid = false;
        error_fields.push(id);
    }
}
function confirm() {
    clear();
    check("full_name", /^[A-ZА-ЯІЇЄ][a-zA-ZА-ЯІЇЄа-яіїє]+ [A-ZА-ЯІЇЄ]\.[A-ZА-ЯІЇЄ]\.$/, "ПІБ");
    check("variant", /^\d+$/, "Варіант");
    check("group", /^[A-ZА-ЯІЇЄ][a-zA-ZА-ЯІЇЄа-яіїє]+-\d{2}$/, "Група");
    check("phone", /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/, "Телефон");
    check("id_card", /^[A-ZА-ЯІЇЄ]{2} №\d{6}$/, "ID-card");
    if (is_valid) {
        const entered_data = document.createElement("h3");
        entered_data.innerHTML = "Введені дані";
        div_with_answers.appendChild(entered_data);
        answer_fields.forEach(answer => div_with_answers.appendChild(answer));
        body.appendChild(div_with_answers);
    } else {
        error_fields.forEach(error_field => {
            const field = document.getElementById(error_field);
            field.style.background = "#ffeeee";
            field.style.border = "2px #ff7a7a solid";
        });
    }
}