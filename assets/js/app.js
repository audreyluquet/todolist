/** Open / Close Modal **/
const dialog = document.querySelector("dialog")
const showDialog = document.getElementById("openModal")
const closeDialog = document.getElementById("close")

showDialog.addEventListener("click", () => {
   dialog.showModal()
})
closeDialog.addEventListener("click", () => {
   dialog.close()
})

/** Vérif Form **/
const titleTodo = document.getElementById("titleTodo")
const addList = document.getElementById("addList")

addList.disabled = true // btn non clic

// si input = required
if (titleTodo) {
   //btn click
   addList.disabled = false
   addList.classList.remove("not-required")
   addList.classList.add("required")
   addList.style.cursor = "pointer"
}

/* /** Create Todolist with Delete 
const toDoList = document.getElementById("todoList")

function createList() {
   const list = document.createElement("article")
   list.innerHTML = `<i onclick="this.parentElement.remove()" class="fa-solid fa-trash-can"></i>`

   const titleList = document.createElement("h3")
   const txtTitleList = document.getElementById("titleTodo").value.trim() // trim => enlève espace dbt et fin
   const title = document.createTextNode(txtTitleList)
   titleList.appendChild(title)
   list.appendChild(titleList)

   const form = document.createElement("form")
   form.innerHTML = `
      <input id="nameTask" type="text" required />
      <button onclick="createTask()">Ajouter</button>
   `
   list.appendChild(form)

   const ulTask = document.createElement("ul")
   list.appendChild(ulTask)

   toDoList.appendChild(list)
}

/** Create Task with Delete 
const form = document.getElementsByName("form")

function createTask(form) {
   const taskList = form.parentElement.querySelector("ul") // search ul in article
   const task = document.createElement("li")

   const check = document.createElement("input")
   check.type = "checkbox"
   task.appendChild(check)

   const nameTask = document.createElement("p")
   const txtNametask = form.querySelector("#nameTask").value.trim() // recup value via form
   const name = document.createTextNode(txtNametask)
   nameTask.appendChild(name)
   task.appendChild(nameTask)

   task.innerHTML = `<i onclick="this.parentElement.remove()" class="fa-solid fa-trash-can"></i>`

   taskList.appendChild(task)
   form.reset()
} */

/** Create Todolist with Delete **/
const toDoList = document.getElementById("todoList")

function createList() {
   const list = document.createElement("article")

   const deleteIcon = document.createElement("i")
   deleteIcon.className = "fa-solid fa-trash-can"
   deleteIcon.onclick = () => list.remove()
   list.appendChild(deleteIcon)

   const titleList = document.createElement("h3")
   const txtTitleList = document.getElementById("titleTodo").value.trim() // trim => enlève espace début et fin
   const title = document.createTextNode(txtTitleList)
   titleList.appendChild(title)
   list.appendChild(titleList)

   const form = document.createElement("form")
   form.onsubmit = function (event) {
      event.preventDefault()
      createTask(form)
   }

   const inputTask = document.createElement("input")
   inputTask.id = "nameTask"
   inputTask.type = "text"
   inputTask.required = true
   form.appendChild(inputTask)

   const button = document.createElement("button")
   button.textContent = "Ajouter"
   button.type = "submit"
   form.appendChild(button)

   list.appendChild(form)

   const ulTask = document.createElement("ul")
   list.appendChild(ulTask)

   toDoList.appendChild(list)
}

/** Create Task with Delete **/
function createTask(form) {
   const taskList = form.parentElement.querySelector("ul") // Cherche ul dans article
   const task = document.createElement("li")

   const check = document.createElement("input")
   check.type = "checkbox"
   task.appendChild(check)

   const nameTask = document.createElement("p")
   const txtNametask = form.querySelector("#nameTask").value.trim() // Recup valeur via form
   const name = document.createTextNode(txtNametask)
   nameTask.appendChild(name)
   task.appendChild(nameTask)

   const deleteTaskIcon = document.createElement("i")
   deleteTaskIcon.className = "fa-solid fa-trash-can"
   deleteTaskIcon.onclick = () => task.remove()
   task.appendChild(deleteTaskIcon)

   taskList.appendChild(task)
   form.reset()
}
