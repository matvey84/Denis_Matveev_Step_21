/*let boderLenght = +prompt('Введите длину сорроны');

 
alert(boderLenght**2)*/


/*const mile = 0.621371;
let km = +prompt('Ведите км ');
alert(`mile:${km*mile}`)*/

/*let numberOne = +prompt('ВВедите число 1');
let numberTwo = +prompt('ВВедите число 2');
alert(`${numberOne+numberTwo}`);
alert(`${numberOne-numberTwo}`);
alert(`${numberOne*numberTwo}`);
alert(`${numberOne/numberTwo}`);*/
/*
let numberOne = +prompt('Введите число 1');
let numberTwo = +prompt('Введите число 2');
alert(`${-numberTwo/numberTwo}`);*/

 /*let hours = +prompt(`Введиите часы`);
 let minutes = +prompt(`ВВедите минуты`);
if (hour === 24) {
alert(`Новый день`)
} else if (hours === 0 && minutes === 0){
   alert(`До следующего дня 24 часа`) 
}
alert(`${23-hours} часа - ${60-minutes} минут`);*/
/*
let number = +prompt(`Введите трехзначное число`);
alert(`${(Math.floor((number % 100)/10))}`);*/

//--------------------------классные задания 09.08.2021
/*
let num = +prompt('jhfjf');надо ввести 5 чисел  вывести х с конца
let i=5;//итерации должно быть 5 раз 
while(i!=1){//

 alert(i--); 
}*/
//--------------- tabl umnozheniya na 3
/*let multipl = 3;множитель

let result = 0; запсывает сюда результат
let i = 1; цфра которую умножают
while (i<10) {
   result = i*multipl;
   i++;
  
  document.write(result);
}
*/
//-----------------------------------------for
/*for(i=0; i<5; i++)=>
let i=0;
while(i<5){
   i++;
}*/
 //---------------------------------------------------------
 //let num = +prompt(' ');//ввести делитель
/* for(i=1;i<=100;i++){// 
if (i%num==0){
   document.write(i); 
}
 }*/
 // или через while
/* let i=1;
 while(i<=100){
   if (i%num==0){
      document.write(i);
 }
 i++;
}*/ 
//------------------------------vivesti kazhdoe 4 chislo iz diapozona
/*let num1 = +prompt('min ');//1
let num2 = +prompt('max ');//10
let a; //menshee
let b;// bolshee
count = 1;//peremennaya schetchika
if (num1>num2){//определение какое из чисел меньшее(диапозон)
   b =num1;
   a =num2;
} else{
   b= num2;
   a= num1;
} 
for(a;a<b;a++){// vedenie kazdogo 4go chisla
   if(count%4===0){
      document.write(a);
   }
   count++;
}
*/
/*
let num = +prompt('chislo');
let prostoe = true;
for(let i=2;i<num;i++){
if (num%i ===0){
   prostoe=false;
  
   break;
};
}
prostoe? alert('prostoe')('neprostoe')
*/


 
   
//-------------------------------------практическое задание №3

//-----------------------------------ЗАДАЧА №1(ok!)
/*let num= +prompt('chislo');
let i =1;
while(i<=num){
	document.write( ' # ' );
		i++;
}*/
//-----------------------for
/*for(let i=1;i<=num;i++){
	document.write(' # ');
}*/


//-----------------------------------ЗАДАЧА №2(ok!)
/*let num= +prompt('chislo');
let i=num;
while(i>=0){
	document.write(i);
	i--;
}*/
//--------------- for
/*
for (let i= num; i>=0;i--){
	document.write(`${i}, `);}
	*/
	
//-----------------------------------ЗАДАЧА №3
/*let num=+prompt('chislo');
let step=+prompt('stepen');
let result = 1;
let i =1;

while(i<=step){
	result*=num;
	i++;
}document.write(result);
*/
//--------------------------ЗАДАЧА №4
/*let num1=+prompt('chislo1');//20
let num2=+prompt('chislo2');//2
//let i = 0;
let result =0; 
let finResult;
let max = num1>num2 ? num1:num2;
let min = num2<num1 ? num2 :num1;

//num1>num2 ? num2:num1;
while(max>=1){
result = max/min;
result =(min/result);//5
finResult= result/result;
document.write(finResult);
max--;
console.log(finResult);
}*/


