let field = document.querySelector('#field')

let inputBlockId = document.querySelector('#input-block-id')
let input = document.querySelector('#input')
let sendBtn = document.querySelector('#send-btn-id')
let list = document.querySelector('#todo-list-id')
let info = document.querySelector('#info-block-id')
let bar = document.querySelector('#bar')
let remBtn = document.querySelector('#remove-btn-id')
console.log(field, inputBlockId,input,sendBtn,list,info,bar,remBtn)

let itemId = 0;//для запоминаия ID
let changeBtnId = 0;//для запоминаия ID
let delBtnId = 0;//для запоминаия ID
function addToDo (event){

if(event.target.id = 'send-btn-id'){
let todoItem = document.createElement('div');
let itemText = document.createElement('span');
let check = document.createElement('input');
let changeBth = document.createElement('button');
let delBth = document.createElement('button');

//добавит создать не обходимые кнопки в диве чек бокс и д
todoItem.classList.add('item')
todoItem.id += itemId// добавляет id
itemId++;// меняет при каждом клике
list.append(todoItem)
todoItem.innerHTML = input.value

input.value = ''
}

}
sendBtn.addEventListener('click',addToDo)