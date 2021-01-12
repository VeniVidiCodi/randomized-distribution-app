let state = {
    groups: [],
    roster: []
}



function renderGroupRangeButtons(a, b) {
    let buttonBar = document.querySelector(".group-btn-container");
    console.log(buttonBar);

    for (let i = a; i <= b; i++) {
        let btn = document.createElement("div");
        btn.className = "group-button";
        btn.innerText = i;
        console.log(btn);
        buttonBar.appendChild(btn);
    }
}

function renderSelectValues(a, b) {
    let selector = document.getElementById("roster-select");
    // console.log(selector);

    for (let i = a; i < b; i++) {
        let option = document.createElement("option");
        // console.log(option);
        option.value = i;
        option.innerText = i;
        selector.appendChild(option);
    }
}

renderGroupRangeButtons(2, 8);
renderSelectValues(4, 40);