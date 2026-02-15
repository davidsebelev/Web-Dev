const form  =document.querySelector(".todo-form");
const input = document.querySelector(".todo-form__input");
const list = document.querySelector(".todo__list");
const emptyText = document.querySelector(".todo_empty");

// отслеживается событие получаем доступ

form.addEventListener("submit",function(event)
{
    event.preventDefault();

    const taskText = input.value.trim();
    if(taskText == "")return;

    const li = document.createElement("li");
    li.classList.add("todo__item");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("todo__checkbox");

    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.classList.add("todo__delete");

    deleteBtn.addEventListener("click", function () {
        li.remove();
    
        if (list.children.length === 0) {
            emptyText.style.display = "block";
        }
    });

    checkBox.addEventListener("change", function(){
        li.classList.toggle("done");
    })
    
    li.appendChild(checkBox)
    li.appendChild(span);
    li.appendChild(deleteBtn);

    list.appendChild(li);


    input.value = "";

    emptyText.style.display = "none";
}
)