//-------------------pravilniy otvet
/*let chislo1 = +prompt('Vvedite chislo 1');
let chislo2 = +prompt('Vvedite chislo 2');
let i = chislo1 > chislo2 ? chislo2 : chislo1;
while (i>=1) {
    if(chislo1 % i === 0) {
        if(chislo2 % i === 0) {
            document.write(`${i} `);
        }
    }
    i--;
}*/
//--------------------------ЗАДАЧА №5(ok!)
/*
let num=+prompt('chislo');

let i=1;
let result=1;

while(i<=num){
	result*=(i);//=> factorial kazhdogo chisla 1=2;2=4;3=6;4=24;5=120;6=720;....

i++;
}	document.write(`${result} `);//esli vyvod vnesti v skobki nto srabotaet cikl i vyvedetto cto v verhnem komentarii
*/
//------------------------------------(DO...WHILE)
//--------------------------ЗАДАЧА №1(ok!)
/*let question; 
let ans = 6;
do {
question= +prompt('пример:2+2*2');
if(question===ans){
	break;			
	}
 }while(ans===6)
 document.write('Pravilno!');
*/
//--------------------------ЗАДАЧА №2(--)
/*
let num =1000;
let num2 = 2;
let i = 1;
let result=0;

do {
		num=num/num2;
		
		console.log(num);

		
}while(num>=50)
		
console.log(num2);
*/
//--------------------------------------for
//--------------------------ЗАДАЧА №3(+)
/*
let a = +prompt('delitel');
for(i=1; i<=100;i++){
if (i%a===0){

	document.write(`${i}, `);
}
}
*/
//--------------------------ЗАДАЧА №4(ok+-)
/*let num1 = +prompt('chislo1');
let num2 = +prompt('chislo1');
result=0;
let i=num1<num2 ? num1:num2;// diapozon!!!!!!!!!!! (-)
for(let i=1;i<=num2;i++){
	if(result=i%4===0){
		document.write(`${i} `);
	}
  }*/
	//--------------------------ЗАДАЧА №5
   /*
	let num = +prompt('chislo1');
	let result;;//= (num%num===0)&&num%2===0 ? true:false;
	for(let i= 2; i<num; i++){

	if (num%i===0){
		result=false;
				break;
	};//else{result=true;
	//}
}
result ? document.write('neprostoe'):document.write('prostoe');
	*/
//############################################################################################################
//----------------------------------------------12/08/2021
// ---------------------------------------Практическое задание № 4
//---------------------------------------Задача №1
/*
function calculator(num1,num2){
  
  return Math.min(num1,num2);
}
console.log(calculator(5,7)); //передавать данне через имя функции
*/
//---------------------------------------Задача №2
/*
function calculator(num1,stepen){
   // let result = Math.pow(num1,num2);
   //return result//или
   return Math.pow(num1,stepen);
}
   console.log(calculator(5,7));
   */
  //---------------------------------------Задача №3 // zapolnit pozhe
  /*
  function calculator(num1,num2, znak){
   switch (znak){

   }
}
   console.log(calculator(5,7,'+'));
   */

   //---------------------------------------Задача №4
  /*
     function calculator(num){
      for(let i=2;i<num;i++){
       
       if(num%i===0){
            return true;
       };
      } return false;
   }    
   console.log(calculator(6));
  */
//---------------------------------------Задача №5 таблица умножения
/*
function calculator(num1){
   
   for(let i=2; i<=9;i++){
     
   let result = num1*i;
   document.write(`${result} `);      
    
   }
}    
console.log(calculator(2));
  */   

//---------------------------------------Задача №6(--)
/*
function calculator(num1,num2){
 let a = Math.floor(num1/num2);
 let b = num1-num2*a
 return alert(b);
} 
calculator(4,3);
*/
//---------------------------------------Задача №7
/*
function calculator(num1=0,num2=0,num3=0,num4=0,num5=0){
let sum =+(num1+num2+num3+num4+num5);
return alert(sum);
}
calculator(1,2,250,);
*/
//---------------------------------------Задача №8(ok!)
/*
function calculator(num1=0,num2=0,num3=0,num4=0,num5=0){
	let big =Math.max(num1,num2,num3,num4,num5);
	return alert(big);
	}
	calculator(1,425,250,);
	*/
	//---------------------------------------Задача №9
