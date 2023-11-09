const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const ulEl = document.getElementById("list");


formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    ToDoList();
})

function ToDoList(){
let newTask = inputEl.value;
const liEl = document.createElement("li");
liEl.innerText = newTask;
ulEl.appendChild(liEl);
inputEl.value = "";
const btnChecked = document.createElement("div");
btnChecked.innerHTML = `<i class="fa-solid fa-calendar-check"></i`;
liEl.appendChild(btnChecked);
const btnDel = document.createElement("div");
btnDel.innerHTML = `<i class="fa-solid fa-trash"></i>`;
liEl.appendChild(btnDel);
btnChecked.addEventListener("click", () => {
    liEl.classList.toggle("checked")

})
btnDel.addEventListener("click", () => {
liEl.remove();
})}
