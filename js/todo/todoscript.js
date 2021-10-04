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
console.log(done)
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
todoItem.classList.add('item')//создание класса для todoItem
todoItem.id += 'td' + itemId// добавляет id
itemId++;// меняет при каждом клике
list.append(todoItem)
 } 



 //--------------------------------------------------
 let todoArr = [];
 let hilightTodoArr = [];
 let items = document.querySelectorAll('.item');
 let item = document.querySelector('.item');
 let todoAmount = document.querySelector('.todo-amount');
 let done = document.querySelector('.done');
 let allHilightTodo;
 let hilightTodo;
 let checked = true;
 let countSumChecked = 0;

let elements;
for(elements of items){
	todoArr.push(elements)
	todoAmount.innerHTML =  `${todoArr.length}`;// вставляем количество TODO
	}
	done.innerHTML =  `${countSumChecked}`;//вставляем в див  начальное количество выполненых Todo
 console.log(todoArr)
 
//-------------------------------function for working with ToDo
function todoOptions(event){// change color when click on checkbox
	  if(event.target.classList.contains('checker') && checked ){//change color checcked Todo
    elements.classList.toggle('hilight');
 }

 allHilightTodo = document.querySelectorAll('hilight')

 for(i = countSumChecked; i < todoArr.length; i++){// вставдяем данные счетчика
	countSumChecked += elements.classList.contains('hilight');
	done.innerHTML =  `${countSumChecked}`;
	
}	
console.log(i)


for(hilightTodo of allHilightTodo ){
	hilightTodoArr.push(hilightTodo)
	
}

	//console.log('fefrweqfweq')
	// for(i = countSumChecked; i < items.length; i++){
	//   countSumChecked -= elements.classList.contains('hilight');
	
  if(event.target.classList.contains('delete') && elements.classList.contains('hilight') ){
    elements.style.display = 'none';
    elements = '';// как удалиь элемент  с концами
		done.innerHTML =  `${countSumChecked-1}`;
}

//---------------      -work with progress-bar

let scaleWidth = 0;

scale.style.width = scaleWidth;

// if(checked){//elements.classList.contains('hilight') 
// 	for(i = countSumChecked; i <= todoArr.length; i++){
// 	  countSumChecked += elements.classList.contains('hilight');
// 		progressText.innerHTML =  `${countSumChecked} из `
// 	}	
// }
//else {
	//console.log(countSumChecked === todoArr.length)
	//countSumChecked -= elements;
//progressText.innerHTML =  `${countSumChecked} из `;
//}


//else if(elements.classList.contains('hilight') == false){
	//countSumChecked += elements.classList.contains('hilight');
//progressText.innerHTML =  `${countSumChecked} из `;
//}


// else if(!checked) {
// 	countSumChecked -= elements.classList.contains('hilight');
// 	 progressText.innerHTML =   `${todoArr.length-countSumChecked} из ${todoArr.length}`;

// }




//---------------------

  if(event.target.classList.contains('change')){//examination class contains
//---------------------------create new DIV for 
	 let changeBlock = document.createElement('div');
    changeBlock.classList.add('block-for-change-todo');
    todoItem.append(changeBlock);

 // ----------------create new input for make change -> changeBlock
  let areaForChangeToDo = document.createElement('input');
	  areaForChangeToDo.classList.add('change-text')
	  areaForChangeToDo.type = 'text';
	  areaForChangeToDo.innerHTML = itemText.texContent;
    changeBlock.append(areaForChangeToDo);
//-------------------------------------create newButton for add change-> changeBlock
  let addChangeBtn = document.createElement('button');
	  addChangeBtn.classList.add('add-change');
    changeBlock.append(addChangeBtn);
	  addChangeBtn.innerText = 'Add';

function addChange(event){//functoin for adding change todo
  if (event.target.classList.contains('add-change')){
	  itemText.innerHTML = areaForChangeToDo.value;
	  changeBlock.style.display = 'none';
    }
   }
 addChangeBtn.addEventListener('click', addChange)
  }



 } 

function removeChecked(event){//function for remove all todo with checkbox == checked
  if(event.target.classList.contains('remove') && elements.classList.contains('hilight') ){
	  elements.style.display = 'none';
	  elements = ''; // как удалиь элемент  с концами
		
    if(countSumChecked <= todoArr.length){
			done.innerHTML = countSumChecked - todoArr.length
		}

 } 
}

todoItem.addEventListener('click', todoOptions)
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
let widthB = 0;
div.style.width = widthB;// задаем длинну дива
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

