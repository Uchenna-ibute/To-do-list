let tasks = []
function updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
export { updateLocalStorage, tasks };