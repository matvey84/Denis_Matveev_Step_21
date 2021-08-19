// Модуль1 
//Задача №1
/*let userName = prompt('имя');
alert(`Привет, ${userName} !`);*/

// Задача №2
/*let age = +prompt('год рождения');
const year = 2021;
alert(`Ваш возраст: ${year-age}`);*/

// Задача №3
/*let sideWidth = +prompt('длина стороны');
alert(`Периметр равен: ${sideWidth*4} см`);*/

// Задача №4
/*let rad = +prompt('радиус круга');
const pi = 3.14;
alert(`Площадь круга равна: ${pi*(Math.pow(rad,2))}`);*/

// Задача №5
/*let distance = +prompt('Ведите расстояние до места');
let time = +prompt('Введите время в пути в мин');
const hour = 60;
alert(`Скорость движения: ${(distance/time)*hour} км/ч`);*/

/*// Задача №6
let usd = +prompt('Введите количество $');
const usdRate = 2.50;
const euroRate = 3.00;
let conversion = usdRate/euroRate;
alert(`Сумма в евро: ${usd*conversion}`);*/

/*// Задача №7
let fleshValue = +prompt('Введите объем памяти в гб');
const gb = 1024;
let fileValue = 820;
alert(`'Количество файлов на носителе: ${(fleshValue*gb)/fileValue}`);*/

/*// Задача №8
let cash = +prompt('Сумма денег, руб');
let price = +prompt('Цена, руб');
let amount = cash/price;
let remainder = cash%price;
alert(`Количество: ${Math.floor(amount)} штук.`);
alert(`Ваша сдача: ${remainder} руб.`);*/

/*// Задача №9
let numberZero = +prompt('Введите трехзначное число');
let numberOne = numberZero%10;//выделение последнней из трех цифры
let numberTwo = ((numberZero-numberOne)%100)/10;// выделение вторйе с конца цифры
let numberThree = ((numberZero-numberOne)-((numberZero-numberOne)%100))/100;// выделение первой цифры
let result = String(numberOne)+String(numberTwo)+String(numberThree);
alert(`${result}`);*/

