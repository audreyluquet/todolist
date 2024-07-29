/** Open / Close Modal **/
const dialog = document.getElementById("modal")
const showDialog = document.getElementById("openModal")
const closeDialog = document.getElementById("close")

showDialog.addEventListener("click", () => {
   dialog.showModal()
   dialog.style.display = "flex"
})
closeDialog.addEventListener("click", () => {
   dialog.close()
   dialog.style.display = "none"
})
dialog.addEventListener("click", (event) => {
   if (event.target === modal) {
      dialog.close()
      dialog.style.display = "none"
   }
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

   dialog.close()
   dialog.style.display = "none"
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