/*	
function defenisionEven(num1,num2){
let i = num1<num2 ? num1:num2;
let result=0;
for (i; i<=num2;i++){
	if(i%2===0){
	document.write(`${i} `);	
  }else if(i%2===0){
		document.write(`${i} `);	
	}
 }
} 
 defenisionEven(1,15);
*/
//-------------------------------------------- добавление третьено оператора (надо разбиратся)
	/*
	function defenisionEven(num1,num2,isEven){
		let i = num1<num2 ? num1:num2;
	   let result=0;
     let isEven=true;
  for(i;i<=num2;i++){
   //isEven=(true||false) ? document.write(`${i%2===0}`):document.write(`${i%2!=0}`);
		if (isEven=true){
		result=i%2===0;
		document.write(`${result}`);
   } else {
		result=i%2!=0;
		document.write(`${result}`);
   }
  }
}
	defenisionEven(5,25,true);
*/
//---------------------------------------Задача №10
/*
  let date = +prompt('Vvedite datu:');
	let month = +prompt('Vvedite mesyac:');
	let year = +prompt('Vvedite god:');
	let cuerrentDate =(`${date} ${month} ${year}`);
	let newDate = (`${(date+1)} ${month} ${year}`);
	let monthRate = (month===4||month===6||month===9||month===11);
	let february = 2;
	let leapYear = (year%4==0)&&(year%100==0)&&(year%400==0);
	let anotherMonthRate = (month===1||month===3||month===5||month===7||month===8||month===10||month===12); 
	
if (cuerrentDate){
	if ((month===12)&&(date===31)){// go to new year
	  date = 1
	  month = 1;	
	  newDate = (`${date} ${month} ${year+1}`);
	  alert(`'Sleduyuschaya data:'${newDate}`);
  }else if ((date===31)&&anotherMonthRate){//month with 31 days-> next month
		date = 1;
		newDate = (`${date} ${month+1} ${year}`);
		alert(`'Sleduyuschaya data:'${newDate}`);
	} else if ((date<31)&&anotherMonthRate){// month with 31days where 28,29,30th day ->next day 
		newDate = (`${(date+1)} ${month} ${year}`);
		alert(`'Sleduyuschaya data:'${newDate}`);
	}
		
  if((date===30)&&(monthRate)){// month with 30 days -> new month;
	  date = 1;
	  newDate = (`${(date)} ${month+1} ${year}`);		
	  alert(`'Sleduyuschaya data:'${newDate}`);
  } else if((date<30)&&(monthRate)){// month with 30 days 28,29th day ->30 
	  newDate = (`${(date+1)} ${month} ${year}`);		
    alert(`'Sleduyuschaya data:'${newDate}`);
  }

	if ((date===29)&&(month===2||february)&&leapYear) {//leap year: 29->new month
		date=1;
		newDate = (`${(date)} ${month+1} ${year}`);
		alert(`'Sleduyuschaya data:'${newDate}`);
  }

  if ((date===28)&&(month===2||february)&&leapYear) {		//leap year: 28->29
	newDate = (`${(date+1)} ${month} ${year}`);
	alert(`'Sleduyuschaya data:'${newDate}`)
  } else if((date===28)&&(month===2||february)){//month with 28 days-> next month
	  date=1;
	  newDate = (`${(date)} ${month+1} ${year}`);
	  alert(`'Sleduyuschaya data:'${newDate}`);
  }
		
  alert(`'Tekuschaya data:' ${cuerrentDate}`);

}
*/

/*
function getNextDate(date,month,year){

return newDate = (`${(date+1)} ${month} ${year}`);
}
console.log(getNextDate(13,08,2021));
*/
//------------------------------------------------Практические заятия от 16.08.2021
//------------------------------------------------Практические задания №5(Рекурсия)

//----------------------------------------------Задача № 1
/*
function factorial(n){
//let result = n;
//let count =n;
//result=result*n--;
return n ? n * factorial(--n):1;

}
console.log(factorial(5));
*/
//----------------------------------------------Задача № 2 напсать числа в диапозоне от меньшего к большего и а оборот
/*
function otMinToMax(min,max){
   document.write(min);
   return min===max ?1:otMinToMax(++min,max)
   }
   function otMaxToMin(min,max){
      document.write(max);
      return min===max ? 1:otMinToMax(min,--max) 
   }
   console.log(otMinToMax(5,10));
   console.log(otMaxToMin(5,10));
   */
   //----------------------------------------------Задача № 3 вывести число задом на перед
   /*
   function zadomNaPered(n){
      document.write(n ? n%10:' ');
      if(n>1){
         
         zadomNaPered(Math.floor(n*0.1));
      }
      
      }
      console.log(zadomNaPered(12345));
      */
      //--------------------------------------------Задача № 4 фунция которая будет считать сумму введеных цифр


      //--------------------------------------------Задача № 5  скобки
    /*  
      let a='()';
      function skobki(n){
           
   if(n!=1) {a='('+ a +')';
   skobki(--n);
   }
    // while(n!=1){
    //n--;
    //a='('+ a +')';
    //}
   return a;
}
  console.log(skobki(3));
 */