/*// Задача №10
let number = +prompt('Проверка числа:');
let result = (number%2===0 && 'Четное!') || ((number%2)!==0 && 'Нечетное!');
alert(`${result}`);*/
/*if (even) {
alert(`Четное!`)
}else { alert(`Нечетное!`)};*/
//-----------------------------------------------------------------------------------------------------------
//В классе! 02.08.21
//Switch
//Задача № 1
/*let month = +prompt('Порядковый номер месяца:');
switch (month) {
    case 1:
        alert('Январь');
    break;
    case 2:
        alert('Февраль');
    break;
    case 3:
        alert('Март');
    break;
    case 4:
        alert('Апрель');
    break;
    case 5:
        alert('Май');
    break;
    case 6:
        alert('Июнь');
    break;
    case 7:
        alert('Июль');
    break;
    default:
        alert('Год закончлся!')
}*/
 /*//Задача №2
 let num1 = +prompt('Введите первое число: ');
 let sign =  prompt('Введите знак:');
 let num2 = +prompt('Введите второе число:');
 
switch (sign) {
case '+':
alert(num1+num2);
break;
case '-':
alert(num1-num2);
break;
case '*':
alert(num1*num2);
break;
case '/':
alert(num1/num2);
break;
default:
    alert('end')

}*/
//Задания с тернарным оператором

 /*//Задача №1
 let num1 = +prompt('Ввудите превое число:');
 let num2 = +prompt('Ввудите второе число:');
 let result = (num1>num2) ? num1 : num2;
 alert(result);
*/
/* //Задача №2
 let num = +prompt('Vvedite chislo:');
 let result =(num%5>0) ? alert('Nekratho') : alert('Kratno');
*/
 /*//Задача №3
  let word = prompt('Nazvanie planety:');
	let result = (word==='Земля') ? 'Привет, землянин':
	(word==='земля') ? 'Привет, землянин':
	'Привет, инопланетянин';
	alert(result);
	*/


	//----------------------------ДОМАШНЕЕ ЗААДНИЕ №2------------------------

	//------------------------------------ЗАДАЧА №1
	/*
	let age = +prompt('Введите возраст:');
	
	if (age<=2) {
		alert('rebenok');
	} else if(age>=12&&age<=18){
		alert('podrostok');
	} else if(age>=18&&age<=60) {
		alert('vzrosliy');
	} else{
		alert('pensioner');
	}
	*/
	//-------------------------------------ЗАДАЧА №2
	/*let key = prompt('Vvedite chislo:');
	switch(key) {
  case '1':
		alert('!');
		break;
		case '2':
		alert('@');
		break;
		case '3':
		alert('#');
		break;
		case '4':
		alert('$');
		break;
		case '5':
		alert('%');
		break;
		case '6':
		alert('^');
		break;
		case '7':
		alert('&');
		break;
		case '8':
		alert('*');
		break;
		case '9':
		alert('(');
		break;
		alert(end);
	}*/
	
	//---------------------------------------------ЗАДАЧА №3
	/*
	let num0 = +prompt('Vvedite chislo');
	let num3 = (num0%10);//vydelenie 3 chisla
	let num2 = ((num0-num3)%100)/10; // vydelenie 2 chisla
	let num1 = (num0-(num0%100))/100;//vydelenie 1 chisla
	/*if (num1===num2&&num2===num3&&num1===num3) {
		alert('Da est, 3 odinakovye cifry!');
	} else if (num1===num2) {
		alert('Da est, 2 odinakovye cifry!');
	} else if(num2===num3){
		alert('Da est, 2 odinakovye cifry!');
	} else if(num3===num1) {
		alert('Da est, 2 odinakovye cifry!');	
	} else{
		alert('Net odinakovyh cifr');
	}
	*/
	
	//---------------------------reshenie c ternalnym operatorom
	/*
	let result = (num1===num2&&num2==num3&&num3==num1)  ? 'Da est, 3 odinakovye cifry!':
	(num1==num2) ? 'Da est, 2 odinakovye cifry!':
	(num2==num3) ? 'Da est, 2 odinakovye cifry!':
	(num1==num3) ? 'Da est, 2 odinakovye cifry!':
	'Net odinakovyh cifr!';
	alert(result);
*/

	
	//-----------------------------------------------ЗАДАЧА №4
	/*
	let year = +prompt('Vvedite god:');
	let leapYear = (year%4==0||year%100==0||year%400==0) ? 'Visokosniy!':
	'Ne visokosniy!';
	alert(leapYear);
*/

//------------------------------------------------ЗАДАЧА №5
/*
let num = prompt('Vvedite chislo:');
let numRevers = (num.split('').reverse().join(''));
if (num==numRevers) {
	alert('Palindrom');
} else{
	alert('Ne palindrom');
}*/


	//-----------------------------------------------ЗАДАЧА №6
/*	
let ammount = +prompt('Vvedine kolichestvo USD:');
let conversionTo = prompt('Vvedite zhelaemuyu valutu:');
let usdRate = 2.50;
let sumUsd = ammount * usdRate;
let euroRate = 3.00;
let rubRate = 0.0345;
*/
/*
	if (conversionTo==='евро'||'euro'){
		alert(`${sumUsd / euroRate} евро`);
	}else if (conversionTo==='руб'||'rub'){
		alert(`${sumUsd / rubRate} руб.`);
	} else (conversionTo===''){
		alert ('Vy ne sdelali vybor!');	
} else{
	alert('Oteneno!');
}*/
//--------------------------решение с помощью тернального оператора
/*
(conversionTo==='евро'||'euro') ? alert(`${sumUsd / euroRate} евро`):
(conversionTo==='руб'||'rub') ? alert(`${sumUsd / rubRate} руб.`):
(conversionTo==='') ? alert('Vy ne sdelali vybor!'):
alert('Oteneno!');
*/

