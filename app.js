var list = document.getElementById('list');

function addTodo(){
    var todo_item = document.getElementById('todo');

    // create li tag with text node
    var li = document.createElement('li')
   var liText = document.createTextNode(todo.value)
    li.appendChild(liText)


// create delete button
var delBtn = document.createElement('button')
var delText = document.createTextNode('DELETE')

// DELETEBTN WORK
delBtn.setAttribute('class','btn')
delBtn.setAttribute('onclick','deleteItem(this)')

delBtn.appendChild(delText)

li.appendChild(delBtn)

// edit button
var editBtn = document.createElement('button')
var editText = document.createTextNode("EDIT")

editBtn.appendChild(editText)
editBtn.setAttribute("onclick","editItem(this)") 


li.appendChild(editBtn)

list.appendChild(li)


todo.value = " "


}

function deleteItem(e){
e.parentNode.remove();

}

function deleteAll(){
list.innerHTML= " "
}

function editItem(e){

    var val = e.parentNode.firstChild.nodeValue;    
  var editValue = prompt ('enter edit value',val)

  e.parentNode.firstChild.nodeValue =editValue
    
}