//-------------------------------------------------Модуль 2
  //------------------------------------------           ОБЪЕКТЫ 
  //--------------------------------------------- Задача №1
  /*
  let koordinaty =  {//obekt s koordinatami
    ax: 5,
     ay: 20,
     bx:40,
     by:5
  }    
  function pryamoug (a){
    console.log(`verx ${a,ax}, nizhn ${b,bx}`)
  }
  pryamoug (koordinty);
*/
  //--------------------------------------------- Задача №2 (ширина)
  /*
  let koordinaty =  {//obekt s koordinatami
    ax: 5,
     ay: 20,
     bx:40,
     by:5
  }    
  function pryamoug (a){ //найти ширину прямоугольника
    console.log(`ширина ${a.bx-a.ax}`)
  }
  pryamoug (koordinaty);
  */
 //--------------------------------------------- Задача №3 (высота)не рабоает
/*
 let koordinaty =  {//obekt s koordinatami
   ax: 5,
   ay: 20,
   bx:40,
   by:5
}    
function pryamoug (a){ //найти ширину прямоугольника
  console.log(`${a.ay - a.by}`);
}
pryamoug (koordinaty);
*/
//--------------------------------------------- Задача №4(площадь)
/*
let koordinaty = {//obekt s koordinatami
  ax: 5,
  bx:40,
  ay: 20,
  by:5
}    
function pryamoug (a){ 
  let height = a.ay-a.by;
	console.log(height);
    let width = a.bx-a.ax;
  
  console.log(`Ploshcad:${height*width}`);//35*15=525
}
pryamoug (koordinaty);
*/
//--------------------------------------------- Задача №5(периметр)
/*
let koordinaty = {//obekt s koordinatami
  ax: 5,
  bx:40,
  ay: 20,
  by:5
}    
function pryamoug (a){ 
  let height = a.ay-a.by;
  let width = a.bx-a.ax;
  
  console.log(`Ploshcad:${(height*2)*(width*2)}`);//(35*2)*(15*2)=2100
}
pryamoug (koordinaty);
*/
//--------------------------------------------- Задача №6(изменит ширину
/*)
let koordinaty = {//obekt s koordinatami
  ax: 5,
  bx:40,
  ay: 20,
  by:5
}    
function pryamoug (a,b){ //найти ширину прямоугольника
  let height = a.ay-a.by;
  console.log(height);//15
  let width = a.bx-a.ax;//35
  console.log(width);
  console.log(`Shirina:${height-b}`);//15-5=10
}
pryamoug (koordinaty,5);
*/
//----------------------------------------------Задача №7(изменить высоту)
/*
let koordinaty = {//obekt s koordinatami
  ax: 5,
  bx:40,
  ay: 20,
  by:5
}    
function pryamoug (a,b){ //найти ширину прямоугольника
  let height = a.ay-a.by;
  console.log(height);//15
  let width = a.bx-a.ax;//35
  console.log(width);
  console.log(`Vysota:${width-b}`);//35-5=30
}
pryamoug (koordinaty,5);
*/
//----------------------------------------------Задача №8(изменить высоту и ширину)
/*
let koordinaty = {//obekt s koordinatami
  ax: 5,
  bx:40,
  ay: 20,
  by:5
}    
function pryamoug (a,b,c){ //найти ширину прямоугольника
  let height = a.ay-a.by;//15
  let width = a.bx-a.ax;//35
  
  console.log(`Shirina:${width-b}`);//35-5=30
  console.log(`Visota:${height-c}`);//15-6=9
}
pryamoug (koordinaty,5,6);
*/
//----------------------------------------------Задача №10(смещеи е по оси Х)
/*
let koordinaty = {//obekt s koordinatami
  ax: 5,
  bx:40,
  ay: 20,
  by:5
}    
function pryamoug (a,shift){ //найти ширину прямоугольника
  a.ax= a.ax+shift;//10
  a.bx= a.bx+shift;//45
  
  console.log(`ax:${a.ax}`);//35-5=30
  console.log(`bx:${a.bx}`);//15-6=9
}
pryamoug (koordinaty,5);
*/
//----------------------------------------------Задача №10(смещеи е по оси Y)
/*
let koordinaty = {//obekt s koordinatami
  ax: 5,
  bx:40,
  ay: 20,
  by:5
}    
function pryamoug (a,shift){ //параметр/внутренняя переменая с данными равными 5
  a.by= a.by+shift;//11
  a.ay= a.ay+shift;//26
  
  console.log(`by:${a.by}`);//11
  console.log(`ay:${a.ay}`);//26
}
pryamoug (koordinaty,6);
*/
//----------------------------------------------Задача №11(смещеие по оси X и Y)(ОК!)
/*
let koordinaty = {//obekt s koordinatami
  ax: 5,
  bx:40,
  ay: 20,
  by:5
}    
function pryamoug (a,shiftX,shiftY){ //параметр/внутренняя переменая с данными равными 5
  //-------------po Y
	a.by= a.by+shiftY;//14
  a.ay= a.ay+shiftY;//29
//---------------po X	
	a.ax= a.ax+shiftX;//14
  a.bx= a.bx+shiftX;//49
  
  console.log(`Sdvig po Y - by:${a.by},ay:${a.ay}`);//14
  console.log(`Sdvig po X - ax:${a.ax},bx:${a.bx}`);//49
}
pryamoug (koordinaty,6,9);
*/
//----------------------------------------------Задача №12(опроеделить по координатам находится ли 
//----------------------------------------------------------точка в нутри прямоугольника)(ОК!)
/*let koordinaty = {//obekt s koordinatami
  ax: 5,//меньшее по Х
  bx:40,//болшее по Х: ах(5)--------bx(40)
  ay: 20,
  by:5
}    
function pryamoug (a,cx,dy){ //параметр/внутренняя переменая с данными равными 5
 
	let diapozX =  ( cx <= a.ax || cx >= a.bx )// && ( dy <= a.by || dy >= a.ay );  //false/true=false
	let diapozY =  dy <= a.by || dy >= a.ay ;  //true/true

  (diapozX||diapozY) ? console.log('не поподает'): console.log('поподает');
 
}
pryamoug (koordinaty,6,6);
*/
//#############################################################################
//-----------------------------------------19.08.2021
//-----------------------------------------практическе занятия 
//------------------------------------------Массивы
//-------------------------------------------Задание №1
//-------------------------------------------Задача №1

