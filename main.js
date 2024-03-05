let taskList = document.getElementById("taskList")
let taskInput = document.getElementById("taskInput")
let addTask = document.getElementById("addTask")
let parent = document.getElementById('parent')
let title = document.getElementById('title')
let btn = document.querySelector('#darkMode')
let select = document.getElementById('select')
let data = [];
let obj = {}
let eId = "";
let alirt = "";

if (localStorage.info) {

    data = JSON.parse(localStorage.info)

}
else {
    data = [];
}

if (localStorage.color) {
    parent.style.border = `${localStorage.color} solid 2px`;
    addTask.style.backgroundColor = localStorage.color;
    title.style.color = localStorage.color;
    select.style.color = localStorage.color;
    select.style.border = `${localStorage.color} solid 2px`;
    btn.style.border = `${localStorage.color} solid 2px`;
    btn.style.color = localStorage.color;
    taskInput.style.border = `${localStorage.color} solid 2px`;
    taskList.style.color = localStorage.color

}

if (localStorage.backgroundColor || localStorage.btnContent) {

    document.body.style.backgroundColor = localStorage.backgroundColor

    btn.innerHTML = JSON.parse(localStorage.btnContent)
}

addTask.onclick = () => {

    if (taskInput.value !== "") {

        taskList.innerHTML += `
        <li style="font-weight: 700;">
            ${taskInput.value}
            <button id="li" onclick=" eId = this.previousSibling.textContent.trim();Delete();if (alirt === true) {this.parentNode.remove()}">Delete</button>
        </li>
        `

        dataPushObj()

        localSet(data)

    }

    taskInput.value = ""

    taskInput.focus()

}

function dataPushObj() {

    obj = {
        value: taskInput.value
    }

    data.push(obj)

}

function localSet(data) {

    localStorage.info = JSON.stringify(data)

}

btn.onclick = () => {

    if (btn.name === "dark") {

        btn.name = "light"

        btn.innerHTML = `Light <i class="fa-solid fa-sun"></i>`

        document.body.style.backgroundColor = "#333"


        localStorage.backgroundColor = '#333'

        localStorage.btnContent = JSON.stringify(`Light <i class="fa-solid 
        fa-sun"></i>`)

    }
    else
        if (btn.name === "light") {

            btn.name = "dark"

            btn.innerHTML = `Dark <i class="fa-solid fa-moon"></i>`

            document.body.style.backgroundColor = "white"

            localStorage.backgroundColor = 'white'

            localStorage.btnContent = JSON.stringify(`Dark <i class="fa-solid fa-moon"></i>`)


        }

}

function localGet() {

    JSON.parse(localStorage.info).map(function (e) {
        taskList.innerHTML += `
            <li style="font-weight: 600;">
                ${e.value}
                <button  onclick=" eId = this.previousSibling.textContent.trim();Delete();if (alirt === true) {this.parentNode.remove()}">Delete</button>
            </li>
            `
            ;
    })

}

localGet()

function Delete() {

    alirt = confirm(`Are you sure you want to delete    ("${eId}")  `)

    if (alirt === true) {

        let info = JSON.parse(localStorage.getItem("info"));

        let updatedInfo = info.filter((eleme) => eleme.value != eId)

        localStorage.info = JSON.stringify(updatedInfo)

        if (data.length !== JSON.parse(localStorage.getItem("info")).length) {

            data = JSON.parse(localStorage.info)
        }

    }

    taskInput.focus()
}

function localColor(e) {

    localStorage.color = e

    var parent = document.getElementById("parent");
    parent.style.border = `${e} solid 2px`;

    select.style.border = `${e} solid 2px`;
    select.style.color = e;

    btn.style.color = e;
    btn.style.border = `${e} solid 2px`;

    addTask.style.backgroundColor = e;

    title.style.color = e;

    taskInput.style.border = `${e} solid 2px`;

    taskList.style.color = e


}