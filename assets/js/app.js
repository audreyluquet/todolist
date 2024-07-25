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

addList.addEventListener("click", () => {
   /* for (let i; tabList >= 0; i++) { */
   createList()
   /* console.log("index " + tabList.id)
   } */
})

/** Create Todolist **/
const toDoList = document.getElementById("todoList")
toDoList.innerHTML = ""

let tabList = []

function createList() {
   toDoList.innerHTML = `
      <article id="${tabList.id}">
         <i class="fa-solid fa-trash-can"></i>
         <h3>${titleTodo.value}</h3>
         <form>
            <input type="text" placeholder="Nom de la tâche" required>
            <button id="addtask">Ajouter</button>
         </form>
         <ul>
            <!-- vide de base -->
         </ul>
      </article>
   `
}