//-------------------------------------------Задача №2
/*
let arr = [9, 1, 10, 4, 5, 12, 13, 25, 100, 54]

function arrayOnDisplay(array) {
 for (let i = 0; i < array.length; i++) {
   if (array[i] % 2 === 0) {
document.write ( ` ${array[i]}, ` )
  }
 }
}
arrayOnDisplay(arr);
*/

//-------------------------------------------Задача №3
/*
let arr = [9, 1, 10, 4, 5, 12, 13, 25, 100, 54]

function arrayOnDisplay(array) {
 let result = 0;// хранит сумму
 for (let i = 0; i < array.length; i++) {
  result += array[i];// выводит сумму эллементов
  document.write(` ${result} `);
 }
}
arrayOnDisplay(arr);
*/
//-------------------------------------------Задача №4
/*
let arr = [9, 1, 10, 4, 5, 12, 13, 25, 100, 54]

function arrayOnDisplay(array) {
 let maxNumber = 0;
 for (let i = 0; i < array.length; i++) {
  if (maxNumber < array[i]){
      maxNumber==array[i];
  }
 }
 document.write(maxNumber);
}
arrayOnDisplay(arr);
*/
//--------------------------------------------Задача №5
/*
let arr = [9, 1, 10, 4, 5, 12, 13, 25, 100, 54]

function arrayOnDisplay(array,elem,index) {
 
 array[index] = elem; 
 document.write(array);
}
arrayOnDisplay(arr,14,20);
*/
//--------------------------------------------Задача №6
/*
let arr = [9, 1, 10, 4, 5, 12, 13, 25, 100, 54]

function arrayOnDisplay(array,index) {
 
 array.splice(index,1)
 document.write(array);
}
arrayOnDisplay(arr,3);
*/
//--------------------------------------------Задание №2
//--------------------------------------------Задача №1
/*
let arr = [9, 1, 10, 4, 5, 12, 13, 25, 100, 54]
let arr2 = [2, 5, 7, 4, 7]

function arrayOnDisplay(array,array2){

let newArray= array.concat(array2);
document.write(newArray);
// нужно еще избавится от повторяющхся элемнетов
}

arrayOnDisplay(arr, arr2);
*/

