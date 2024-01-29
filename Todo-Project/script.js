var todoList = [];

function onAddClick() {
  let inputText = document.querySelector("#todo-text");
  let inputTextValue = inputText.value;
  let ulEle = document.querySelector("ul");

  //   let li = document.createElement("li");
  //   li.textContent = inputTextValue;

  //   ulEle.append(li);

  let todoObj = {
    id: todoList.length + 1,
    taskName: inputTextValue,
  };
  todoList.push(todoObj);
  for (let i = 1; i <= todoList.length; i++) {
    let btn = `
    <li>${inputTextValue}</li>
  <button onclick=${onDeleteClick()}>Delete</button>`;

    ulEle.innerHTML = btn;
  }
  console.log(todoList);
  inputText.value = "";
}

onAddClick();

function onDeleteClick() {
  for (let i = 1; i <= todoList.length - 1; i++) {
    todoList.splice(i, 1);
  }
}

onDeleteClick();
