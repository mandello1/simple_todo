
// verify if there is something saved when page opens
var taskArray =  localStorage.getItem("todoList") != null ? JSON.parse(localStorage.getItem("todoList")) : [];

// save whatever is written in taskInput element and push new element in taskArray
function saveTask(){

    let task = document.getElementById("taskInput").value;
    taskArray.push(task);
    localStorage.setItem("todoList", JSON.stringify(taskArray));
    document.getElementById("taskInput").value = null;
    printList();
    }

// insert <li> elements with the task name on it.
function printList(){
    document.getElementById("printedList").innerHTML = null;
    for(itens of taskArray){
        let listIten = "<li>" + itens + "</li>";
        document.getElementById("printedList").innerHTML += listIten;
        } 
}

// del localStorage and reload the page
function del(){

    localStorage.removeItem("todoList");
    location.reload(true);

}