//--------------------------------------------Задача №2
/*
let arr = [9, 1, 10, 4, 5, 12, 13, 25, 100, 54];
let arr2 = [2, 5, 7, 4, 7];
function arrayOnDisplay(array1,array2) {
let newArray= [];
for (let i = 0; i < array1.length; i++) {
    for (let n = 0; n < array2.length; n++) {
      if (array1[i]===array2[n])
      newArray.push(array1[i])
    }
  }
  console.log(newArray);
}
arrayOnDisplay(arr, arr2);
*/

// -------------------------------28/08/2021
// ---------------------------Практические Задаия
// -----------------------------  Строки
/*

//--------------------------------Задача 1
function strLength(str1,str2) {// доработать не работает
return str1.length === str2.length ? ravny : neravny;
//return str1.trim()length === str2.trim()length;//метод .trim() удаляет пробелы
}
console.log(strLength('cow','car'));
*/
//--------------------------------Задача 2 (поменять первую букву на заглавную)
/*function strLength(str) {
  return str[0].toUpperCase() + str.slice(1);
 
  }
  console.log(strLength('car'));
  */
  //--------------------------------Задача 3 (поменять первую букву на за
  /*
  let glasnie = ['а', 'у', 'о', 'ы', 'и', 'э','я','ю', 'ё', 'е'];
  function strCount(str) {
    let count= 0;
   let newStr = str.toLowerCase();//'машина едет'
   let arr = newStr.split('');// разделили предложения на буквы и заесл в массив
   
     for (i = 0; i < arr.length; i++) {
       for (j = 0; j < glasnie.length; j++) {
         arr[i] === glasnie[j] ? count++ : count;
       }
     }
       return count;
  }
    console.log(strCount('машина едет'));
   */ 
   //--------------------------------Задача 4 (поменять первую букву на за (перечитать условие!)
/*
   let spam = ['100% бесплатно','увеличение продаж','только сегодня','не удаляйте','ххх'];
  function strCount(str) {
   let count = 0;
   let newStr = str.toLowerCase().split('');//переводим ctroku в нижний регистр
   
   console.log(newStr);
       for (i = 0; i < spam.length; i++) {
        for (j = 0; j < newStr.length; j++) {
            newStr[j].includes(spam[i]) ? count++ : count;
         //console.log(newStr.includes(spam[i]));
         
        }
        return !!count;
       }
     
  }
    console.log(strCount('100%  бесплатно проверь закачаешься!'));
    */

   //--------------------------------Задача 5

   //--------------------------------Задача 6


    //--------------------------------Задача 7(ок?????)на до проверки на налчие знаков принания!
/*
    function calcWord (str) {
      let newStr = str.toLowerCase();
      console.log(newStr.split(' '));  
    }
    calcWord ('Привет, я Вася! GHbdtn ghbdtn ghbdtn');
*/

//--------------------------------            Задача 7(ok!)
function amountWord(text) { //вывести количество слов в предложении
	let newText = text.split(' ');
	//console.log(newText);
	//console.log(newText.length);
}
amountWord('Привет, меня зовут Вася')
//--------------------------------            Задача 8()большее слово

function maxWord(text) {
	let arr = text.split(' ');
	let newWord = arr[0].split('').splice(0,6).join('');//удалил запятую
  arr.splice(0,1,newWord,)
	
	let numberArr = arr.map(item => item.length);//.sort((a,b) => a - b).reverse();
	let maxNum = Math.max(...numberArr);
	// console.log(arr); 
	// 	console.log(numberArr);
	// 	console.log(numberArr.length===arr.length);
	// 	console.log(maxNum);
		
}
maxWord('Привет меня зовутhhhhh Вася')
//--------------------------------            Задача 9(ok!)средняя длинна слов впредложении
function averWord(text) {
	let newArr = text.split(' ');
	let numberArr = newArr.map(item => item.length);//.sort((a,b) => a - b).reverse();
	let sumNum = numberArr.reduce((sum, current) => sum + current, 0);
	let averSum = sumNum/newArr.length;
	//console.log(`Средняя длина слова в предложении: ${averSum} символа(ов).`);
 return  averSum;
}
averWord('Привет, меня зовут Вася')


