const todoList = [
  { name: "Todo 1", dueDate: "2021-07-01" },
  { name: "Todo 2", dueDate: "2021-07-02" },
]

renderTodoList()

function renderTodoList() {
  let todoListHTML = ""

  todoList.forEach((todo, index) => {
    const { name, dueDate } = todo
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${index}, 1);
        renderTodoList();
      " class="delete-todo-button">Delete</button> 
    `
    todoListHTML += html
  })

  document.querySelector(".js-todo-list").innerHTML = todoListHTML
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input")
  const name = inputElement.value

  const dateInputElement = document.querySelector(".js-due-date-input")
  const dueDate = dateInputElement.value

  todoList.push({ name, dueDate })

  inputElement.value = ""
  renderTodoList()
}
