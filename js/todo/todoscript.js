let field = document.querySelector('#field')
let todoInput = document.querySelector('#input')
let sendBtn = document.querySelector('#send-btn-id')
let list = document.querySelector('#todo-list-id')
let info = document.querySelector('#info-block-id')
let bar = document.querySelector('#bar')
let remBtn = document.querySelector('#remove-btn-id')
let scale = document.querySelector('.progress-scale');
let progressText = document.querySelector('.progress-text');
let done = document.querySelector('.done');
//console.log(done)
	//-----------------------------пременные для генерации элементов
	let todoItem;	let buttonBlock; let textBlock; let itemText;	let check; let changeBtn; let delBtn;
	
//----------------------------gпеременные для хранения Id // можно удалить
let itemId = 0;//для запоминаия ID
let checkId = 0;
let changeBtnId = 0;//для запоминаия ID
let delBtnId = 0;//для запоминаия ID
let textId = 0;//для запоминаия texta
let buttonBlockId  = 0;
let textBlockId = 0;
//------------------------------
  let todoArr; 
  let items;
  let item;
  let notHilightTodo;
 

function addToDo (event){

if(event.target.id = 'send-btn-id'){
	//-----------------------------пременные для генерации элементов
todoItem = document.createElement('div');// для хранения всех элементов и вывода на экран
buttonBlock = document.createElement('div');
textBlock = document.createElement('div');
itemText = document.createElement('span');// для хранения текста
check = document.createElement('input');// для хранения чекбокса
changeBtn = document.createElement('button');// для хранения кнопки редактирования
delBtn = document.createElement('button');// для хранения кнопки удаления

//---------------------------------------генеоация элементов для todiItem
//----------------------------------check-> todoItem 
check.classList.add('checker');//создание класса для check
check.type = 'checkbox'
//check.checked = false
check.id += checkId + 'ch';
checkId++;
todoItem.append(check);
//----------------------------------itemText->textBlock
itemText.classList.add('text');//создание класса для itemText
itemText.id += textId + 't';
textId++;
textBlock.append(itemText);
itemText.innerHTML = todoInput.value;
todoInput.value = '';
//----------------------------------textBlock->todoItem
textBlock.classList.add('block-for-text');
textBlock.id += textBlockId +'tb'
textBlockId++;
todoItem.append(textBlock)
//------------------------------------changeBtn -> buttonBlock
changeBtn.classList.add('change');//создание класса для changeBth
changeBtn.id += 'chb' + changeBtnId;
changeBtnId++; 
buttonBlock.append(changeBtn);
changeBtn.innerHTML = 'Ch';
//------------------------------------delBtn->buttonBlock
delBtn.classList.add('delete');//создание класса для delBth
delBtn.id += 'db' + delBtnId;
delBtnId++;
buttonBlock.append(delBtn);
delBtn.innerHTML = 'Del';
//------------------------buttonBlock->todoItem 
buttonBlock.classList.add('btnBlock')
buttonBlock.id += 'bb' + buttonBlockId;
buttonBlockId++;
todoItem.append(buttonBlock);
//----------------------todoItem-> list 
todoItem.classList.add('item','not-hilight')//создание класса для todoItem
todoItem.id += itemId+'td'// добавляет id
itemId++;// меняет при каждом клике
list.append(todoItem)
 } 
 scale.style.backgroundColor = 'red';
scale.style.width = 110 +'px';
	
//todoInput.value = localStorage('TODO')
 //--------------------------------------------------
 todoArr = [];
 items = document.querySelectorAll('.item');
 item = document.querySelector('.item');
 let todoAmount = document.querySelector('.todo-amount');
 let done = document.querySelector('.done');
 //let hilightTodo;
 let hilightTodo = []
 let step;
 let element;
  for(element of items){
    todoArr.push(element)
 }
 //let todoTextArr = Array.from(document.querySelectorAll('itemText.textContent'));
 let todoTextArr = []
 let elementText;
 for(elementText of document.querySelectorAll('.text') ){
	elementText.style.color = 'green';
	todoTextArr.push(elementText.textContent)
 }
 //console.log(todoTextArr)
  todoAmount.innerHTML =  items.length// вставляем количество TODO
	done.innerHTML =  0;//вставляем в див  начальное количество выполненых Todo
	let todoAmmountValue = Number(todoAmount.innerText)
	
	let scaleWidth = 0;
	let moveScale;
	
//-------------------------------function for working with ToDo
   function todoOptions(event){// change color when click on checkbox
		
  if(event.target.classList.contains('checker') && event.target.checked != 'checked'){//change color checcked Todo  && isChecked
		
		element.classList.toggle('not-hilight');
		element.classList.toggle('hilight');
		moveScale = document.createElement('div');
    moveScale.classList.toggle('scale-div');
	  moveScale.style.width =  scaleWidth +'px';
		console.log(check.value)
}
	  hilightTodo = todoArr.filter(item => item.classList.contains('hilight'))
	  done.innerHTML = hilightTodo.length;
	  //console.log(hilightTodo);
		
	  notHilightTodo = todoArr.filter(item => item.checked != 'checked')
	  .filter(item => item.classList.contains('not-hilight'))
	 
		step =  parseInt(scale.style.width)/items.length
		
		// if (event.target.checked != true ) {
				
		// 	scaleWidth -= step
		//   moveScale.style.width = scaleWidth +'px';
			
		// }	
//------------------------
 function deleteTodo(){
			
  if(event.target.classList.contains('delete') && element.classList.contains('hilight')){
		// let i;
		// for(i = event.target; i < todoArr.lentgh; i++){
		// 	todoArr.splice(i, 1)
		// 	console.log(todoArr.lentgh)
		// }
	
		element.classList.toggle('hilight');// если так то считает
		done.innerHTML = hilightTodo.length - 1;
	  todoAmount.innerHTML = todoAmmountValue-1 ;
	  element.remove();
		scaleWidth -= step;
	  moveScale.style.width = scaleWidth +'px';

	} else if (hilightTodo.length == items.length){
    //done.innerHTML = hilightTodo.length;
		todoAmount.innerHTML = items.length;//todoAmmountValue
	 }
	 
	}
		deleteTodo();
		
		let changeBlock;
		let areaForChangeToDo;
		let addChangeBtn;
		let textValueFromItemText = elementText.innerText

	function createChangeField(){

  if(event.target.classList.contains('change') ){//examination class contains
//---------------------------create new DIV for 
	 changeBlock = document.createElement('div');
   changeBlock.classList.toggle('block-for-change-todo');
	 changeBlock.id = parseInt(element.id) + 'block';
   element.after(changeBlock);// todoItem.after(changeBlock)
 // ----------------create new input for make change -> changeBlock

    areaForChangeToDo = document.createElement('input');
	  areaForChangeToDo.classList.toggle('change-text');
	  areaForChangeToDo.type = 'text';
	  areaForChangeToDo.value = textValueFromItemText//elementText.innerText;
    changeBlock.append(areaForChangeToDo);
//-------------------------------------create newButton for add change-> changeBlock
    addChangeBtn = document.createElement('button');
	  addChangeBtn.classList.add('add-change');
		changeBlock.append(addChangeBtn);
	  addChangeBtn.innerText = 'Add';
  }
	if (check.checked && element.classList.contains('hilight') /*&& event.target.classList.contains('change')*/){
			changeBtn.disabled = true
		}else{changeBtn.disabled = false}
	return
}
createChangeField() 
	//======================================
	function addChangeAtTodo(event){//function for adding change todo
		console.log(event.target.classList.contains('add-change'))
		if (event.target.classList.contains('add-change')/* == addChangeBtn && parseInt(changeBlock.id) === parseInt(element.id)*/){//event.target.classList.contains('add-change')
		elementText.innerHTML = areaForChangeToDo.value;
	   changeBlock.remove();
    }	 
}
changeBlock.addEventListener('click', addChangeAtTodo)
//addChangeBtn.addEventListener('click', addChangeAtTodo)

 //===========================================

	 }
function removeChecked(event){//function for remove all todo with checkbox == checked
	
	if(event.target.classList.contains('remove') && element.classList.contains('hilight')){
    done.innerHTML = 0;
	  todoAmount.innerHTML = notHilightTodo.length;
  	element.remove();// удалиь элемен тmoveScale.classList.toggle('scale-div');
	  
		scaleWidth = 0;
    moveScale.style.width = scaleWidth + 'px';
     } 
   }
	
	 //==============================================	
	// let scaleWidth = 0;
	// let moveScale;
function progressBar(event){
	// moveScale = document.createElement('div');
	// moveScale.classList.toggle('scale-div');
	// moveScale.style.width =  scaleWidth +'px';
	  
	if(event.target.checked != 'checked' && element.classList.contains('hilight')){
		 scaleWidth += step
		 moveScale.style.width = scaleWidth +'px';
	   scale.append(moveScale);
	} 
 }
 console.log(todoArr)
   todoItem.addEventListener('click', todoOptions)
   todoItem.addEventListener('click', progressBar)
   remBtn.addEventListener('click', removeChecked)
}
sendBtn.addEventListener('click', addToDo)



