/** Modal **/
const dialog = document.querySelector("dialog")
const showDialog = document.getElementById("openModal")
const closeDialog = document.getElementById("close")

showDialog.addEventListener("click", () => {
   dialog.showModal()
})
closeDialog.addEventListener("click", () => {
   dialog.close()
})
