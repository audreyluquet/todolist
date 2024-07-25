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

/** Create Todolist **/
const toDoList = document.getElementById("todoList")

let index // id de chaque todolist

function createList() {
   const list = document.createElement("article")
   const titleList = document.createElement("h3")
   const txtTitleList = document.getElementById("titleTodo").value
   const title = document.createTextNode(txtTitleList)
   titleList.appendChild(title)
   list.appendChild(titleList)
   toDoList.appendChild(list)
}
