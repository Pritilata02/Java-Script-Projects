const task_name = document.getElementById('add_text');

document.getElementById('add_text').addEventListener('keypress',(event)=>{
    if(event.key === 'Enter')
    {
        addTask();
    }
});

const add_task_button = document.getElementById('add_button');

add_button.addEventListener('click',addTask);

function addTask() {
    if(document.getElementById('add_text').value == ''){
      alert('Please enter a task!!!')
    }
    else{
      let li = document.createElement("li");
      li.innerHTML = task_name.value;
      list_container.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
    document.getElementById('add_text').value = "";
    savedList();
    
}

list_container.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savedList();
  }
  else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedList();
  }
}, false);

function savedList(){
  localStorage.setItem("data",list_container.innerHTML);
}
function toDoList(){
  list_container.innerHTML=localStorage.getItem("data")
}
toDoList();