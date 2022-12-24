let userData = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "admin" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
];

userData.map(element => {
    element.age = parseInt(element.age);
});

let result = document.getElementById("result");
let dropdown = document.getElementById("dropdown");
let btn = document.getElementById("filterBtn");


function filterByProfession() {
    result.innerHTML = "";
    let dropdownValue = dropdown.value;

    if (dropdownValue == "Profession") {
        alert("Select a profession before clicking the button !!!");
        return;
    }

    userData.filter(element => {
        if (element.profession === dropdownValue) {
            let div = document.createElement("div");
            div.innerText = element.id + " Name:" + element.name + " Profession:" + element.profession + " Age:" + element.age;
            result.appendChild(div);
        }
    });
}

btn.addEventListener("click", filterByProfession);



// ADD USER
let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");
let professionInput = document.getElementById("proffesion");
let btns = document.getElementById("addUser");

function addUsers() {
    let nameInputValue = nameInput.value;
    let ageInputValue = ageInput.value;
    let professionInputValue = professionInput.value;


    if (nameInputValue != "" && professionInputValue != "" && ageInputValue != "") {

        const newList = {
            id: userData.length + 1,
            name: nameInputValue,
            age: ageInputValue,
            profession: professionInputValue,
            // profession: professionInputValue.toLowerCase(),
        }
        console.log(newList);

        userData = [...userData, newList];
        // uderData.push(newList);
        console.log(userData);

        nameInput.value = "";
        professionInput.value = "";
        ageInput.value = "";
    }
    else {
        alert("Please Add Valid User Input And Select Profession !!");
    }
}

btns.addEventListener("click", addUsers);


// const maxId = Math.max(userData.map(e => e.id));
// const maxId = Math.max.apply(null, userData.map(function (e) { return e.id; }))
// id: maxId + 1,