//------------------------------------------------ЗАДАЧА №7
/*
let sum = +prompt('Vedite summy pokupki');
if (sum<200) {
	alert('Skidka ne predusmotrena!');
}else if (sum==200||sum<=300){
	alert(`Skidka: 3% i sostavlyaet: ${sum*(3/100)} rub. K oplate: ${sum-(sum*(3/100))} rub.`);
} else if (sum==300||sum<=500){
	alert(`Skidka: 5 % i sostavlyaet: ${sum*(5/100)} rub. K oplate: ${sum-(sum*(5/100))} rub.`);
} else if (sum>500){
	alert(`Skidka: 7 % i sostavlyaet: ${sum*(7/100)} rub. K oplate: ${sum-(sum*(7/100))} rub.`);
}
*/
//------------------------------решение с помощью тернального оператора
/*
	(sum<200) ? alert('Skidka ne predusmotrena!'):
  (sum==200||sum<=300) ? alert(`Skidka: 3% i sostavlyaet: ${sum*(3/100)} rub. K oplate: ${sum-(sum*(3/100))} rub.`):
	(sum==300||sum<=500) ? alert(`Skidka: 5 % i sostavlyaet: ${sum*(5/100)} rub. K oplate: ${sum-(sum*(5/100))} rub.`):
	(sum>500) ? alert(`Skidka: 7 % i sostavlyaet: ${sum*(7/100)} rub. K oplate: ${sum-(sum*(7/100))} rub.`):
	defoult();
	*/
	//----------------------------решение с помощью Switch ne rabotaet  potomu chto est logicheskiy operator '<>'?
	/*switch(sum) {
		case sum<200:
			alert(`Skidka: 3% i sostavlyaet: ${sum*(3/100)} rub. K oplate: ${sum-(sum*(3/100))} rub.`);
      break;
			case (sum==200)||(sum<=300):
				alert(`Skidka: 3% i sostavlyaet: ${sum*(3/100)} rub. K oplate: ${sum-(sum*(3/100))} rub.`);
				break;
	}
*/
	
//---------------------------------------------ЗАДАЧА №8
/*
let circum = +prompt('Vvedite dlinu okruzhnosti:');
let squareArea = +prompt('Vvedite ploshcad kvadrata:');
let squareSide = Math.sqrt(squareArea);
let diametr = circum/3.14;
if (squareSide>=diametr){
	alert('Okruzhnost mozhet pomestitsya!');
}else {alert('Okruzhnost slishkom bolshaya!');
}
*/
//----------------------------------------------ЗАДАЧА №9
/*
let ask1 = confirm('Vopros#1: Skolko budet 1+1?');
let result = 1;
let ans = +'';

//Question#1
if (ask1===true){
ans = +prompt('Varianty otveta:  1, 2 ili 3')
if (ans===2){
	  result+=result;
	    alert(`'Vy pravy:+2 balla. U vas:${result} balla'`);
}else{
	 alert('Vy ne pravy!');
}
}else {
	alert('Vy ne sdelali vybor');
}
// Question# 2
let ask2 = confirm('Vopros#2: Skolko budet 1+2?');
if (ask2===true){
	ans = +prompt('Varianty otveta:  1, 2 ili 3');
	if (ans===3){
			result+=result;
				alert(`'Vy pravy:+2 balla. U vas:${result} balla'`);
	}else{
		 alert('Vy ne pravy!');
	}
	}else {
		alert('Vy ne sdelali vybor');
	}
//Question# 2
let ask3 = confirm('Vopros#2: Skolko budet 2+2?');
if (ask3===true){
	ans = +prompt('Varianty otveta:  7, 8 ili 4');
	if (ans===4){
			result+=(result-2);
				alert(`'Vy pravy:+2 balla. U vas:${result} balla'`);
	}else{
		alert('Vy ne pravy!');
	}
	}else {
		alert('Vy ne sdelali vybor');
	}
	*/
	//-------------------------------------------------------ЗАДАЧА №10
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


 //-----------------------------------Домашняя работа#3
	//-------------------------------------ЗАДАЧА №1