//-----------------------------------Задача 10() квк вывести все позиции на которых стоит sign
let newArr;
let findSign;
function findAndShowSign(text, sign) {
	newArr = text.toLowerCase().split('');
  //console.log(newArr.length)
  findSign = newArr.indexOf(sign);// нашло индекс но только один
//console.log(`Порядковый индекс элемента: ${findSign}`);
}
findAndShowSign('Привет, меня, зовут Вася', ',');
// -----
// let sign = ','
// let result;
// for (let i = 0; i < newArr.length; i++){
// result = [newArr[i]];
// //console.log(result.length)
// 	let indexces = result.filter(function(item,index,arrai){
// return item==sign;
// 	});
	
// console.log(indexces)
// }


//--------------------------------------------Пракические занятия № 4 от 30.08.2021
//-------------------------------------------------Классы
//------------------------------------------------Задание 1
/*
class PrintMaсhine {
  constructor(color, fontSize, fontFamily) {
      this.color = color;
      this.fontSize = fontSize;
      this.fontFamily = fontFamily;
  }

  print(text) {
    //document.write(`<p style="color:${this.color}; font-size:${this.fontSize}; font-family:${this.fontFamily};">${text}</p>`);
  }
}

let print = new PrintMaсhine('red', '24px', 'cursive');
let print2 = new PrintMaсhine('blue', '14px', 'auto');

print.print('qwerttd asd adas');
print2.print('1235423423 42413');
*/
//------------------------------------------------Задание 2
/*
class createNews {
  constructor(header, text, tags, date) {
      this.header = header;
      this.text = text;
      this.tags = tags;
      this.date = date;
  }

  tagsFormation() {
    this.tags = this.tags.map(tag => '#' + tag);
    this.tags = this.tags.join(' ');
  }

  dateFormation() {
    if (this.date.getDate() === new Date().getDate() && this.date.getMonth() === new Date().getMonth()) {
      this.date = 'сегодня';
    } else if ((new Date().getDate() - this.date.getDate()) < 7) {
      this.date = `${new Date().getDate() - this.date.getDate()}` //дней назад;
    } else {
      
      this.date = `${this.date.getDate()} : ${this.date.getMonth()} : ${this.date.getFullYear()}`
    }
  }

  print() {
  //   document.write(`<h1>${this.header}</h1>`);
  //   document.write(`<div>${this.date}</div>`);
  //   document.write(`<div>${this.text}</div>`);
  //   document.write(`<div>${this.tags}</div>`);
  }
}

let news = new createNews('Whats new?', 'qweqw asdasdas as as as as as  as as', ['meta', 'lena', 'car'], new Date(2021, 8, 3));
news.tagsFormation();
news.dateFormation();
news.print();
*/


//---------------------------------------------------Пактиеское задание от 03.09.2021
// --              -------------------------------------------Модуль 2
//------------------------------------------------------------Классы продолжение (ДЗ4)
//----------------------------------------------------------------зАДАЧА 2
class Circle {
  constructor () {
    this.radius = 5;
  }

  get radiuss() {
    return this.radius;

  }
  set radiuss(rad) {
    return this.radius = rad;
  }
  get diametr() {
  return this.radius + this.radius;
  }

   ploshchad() {
    document.write(2 * Math.Pi * Math.pow(this.radius* 2));
  }
   widthCircle() {
   document.write((2 * Math.Pi ) * this.radius);
  }

}
let c = new Circle();


//------------------------------------Практическое задание#5
//----------------------------------------06.08.21
//-----------------------------------------Классы

//-----------------------------------Задача №1

class Button{
constructor() {
this.text = 'Button';
this.height = '100px';
this.width = '200px';
}

showBtn() {
  let button = document.createElement('Button')
  button.id = 'qwe';
  console.log(button);
  button.innerHTML = this.text;
  document.body.append(button);
  button.style.height = this.height;
  button.style.width = this.width;

document.write(`<button id ="btn" style = "height: ${this.height}; width:${this.width}">${this.text}</button>`)
 }
hideBtn() {
let element = document.querySelector('#btn');
element.style.backgroundColor = 'red'
 }
}
let btn = new Button();

