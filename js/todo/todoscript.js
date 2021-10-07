let field = document.querySelector('#field')
//let inputBlockId = document.querySelector('#input-block-id')
let input = document.querySelector('#input')
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
	var todoItem;	let buttonBlock; let textBlock; let itemText;	let check; let changeBtn; let delBtn;
	
//----------------------------gпеременные для хранения Id
let itemId = 0;//для запоминаия ID
let checkId = 0;
let changeBtnId = 0;//для запоминаия ID
let delBtnId = 0;//для запоминаия ID
let textId = 0;//для запоминаия texta
let buttonBlockId  = 0;
let textBlockId = 0;
//------------------------------
  let todoArr; 
  var items;
 var item;
 var isChecked 
 var hilightTodo;
 var notHilightTodo;


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
//check.hasAttribute('checked', true)
check.id += 'ch' + checkId;
checkId++;
todoItem.append(check);
//----------------------------------itemText->textBlock
itemText.classList.add('text');//создание класса для itemText
itemText.id += 't'+ textId;
textId++;
textBlock.append(itemText);
itemText.innerHTML = input.value;
input.value = '';
//----------------------------------textBlock->todoItem
textBlock.classList.add('block-for-text');
textBlock.id += 'tb'+ textBlockId
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

todoItem.id += 'td' + itemId// добавляет id
itemId++;// меняет при каждом клике
list.append(todoItem)
 } 
 
 //--------------------------------------------------
 todoArr = [];
 items = document.querySelectorAll('.item');
 item = document.querySelector('.item');
 var todoAmount = document.querySelector('.todo-amount');
 var done = document.querySelector('.done');
 var step;
 //hilightTodo;
 //isChecked = !check.checked;
 //amountChecked = 0;

 let element;
 for(element of items){
todoArr.push(element)

}
  //todoAmount.innerHTML =  items.length//`${items.length}`;// вставляем количество TODO
	//done.innerHTML =  0;//вставляем в див  начальное количество выполненых Todo
	//let todoAmmountValue = Number(todoAmount.innerText)

	//console.log(todoAmmountValue,'tuduAmmount')
	scale.style.backgroundColor = 'red';
	scale.style.width = 110 +'px';

 
let newTodoArr;
//-------------------------------function for working with ToDo
function todoOptions(event){// change color when click on checkbox
	newTodoArr = todoArr.filter(item => item.classList.contains('item'))
	
	if(event.target.classList.contains('checker') /*&& event.target.checked != 'checked'*/){//change color checcked Todo  && isChecked
		element.classList.toggle('not-hilight');
		element.classList.toggle('hilight');
		//event.target.checked
		//console.log(item);
		}	

		hilightTodo = todoArr.filter(item =>item.classList.contains('hilight'))//item => item.checked != 'checked'
	//	done.innerHTML = hilightTodo.length;

		notHilightTodo = todoArr.filter(item => item.checked != 'checked')
		.filter(item => item.classList.contains('not-hilight'))
	//	console.log(done.innerText)
		
		

		function deleteTodo(){
	
  if(element.classList.contains('hilight') && event.target.classList.contains('delete')){
		
		element.classList.remove('hilight');
		// done.innerHTML = hilightTodo.length-1;
		// todoAmount.innerHTML = items.length-1;
		
		  element.remove();
	  }	
	}
		deleteTodo();
		
		 	

  if(event.target.classList.contains('change')){//examination class contains
//---------------------------create new DIV for 
	 let changeBlock = document.createElement('div');
    changeBlock.classList.add('block-for-change-todo');
    todoItem.append(changeBlock);

 // ----------------create new input for make change -> changeBlock
  let areaForChangeToDo = document.createElement('input');
	  areaForChangeToDo.classList.toggle('change-text')
	  areaForChangeToDo.type = 'text';
	  areaForChangeToDo.innerHTML = itemText.texContent;
    changeBlock.append(areaForChangeToDo);
//-------------------------------------create newButton for add change-> changeBlock
  let addChangeBtn = document.createElement('button');
	  addChangeBtn.classList.add('add-change');
    changeBlock.append(addChangeBtn);
	  addChangeBtn.innerText = 'Add';
	  


function addChange(event){//function for adding change todo
  if (event.target.classList.contains('add-change')){
	  itemText.innerHTML = areaForChangeToDo.value;
	  changeBlock.remove();
    }
   }
 addChangeBtn.addEventListener('click', addChange)
  }
 }
 
function removeChecked(event){//function for remove all todo with checkbox == checked
	
	if(event.target.classList.contains('remove') && element.classList.contains('hilight')){
	
		console.log(notHilightTodo.length == todoArr.length);
		
		// done.innerHTML =  0
		// todoAmount.innerHTML = notHilightTodo.length
		element.remove();// удалиь элемент
 } 
 
}


var moveScale;
let scaleWidth = 0;
// let step;
function progressBar(event){

	step = parseInt(scale.style.width) / todoArr.length;
	removeStep = step * hilightTodo.length;// рассчитать длинну дива по удаленным и отнять еей 
	console.log(removeStep)
	console.log(step)
	moveScale = document.createElement('div') ;
	moveScale.classList.toggle('scale-div');
	moveScale.style.width =  scaleWidth;

	if(event.target.checked != 'checked'  ){
	scaleWidth += step;
	moveScale.style.width = scaleWidth +'px';
	return scale.append(moveScale);
	
	}//else if(event.target.checked == 'checked' && event.target.classList.contains('hilight')){// 

	// 	console.log('-')
	//  	moveScale.classList.toggle('scale-div');
	// 	moveScale.remove()
	//   scaleWidth -= step;
	//   moveScale.style.width = scaleWidth +'px'
	// } 
	if (event.target.classList.contains('delete')){

		moveScale.classList.toggle('scale-div');
		moveScale.remove()
	  scaleWidth = step;
	 
	 moveScale.style.width = scaleWidth +'px';

	}
	if (event.target.classList.contains('remove')){
	 	moveScale.classList.toggle('scale-div');
		scaleWidth = 0;
	 
	moveScale.style.width = scaleWidth +'px';
	 moveScale.remove()
	}
	
}
//check.addEventListener('click',progressBar)


todoItem.addEventListener('click', todoOptions)
todoItem.addEventListener('click', progressBar)
remBtn.addEventListener('click', removeChecked)
}
sendBtn.addEventListener('click', addToDo)

/*
let progress = document.querySelector('#progress');
let btn = document.querySelector('#btn');

let div = document.createElement('div');//создаем див для шкалы прогресса
progress.append(div); //вставляем это тодив внурь div = 'progress'
div.style.height = 'inherit';//задаем родительскую высоту
div.style.backgroundColor = 'red';//задвем цыет фона для нового дива
let widthB = 0;// задаем начальную длинну дива
div.style.width = widthB; впиываем данные в стили
function progressIn() {
  if (widthB === 100) {//оостанавливаем движение прогресса, если достигли 100% длинны род дива
    return;
  }
  if(widthB > 30 && widthB< 60) {
    div.style.backgroundColor = 'yellow';
  }
  if(widthB > 60) {
    div.style.backgroundColor = 'green';
  }
  widthB = widthB + 5;//задаем шаг увеличения прогресса
  div.style.width = widthB + 'px';// вносим изменения в стили дива
}

btn.addEventListener('click', progressIn);
*/