/*
	let num = +prompt('Chislo 1');//2
	let num2 = +prompt('Chislo2');//5
	let start =num>num2 ? num2 : num//==2
	let finish = num<num2 ? num2 : num;//==5
	let result = 0;
	while(start!=finish) {
		result = result+start;// 0+2
		start = start+1
	}*/
	//---------------------------------------ЗАДАЧА №2
	/*
	let num = +prompt('Chislo 1');//20
	let num2 = +prompt('Chislo 2');//40

	let small = num<num2 ? num : num2;
	while (big>=1){
    if (num%small===0) {
	  if (num2%small===0) {
    document.write(small);
	  break;
	  }
  }
    small--;
  } */
	//--------------------------------------ЗАДАЧА №3
	/*
let a = +prompt('1');
let b = a;
while(b>=1) {
  if (a%b === 0) {
    console.log(b);
  }
  b--;
}
*/
//--------------------------------------ЗАДАЧА №4 
/*
let num = +prompt('Vvedite chislo:');
let i = 10;//i=10 nachalo cikla,shag iterciya kazhdiy cikl uvelichivat na 10(i*10)
let count = 1; 
//--------
//num=123; let result = num/10 =12.3
//result = 12.3 result= 12.3/10=1.23
//num = 1.23 result = 1.23/10=0.123
//result = 0.123 => num !=0 stop
// i=>3; otvet 3 cifry!!!!!
//----------



if (num < i) {
document.write(` Number of sign = 1`);
} else {
for (i; Math.trunc(num / i) != 0; i = i * 10) {
 result = i / i;
 count = (count + result);
 
 console.log(result);
}
document.write(` Number of sign = ${count}`);
}
*/
//--------------------------------------ЗАДАЧА №4

/*

let pol = 0;
let otr = 0;
let noll = 0;
let even = 0;
let odd = 0;
let i=10;
while(i==0){
 let num = +prompt('chislo');
 num>0 ? pol++:pol;
 num >0 ? otr++:otr;
 num===0 ? noll++:noll;
 num%2 === 0 ? even++ : even; 
 num%2 !== 0 ? odd++:odd;
  i--;
alert(`${pol}${otr}${noll}${even}${odd}`);
} //proverit zadachu
*/
//--------------------------------------ЗАДАЧА №5
/*
let a = +prompt('Chislo#1');
let sign = prompt('Znak');
let b = +prompt('Chislo#2');
let calc = (`${a} ${sign} ${b}`);
*/
/*
while(sign){
	 switch(sign){
		 case '-':
			 alert(a-b);
			 break;
		case '+':
			alert(a+b);
			break;
		case '*':
			alert(a*b);
			break
			case'/':
			alert(a/b);
			break;
 }
	confirm('Prodolzhim?');
	if(false){
		break;
	}
	calc++;
		}
*/		
	
//--------------------------------------ЗАДАЧА №6
 /*let num = +prompt('Chislo');
 let shift = ++prompt('Chislo2');
*/
 //--------------------------------------ЗАДАЧА №9
 /*let multipl = 3;множитель

let result = 0; запсывает сюда результат
let i = 1; цфра которую умножают
while (i<10) {
   result = i*multipl;
   i++;
  
  document.write(result);
}
*/
//--------------------------------------ЗАДАЧА #7
/*
let num = +prompt('Chislo');
 let shift = ++prompt('Chislo2');
*/
 //--------------------------------------ЗАДАЧА №9
 /*
let result= '*';
for (let i = 1; i <=10; i++) {

    for (let num = 2; num <=9; num++) {
      
        if(i>=1 && num>=2){
       result += (i*num)  +  ' ' ;
       }
    }
    result += ','
}

console.log(result);
	*/