class BootsrapButton extends Button{
construtor(){
  super();
  this.color = 'red';
}
showBtn() {
  document.write(`<button style = "height:${this.height}; width:${this.width}>${this.text}</button>`)
   }

}
let btn1 = new BootsrapButton();


//--------------------------------------------Задача №2
/*
class Figure {
constructor (nameFig, storonaA, storonaB, storonaC) {
 this.nameFig = nameFig; 
 this.storonaA = storonaA;
 this.storonaB = storonaB;
 this.storonaC = storonaC;

}
get getNameOfFigure() {
return this.nameFig;
}

showInfo() {
  document.write(' Информация о фигуре: ');
 }
perimetr() { 
  document.write(' Периметр фигуры: ');
 }
ploshad() {
  document.write(' Площадь фигуры: ');
 }
}
//-----------------------
class Kvadrat extends Figure {
showInfo() {
  super.showInfo();
  document.write(this.nameFig, ' Сторона:', this.storonaA, 'mm');
}
perimetr(){
  super.perimetr();
  document.write(this.storonaA + this.storonaA, 'mm');
}
ploshad() {
  super.ploshad();
  document.write(this.storonaA * this.storonaA, 'mm');
}

}
// let kvadr = new Kvadrat('Квадрат', 20, 30, 40);
//------------------------

class Prymoug extends Figure {
  showInfo() {
    super.showInfo();
    document.write(this.nameFig, ' Сторона A: ', this.storonaA, ' mm.', ' Сторона B: ', this.storonaB, ' mm');
  }
  perimetr(){
    super.perimetr();
    document.write(this.storonaA + this.storonaB, 'mm');
  }
  ploshad() {
    super.ploshad();
    document.write(this.storonaA * this.storonaB, 'mm');
  }
  
}
//let prym = new Prymoug('Прямоугольик', 20, 30);

class Treugolnik extends Figure {
	
showInfo() {
super.showInfo();
document.write(this.nameFig,  ' Сторона A: ', this.storonaA, ' mm.', ' Сторона B: ', this.storonaB, 'mm. ', 'Сторона C: ', this.storonaC, 'mm.')
}
perimetr(){
	super.perimetr();
	document.write(this.storonaA + this.storonaB + this.storonaC, ' mm.');
}
ploshad() {
	super.ploshad();
	if(this.storonaA===this.storonaB && this.storonaB===this.storonaC && this.storonaC===this.storonaA) {
	document.write((((this.storonaA**2) * Math.sqrt(3))/4).toFixed(2), ' mm');
	}
}

}
let figures = [];
let kvadr = new Kvadrat('Квадрат ', 20, 30, 40);

let prym = new Prymoug('Прямоугольик', 20, 30);

let treug = new Treugolnik(' Треугольник ', 20, 20, 20)
 
figures.push(kvadr)
figures.push(prym)
figures.push(treug)
//console.log(figures);

//  for(let i = 0; i < figures.length; i++) {
// //console.log(figures[i]);
// figures[i].showInfo();
// figures[i].ploshad();
// figures[i].perimetr();

//  }
 figures.map(item => {
	//  console.log(item.showInfo());
	//  console.log(item.ploshad());
	//  console.log(item.perimetr());
})
*/






//--------------------------------------------------09.09.21
//----------------------------------------------Практческое задаие №6
//--------------------------------------------------Классы



//---------------------------------------------- 13/09/21
//-----------------------------------------------Модуль №3(ок!)
//--------------------------------------------Пактичеое задание № 1
//--------------------------------------------- Обработчик событий

/*//------HTML КОД
<div class = "random" style = "display: block; background: green; width:400px; height:300px">
    <span class = "random-number">Random umber : <span id = "number"> 0 </span><br></span>
    <button id = btn style = "width:200px; 
    height:100px; 
    background-color: blue;
    margin: auto">
    Нажми меня!
</button>
</div>
//--------------- решение
let elem = document.getElementById('btn');
function random(min, max) {
return Math.floor(Math.random() * 100);
}

elem.onclick = function(event) {
if (event.which == 1){
   document.getElementById("number").innerHTML = random();
  }
}


*/