//###############################################################################################
//-------------------------------------------Домашнее задание № 4 (Функции)
//--------------------------------------Задача №1(ок!)
/*
function calcSum(num1,num2){
if (num1<num2){
	return ('-1')
} else if(num1>num2){
	return ('1')
} else{
	return('0')
}
}
console.log(calcSum(4,4));
*/
//--------------------------------------Задача №2(ок!)
/*
function calcSum(num){
	result =1;
for(let i=1;i<=num;i++){
result*=i;
}
return (`${result}`)
}
console.log(calcSum(4));
*/
//--------------------------------------Задача №3(ok!)
/*
function calcSum(num1, num2,num3){
return result=(String(num1)+String(num2)+String(num3));
}
console.log(calcSum(5,4,4));
*/
//--------------------------------------Задача №4(ок!)
/*
function calcSum(num1=0, num2=0){
	if(num1&&num2){
		result=num1*num2;
		return (`'пЛОЩАДЬ ПРЯМОУГОЛНИКА:' ${result}`);
	}else	{
	result=(num1+num2);// yне возводило в степень!!!
	return (`'пЛОЩАДЬ квадрата: ${(result)**2}'`);
	}
 }

console.log(calcSum(6,));
*/
//--------------------------------------Задача №5(ok!)
/*
function calcSum(num){
	/*
	let result=0;
	for(let i=1;i<num;i++){ //рАБОЧАЯ НАХОДИТТ ОБЩИЕ ДЕЛЕИТЕЛИ
		if(num%i===0){
			result+=i;
			
			 //document.write(`${i}  ` );
		}//return(`${i}`);
	}	
	/*
///#################################################################
	/*
	let isPerfect;
	//let count=i;
	
	let result=0;
	for(let i=1;i<num;i++){
		if(num%i===0){
		///document.write(`${i}  ` );
		result=result+i;
		}  
	}//console.log(result);
		if (result===num){
			document.write('Cовершенное')
		  }else{
			document.write('Несовершенное');	
		  }
		} //isPerfect ? document.write('Cовершенное'):document.write('Несовершенное');		
	     calcSum(7);
	*/
	//--------------------------------------Задача №6
	//--------------------------------------Задача №7(ok!)

/*
	function getTime(hour='00',min='00',sec='00'){//рабочая
		let timer = (`${hour}:${min}:${sec}`);
		console.log(`Текущее время: ${timer}`);

		return 
		
			}
			getTime(12,30,45);
		*/	
		
//--------------------------------------Задача №8(ok!)

/*
function getTimeToSec(hour,min,sec){
	let minToSec =min*60;
	let hourToSec = hour*(60**2); 
	//timer = (` ${hour}:${min}:${sec}`);
	//document.write(timer)
	//document.write(`Текущее время в сек.: ${toSec} секунд. `);
	toSec=(`${hourToSec+minToSec+sec}`);
	document.write(`Текущее время в сек.: ${toSec} секунд. `);
	 return toSec;
}
	getTimeToSec(12,30,45);
		
				//--------------------------------------Задача №9(ok!)
function secToTime(num){		
	let result=num/3600;
	let hour= Math.floor(result);
	let min= Math.floor((result-hour)*60);
	let second= Math.ceil((((result-hour)*60)-min)*60)
	return console.log(isTime = (`${hour}:${min}:${second} `));
  
}
secToTime(toSec)
*/


//###############################################################################
//-------------------------------------------Модуль №2
//--------------------------------------Домашнее задание №1
//-------------------------------------Задание №1 Задача №1(ok!) dвывести инфо об автомобиле
/*
let autoInfo = {
brand : 'Skoda' ,
model : 'Oktavia' ,
issue : 2010 ,
speed : 100 ,

}    
function getAtuoInfo (a){ //параметр/внутренняя переменая с данными равными 5
 console.log( `  Марка: ${a.brand}, Модель: ${a.model},
  Год выпуска: ${a.issue},Средняя скорость: ${a.speed} ` )
}
getAtuoInfo (autoInfo);
*/

//-------------------------------------Задание №1 Задача №2 (рассчитать времяб каждые 4 часа добаить 1 час)
/*
let autoInfo = {
	brand : 'Skoda' ,
	model : 'Oktavia' ,
	issue : 2010 ,
	speed : 100 ,
	
	}    
	
	 	function travelTime (a,km) {
		let finishTime = 0;
		let time = km / a.speed;
		let count = 0;
		//console.log(time);
		for ( let i = 1; i < time; i++ ) {
			count += i;
		    if(i%4===0){
				
            finishTime = time+i;
			console.log(i);
				//return finishTime;
			 }		
	  	}
		}
 	travelTime(autoInfo, 900);
	*/

