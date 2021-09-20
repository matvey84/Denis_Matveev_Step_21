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
	return isTime = (` ${hour}:${min}:${second} `);
   
}
secToTime(toSec);
console.log(isTime)
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
let finishTime	
function travelTime (a,km) {
	
	let time = km / a.speed;
	//console.log(`${time}`);
  let restTime =Math.trunc(time/4);
	//console.log(`${restTime}`);
	 finishTime = time+restTime;
	//console.log(`Общее время в пути: ${finishTime}часов`);
	return finishTime;
}
 	travelTime(autoInfo, 1235);
	 console.log(`Общее время в пути: ${finishTime}часов`);
*/	 

//-------------------------------------Задание №2 Задача №1(ok! 1/2)

/*
let fraction = {
	chisl: 1 ,
	znam: 2,
};     

 function computationFrac (fr,chisl2,znam2) {//дляд одинаковых знаменателей
	 let drob= 0;
	 let drobString = '/';
	 let znaminatel;
	 let chislitel;
	 let drob10;

   if (fr.znam === znam2){
		 chislitel = fr.chisl+chisl2;
		 znaminatel = fr.znam||znam2;
		 drob = (` ${chislitel} ${drobString} ${znaminatel} `);
		 console.log(`Дробь обычная: ${drob}`);
		  if (chislitel>znaminatel||chislitel === znaminatel) {
			  drob10 = chislitel / znaminatel;
				console.log(`Дробь обычная: ${drob} --> Дробь десятичная: ${drob10}`);
		  }
	} else {
		console.log('Дробь не правитльная, измените условия!');
	}//дописать код для решения дробей с разныим знаменителями!!!!!!!!!!!!!!!!!
}
 
 computationFrac(fraction, 1, 2);
*/
 //-----------------------------------Задание № 2 Задача № 2 вычитание
 /*
 let fraction = {
	chisl: 12 ,
	znam: 15,
};

function subtractFrac (fr,chisl2,znam2) {// вычитание
	let drob = 0;
	let drobString = '/';
	let znaminatel;
	let chislitel;
	let drob10 = chislitel / znaminatel;
	let min = (fr.znam > znam2) ? znam2 : fr.znam;
	//let max = (fr.znam < znam2) ? znam2 : fr.znam;
	let minOd=0;

if (fr.znam === znam2){
	chislitel = fr.chisl - chisl2;
		znaminatel = fr.znam || znam2;
		drob = (` ${chislitel} ${drobString} ${znaminatel} `);
  	console.log(`Дробь обычная: ${drob}`);
}
/*if (fr.znam != znam2){
	for (let i = 2; i <= min; i++)  {
	
		if (min%i===0) {
			minOd -=i;				
		
		console.log(`${minOd}`);
	}  
	}
	
		//	console.log(`${i}`);
}
}
subtractFrac(fraction, 8, 15 );
*/
//-----------------------------------Задание № 2 Задача № 3 умножение
/*
 let fraction = {
	chisl: 12 ,
	znam: 15,
};
function multipleFrac (fr,chisl2,znam2) {
	let drob = 0;
	let drobString = '/';
	let znaminatel;
	let chislitel;
	let drob10 = chislitel / znaminatel;
	if (fr.chisl<fr.znam && chisl2<znam2){
		chislitel = fr.chisl * chisl2;
		znaminatel = fr.znam * znam2 ;
		let cheslitelMod = 0;
		drob = (` ${chislitel} ${drobString} ${znaminatel} `);
		console.log(`Дробь обычная: ${drob}`);
		} 
		/*if (fr.chisl > fr.znam||chisl2>znam2){
		for (let i = chislitel; i>=1;i--){
			if (chislitel>1)
			cheslitelMod =(chislitel / i);
				console.log(cheslitelMod);
			}
  }
}
	
	 multipleFrac(fraction, 10, 12);
	 */

	 //-----------------------------------Задание № 3 Задача № 1(ok!)
	 /*
let timer = {// Objekt
	hour: 9 ,
	minutes: 10 ,
	second: 1,
	} 

let secInMin= 60;
let minInHour = 60;
let secInHour = minInHour*secInMin; //3600
//-------------------
function getTime(t) {// this function show cuerrent time
let time = (` ${t.hour}:${t.minutes}:${t.second} `);

  return time;
}
let cuerTimeFromTimer = getTime(timer);
console.log(`1. Текущее время по таймеру: ${cuerTimeFromTimer} `);

//----------------------------------Задание 3 задача 2,3,4(изменение аремени при передачи времени)
function sumTimerToSec (t) {// this func sum values from timer to second
let timeSumm1 = (t.hour * secInHour) + (t.minutes * secInMin) + t.second;
  
return timeSumm1;
}
let resultTimer = sumTimerToSec(timer);
console.log(`2. Время Timera: ${resultTimer} секунд`);

//---------------------------------------------------------------
function sumGeneralSecond (h, m, s) {// this func summarizes and get general ammount of second
	
	result = (h > 0) ? (h * secInHour) + resultTimer: 
	(m > 0) ? (m * secInMin) + resultTimer : 
	(s > 0) ? s + resultTimer  : 
	resultTimer;
	(h + m + s) != 0 ? (((h * secInHour)+(m * secInMin)+s )+ resultTimer): 
	resultTimer;

   return result;
}
let generalTimeToSec = sumGeneralSecond(3,10,10);
console.log(`3. Общее время в сек: ${generalTimeToSec} секунд`)

//--------------------------------------------------------
	 function secToTime(num){// this func takes values from sumDifferenсe() and sumGeneralSecond() and returns change time
    
		function sumDifferenсe(){//this func calculate differece between f sumTimerToSec and f sumGeneralSecond  
			generalTimeToSec > resultTimer ? differ = generalTimeToSec-resultTimer:
			differ = resultTimer-generalTimeToSec;
			console.log(`5. ${differ}`);
			}
			sumDifferenсe();		

		 if (generalTimeToSec > 86399 ) {
			 num = differ;
		 } else{
			num = generalTimeToSec
		 }
		 
		let result=num/3600;
		let hour= Math.floor(result);
		let min= Math.floor((result-hour)*60);
		let second= ((((result-hour)*60)-min)*60);
		second = Math.ceil((second.toFixed(2)));

		return (` ${hour}:${min}:${second} `);
	}
	let newTime = secToTime(generalTimeToSec);
	console.log(`4. Измененное время: ${newTime}`)
*/
//#####################################################################################
	//----------------------------------------Модуль №2
//-------------------------------------------Массивы
//--------------------------------------Домашнее задание №2
//-------------------------------------Задание №1 Задача №1(ok!) 
/*
let purchList = [
    { name : 'Молоко', amount : 2, buy : true, },
		{	name : 'Мясо', amount : 2, buy : true, },
	  { name : "Хлеб", amount : 2, buy : false,	},
		{	name : "Масло",	amount : 2, buy : true,	},
	];
	
let result = purchList.find(function(item,index,array) {
	return item.buy === false;
});

let result2 = purchList.findIndex(function(item,index,array) {
	return item.buy === false;
});

purchList.splice(result2,1);
purchList.unshift(result); 

console.log(purchList);

*/
//-------------------------------------Задание №1 Задача №2(ок!)
/*
let purchList = [
	{ name : 'Молоко', amount : 2, buy : true, },
	{	name : 'Мясо', amount : 2, buy : true, },
	{ name : "Хлеб", amount : 2, buy : false,	},
	{	name : "Масло",	amount : 2, buy : true,	},
]

function addProuct(arr, name, am=0){
	let result = arr.find(function(item,index,array) {
		return item.name === name;
		
	});
	//console.log(result);

arr[0].name === name ? arr[0].amount = arr[0].amount+am : arr[0].amount;
arr[1].name === name ? arr[1].amount = arr[1].amount+am : arr[1].amount;
arr[2].name === name ? arr[2].amount = arr[2].amount+am : arr[2].amount; 
arr[3].name === name ? arr[3].amount = arr[3].amount+am : arr[3].amount;  

//console.log(arr[0].name != name);
return arr;
//console.log(arr.amount);

}
let addPurch = addProuct(purchList, 'Масло', 4);
console.log(addPurch);
*/
//-------------------------------------Задание №1 Задача №3(ок!)
/*
let purchList = [
	{ name : 'Молоко', amount : 2, buy : false, },
	{	name : 'Мясо', amount : 2, buy : true, },
	{ name : "Хлеб", amount : 2, buy : false,	},
	{	name : "Масло",	amount : 2, buy : true,	},
];

function payCheck(arr, name){

	arr[0].name === name ? arr[0].buy =  true : arr[0].buy;
	arr[1].name === name ? arr[1].buy =  true : arr[1].buy;
	arr[2].name === name ? arr[2].buy =  true : arr[2].buy;
	arr[3].name === name ? arr[3].buy =  true : arr[3].buy;

	console.log(arr[0].buy);
	console.log(arr);
}
payCheck(purchList, 'Хлеб');
*/
//-------------------------------------Задание №2 Задача №1(ок!)
/*
let purchList =  [
{name: 'Хлеб', amount: 2, price: 1.40,},
{name: 'Мясо', amount: 1, price: 15.00},
{name: 'Молоко', amount: 3, price: 1.50},
{name: 'Помидор', amount: 2, price: 2.90},
{name: 'Масло', amount: 1, price: 3.50},
];
let lengthList = purchList.length;
let sumResult; 
console.log(lengthList);

function sumCheck(arr) {// стоимость покупок по позициям
	let sum0 = arr[0].amount * (arr[0].price).toFixed(2);
	let sum1 = arr[1].amount * (arr[1].price).toFixed(2);
	let sum2 = arr[2].amount * (arr[2].price).toFixed(2);
	let sum3 = arr[3].amount * (arr[3].price).toFixed(2);
	let sum4 = arr[4].amount * (arr[4].price).toFixed(2);
  return ([sum0,sum1,sum2,sum3,sum4]);
}
let sumArr = sumCheck(purchList);

	function totalSum(sumArr) {//общая суммма чека
		return  sumResult = sumArr.reduce((sum, current) => sum + current, 0);
	}
	totalSum(sumArr);


function getPayCheck(arr,sumArr) {//вывод чека
	return (` Чек №00001

 Количество покупок: ${lengthList};
 
1.  ${arr[0].name} Бородинский 0,45 кг. :
          кол-во: ${arr[0].amount} шт. х ${(arr[0].price).toFixed(2)} = ${sumArr[0]}

2.  ${arr[1].name} "Шейная часть."
          кол-во: ${arr[1].amount} кг. х ${(arr[1].price).toFixed(2)} = ${sumArr[1]} 

3.  ${arr[2].name} Бабушкина крынка 0.9 
          кол-во: ${arr[2].amount} шт. х ${(arr[2].price).toFixed(2)} = ${sumArr[2]}

4.  ${arr[3].name} "Крупный"
          кол-во: ${arr[3].amount} кг. х ${(arr[3].price).toFixed(2)} = ${sumArr[3]}

5.  ${arr[4].name} Cливочное сладко-соленое 180 г. 
          кол-во: ${arr[4].amount} шт. х ${(arr[4].price).toFixed(2)} = ${sumArr[4]}
		Итого: ${sumResult.toFixed(2)}	
`);
}
let check = getPayCheck(purchList,sumArr,);
console.log(check);

//-------------------------------------Задание №2 Задача №2(ок!)
// arr[0].name === name ? arr[0].amount = arr[0].amount+am : arr[0].amount;
// arr[1].name === name ? arr[1].amount = arr[1].amount+am : arr[1].amount;
// arr[2].name === name ? arr[2].amount = arr[2].amount+am : arr[2].amount; 
// arr[3].name === name ? arr[3].amount = arr[3].amount+am : arr[3].amount;  
// console.log(arr[0].name != name);
//console.log(arr);

result.name === name ? arr[0].amount = result.amount+am : result.amount;
result.name === name ? arr[1].amount = arr[1].amount+am : arr[1].amount;
result.name === name ? arr[2].amount = arr[2].amount+am : arr[2].amount; 
result.name === name ? arr[3].amount = arr[3].amount+am : arr[3].amount;  
console.log(arr);

}
addProuct(purchList, 'Масло', 2);
addProuct(purchList, 'Молоко', 2);
*/

//  function sumCheck(arr) {
		
// 	let sum0 = arr[0].amount * (arr[0].price).toFixed(2);
// 	let sum1 = arr[1].amount * (arr[1].price).toFixed(2);
// 	let sum2 = arr[2].amount * (arr[2].price).toFixed(2);
// 	let sum3 = arr[3].amount * (arr[3].price).toFixed(2);
// 	let sum4 = arr[4].amount * (arr[4].price).toFixed(2);
//   return [sum0,sum1,sum2,sum3,sum4];
// }
 
// let sumArr = sumCheck(purchList);
// console.log(sumArr);
//-------------------------------------Задание №2 Задача №3(ok!)
/*
function maxCost(sumArr) {
//	return Math.max.apply(null, sumArr);
return sumArr.reduce((a, b) => a > b ? a : b);
   
}
let maxNum = maxCost(sumArr);
console.log(maxNum);

*/
//-------------------------------------Задание №2 Задача №4(ок!)
/*
function averageCost(sumResult) {//средняя стоиммоть товара
  return sumResult / sumArr.length;	
	 }
	 let average = averageCost(sumResult);
	 console.log(`Средняя стоимость одного товара: ${average}`);
	 */


	 //-------------------------------------Задание №3(ok!)
	 let styleArr = [
		{name: 'color', value: 'red'},
		{name: 'font-weight', value: '700'},
		{name: 'font-size', value: '26px'},
	]
	
	let stri = 'hjhdfhjjkuuurjfhhfh';
	function typeText(text,arr){
	//document.write( ` <p style = " ${arr[0].name}: ${arr[0].value}; ${arr[1].name}: ${arr[1].value};${arr[2].name}: ${arr[2].value} "> ${text} </p> `);
	}
	typeText(stri, styleArr); 
	
	

	  //-------------------------------------Задание №4.1(OK!	)
		
let aud = [
{id:80,  sits:35, fak:'Математики'},
{id:310, sits:18, fak:'Филологии'},
{id:102, sits:20, fak:'Экономики'},
{id:453, sits:17, fak:'Правоведения'},
]
let arrTwo = [];
//console.log(arrTwo);
 function showAudiences (arrAud) {
	 let audiences0 = (`Аудитория № ${arrAud[0].id}:\n Количество мест: ${arrAud[0].sits},\n Факультет: ${arrAud[0].fak}\r\n`);
	 let audiences1 = (`Аудитория № ${arrAud[1].id}:\n Количество мест: ${arrAud[1].sits},\n Факультет: ${arrAud[1].fak}\r\n`);
	 let audiences2 = (`Аудитория № ${arrAud[2].id}:\n Количество мест: ${arrAud[2].sits},\n Факультет: ${arrAud[2].fak}\r\n`);
	 let audiences3 = (`Аудитория № ${arrAud[3].id}:\n Количество мест: ${arrAud[3].sits},\n Факультет: ${arrAud[3].fak}`);
	 arrTwo.splice(0,0, audiences0, audiences1, audiences2, audiences3);
	  return (`\n ${audiences0}\n ${audiences1}\n ${audiences2}\n ${audiences3}`) ;
	}
 let auditList = showAudiences(aud);
 //console.log(auditList);
 
 

//-------------------------------------Задание №4.2(ok!)
 
 function choisAudit(arrAud, faculty){
 let resultOne = arrAud.find(function(item,index,array) {
	//console.log(item.fak === faculty);
	return item.fak === faculty;
	});
	
	return result = arrAud[0] == resultOne ? console.log(`${arrTwo[0]}`) :
	result = arrAud[1] == resultOne ? console.log(`${arrTwo[1]}`) :
	result = arrAud[2] == resultOne ? console.log(`${arrTwo[2]}`) :
	result= arrAud[3] == resultOne ? console.log(`${arrTwo[3]}`) :
	console.log('Не подходит!');
	}
//choisAudit(aud,'Математики');//вызов фуекций
//choisAudit(aud,'Филологии');
//-------------------------------------Задание №4.3(ok!)



//-------------------------------------Задание №4.4,5()

function sortSits(arrAud){	// Задание 4.4(ок!) отсортировали
	function sort1(arrAud){//создали массив с сидячми месятами
	return arrAud.map(item => item.sits)			
    }; 
 let sitsArr = sort1(arrAud);
 
  //console.log( sitsArr.sort( (a, b) => a - b) );// сортировка от меньшего к большему
}
sortSits(aud);

function sortFak(arrAud){ // Задание 4.4(ок!)	отсортировать по алфавиту
	function sort2(arr){// massiv with name fak
	return arr.map(item => item.fak)
			 
    };
 let fakArr = sort2(arrAud) ;
  // console.log( fakArr.sort( (a, b) => { //сортировка по алфавиту
	// 	if  (a > b) return 1;
	// 	if  (a == b) return 0;
	// 	if  (a < b) return -1; 
	// } ) );
}
sortFak(aud);
//###################################################################
// function sortSits(arrAud){//создали массив с сидячми месятами
// 	return arrAud.map(
// 	item => item.sits // стрелоная функция	
// 	);			
// }
// let sitsArr = sortSits(aud);
// console.log(sitsArr);

// function sortId(arrAud){//создали массив с аудииториями
// 	return arrAud.map(
// 	item => item.id	// стрелоная функция
// 	);			
// }
// let idArr = sortId(aud);
// //console.log(idArr);

// function sortFak(arrAud){//создали массив с факультетами
// 	return arrAud.map(
// 	item => item.fak // стрелоная функция	
// 	);			
// }
// let fakArr = sortFak(aud);
// console.log(fakArr);

//--------------------------------------------------Домашнее задание №3 
//----------------------------------------------------Строки
//----------------------------------------------------Задача1(ок!) вывести статистику цифрбсимволов и букв

let sign = [',', '!', '?', '>', '.', ':', '/'];
let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let stringg = '0123456789qwertyuiop;llkkjhggffdsazxccvbnm,.';
  
function statSign(str1) {
	let countSign = 0;
	let newStr = str1.toLowerCase();
	let arr = [...newStr]// str.split('');

for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < sign.length; j++) {
	 arr[i] === sign[j] ? countSign++ : countSign;
	} 
}
//	return countSign;
}
let sStatistic = (statSign(stringg));
///console.log(`Количество Знаков: ${sStatistic}`)

//----вЫЧИСЛЕНИЕ КОЛИЧЕСТВА ЦИФР
function statNum (str2){
	let newStr = str2.toLowerCase();//в нижний регистр
	let arr1 = [...newStr];//делаем массив из стр
	let newNum = num.join('').split('');// массив цифр-> массив строк '1'
// цикл на сравтенение строк цифр и строки основной

let countNum = 0;
for (let i = 0; i < arr1.length; i++) {
	for (let n = 0; n < newNum.length; n++) {
	  arr1[i] === newNum[n] ? countNum++ : countNum;
		}
}
//return countNum;
}
let nStatistic = (statNum (stringg))
//console.log(`Количество цифр: ${nStatistic}`)

function generalStat(str){
	let strlength=str.length
	let leterStatistic = strlength-( sStatistic+nStatistic);
	// return console.log( `
	// Строка состоит из: ${strlength} символов, из них:
	// букв: ${leterStatistic},
	// цифр:${nStatistic} ,
	// символов: ${sStatistic}.` )
	
	}
	generalStat(stringg);

//--------------------------------------------------------------Задача№ 2(в нтеренете)

function textNumber(number) {
  let first = ['Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
  let second = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать', 'Восемьнадцать', 'Девяднадцать', 'Двадвать'];
  let third = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто'];
  if (number > 0 && number <= 9) {
		console.log(first[number])
    return first[number - 1];

  }
  if (number >= 10 && number <= 20) {
    return second[number - 10];
  }
  if (number > 20 && number <= 99) {
    let str = `${number}`;
    str = str.split('');
    let firstNumber = str[0];
    let secondNumber = str[1];
   
    // return `${third[firstNumber - 2]} ${first[secondNumber - 1]}`;
  }
}
// console.log(textNumber(8));
// console.log(textNumber(20));
// console.log(textNumber(55));

//-------------------------------------------------------------Задача№ 3(ok!)

let nuM = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let stringG = '6645пагРРПе';

function changeNum_(str) {
let arr = str.split('');//массив из строки
let nuMarr = nuM.join('').split('');// массив цифр-> '1'(строки)
let newStr = ''; //новая строка с '_' вместо цифр

  for(let i = 0; i < arr.length; i++) {// цикл для перебора двух масисвов и потска совподений
    for(let x = 0; x < nuMarr.length; x++) {
	    arr[i] == nuMarr[x] ? arr[i] = '_' : arr[i];
	  }
	newStr += arr[i];
  }

function reverseUpperToLower (newString) {// функция для замкны регистров 

	let chengeUpperLetter =  newString.split('').map(letter =>{

    if(letter === letter.toUpperCase()){
	   return  letter.toLowerCase();
    }

    if (letter === letter.toLowerCase()) {
    return letter.toUpperCase()
    } 
	})
	.join(' ');
	return chengeUpperLetter
 }

 return reverseUpperToLower(newStr);
}
let genChenge = changeNum_(stringG);
//console.log(`${stringG}  --->  ${genChenge}`)

//----------------------------------------------------------Задача№ 4(ok!) css стиль в строоку camelCase

function changrStile(text){
  let newArr = text.split('-');//массив из строки без "-"

  let secWord = newArr.splice(1,1).join(''); //втоорое слово
 
  let secondHalf =  secWord.split('');//массив из второго слоува
 
  let firstLetterToUpp = secondHalf.splice(0,1).join('').toUpperCase();//1я буква 2го слова в верхнем регистпе
 
   let result = newArr.join('')+(firstLetterToUpp + secondHalf.join(''));//складываем строки
   //console.log(result);
  // return result
}
changrStile('background-color');

//------------------------------------------------------------Задача№ 5(ok!)ПРЕВЕСТИ СТРОКУ В АБРЕВИАТУРУ

function toAbreviatur(str){
let abreviatur= str.split(' ').map(item => item[0]).join('').toUpperCase();
//console.log(abreviatur);
//return console.log(`${str} -> ${abreviatur}`)
}
toAbreviatur('cascading style sheets');
//-----------------------------------------------------------------
//-----------------------Задача№ 6(ok!)
function calcStr(str, ...other) {//отткуда взялась запятая?
let strArr = str.split(' ') + [...other];
//console.log(strArr);

}
calcStr('привет', 'как дела', 'все хорошо');


//-----------------------Задача№ 7(ok!) КАЛЬКУЛЯТОР
function calc(str){
let arr = str.split(' ');
//console.log(arr);
let sign = arr.splice(1,1).join('');
//console.log(sign);
let num1 = Number(arr.splice(0,1).join(''));
let num2 = Number(arr.join(''));

// switch(sign) {
// case '+':
//   return console.log(num1 + num2);

// case '-':
// 	return console.log(num1 - num2);

// case '*':
// 	return console.log(num1 * num2);
	 
// case '/':
// 	return console.log(num1 /num2);
// }
}
calc('2 / 6');



//-----------------------Задача№ 8(ok!)
function urlInfo(str){
let protocol = str.protocol;
//console.log(protocol);//протокол
let hosName = str.hostname;//домен
//console.log(hosName);
let portt = str.port;//порт
//console.log(portt);
let pName = str.pathname;
//console.log(pName);
let search = str.search;
//console.log(search);
let hash = str.hash;
//console.log(hash);
return console.log(`Протокол: ${protocol},\nДоменное имя: ${hosName}, 
Порт: ${portt}, \nПуть: ${pName},\nПараметры: ${search},\nХэш: ${hash}
`)

}
//let url = new URL('https://ru.stackoverflow.com/questions/1058780/%D0%A1%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D1%8B-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B-%D1%81%D0%BE-%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B0%D0%BC%D0%B8') 
//urlInfo(url);
//-----------------------Задача№ 9(ок!)
function changeStr(str,del,ins) {
	
	let strArr = [...str.replaceAll(del,ins)];//работает
	let newStr = [...strArr].join('');//работает
	//return console.log(newStr)
}
changeStr('"20/08/20"','/','" "');

//-----------------------Задача№ 10


//--------------------------------------------дОМАШНЕЕ ЗАДАНИЕ №4
//-------------------------------------------------Классы
//-------------------------------------------------Задача № 1
/*
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
*/

  //------------------------------------------------Задача № 2
/*
	let textH3 = `What is Loren Ipsum`;
let textA = `More...`;
let textP = `Lorem Ipsum is simply dummy text of the printing and 
typesetting industry. Lorem Ipsum has been the industry's standard 
dummy text ever since the 1500s, when an unknown printer took a galley 
of type and scrambled it to make a type specimen book.`

 let tagArr = ['div', 'h3', 'p', 'img', 'a',]; 

 let styleArr = [
  { name:`display `,	value:`flex` },
  { name:`width `,	value:`300px` },
  { name:`margin`, value:`10px` },
  { name:`width`,	value:`100%` },
  { name:`text-align`, value:`justify` },      
 ]
 let atributArr = [
	{ name:` id `,	value:` wrapper ` },
	{ name:` src `,	value:` "lipsum.jpg" ` },
	{ name:` alt `, value:` "Loren Ipsum" ` },
	{ name:` href `,value:` "https://www.lipsum.com" ` },
	{ name:` target `, value:`_blank` },

 ];

  class HtmlElement {

  constructor(tags, style, atrib, h3Text, aText, pText) {

  this.tags = tags;
  this.style = style;
  this.atrib = atrib;
  this.h3Text = h3Text;
  this.aText = aText;
  this.pText = pText;
  }
  
  closeTagOrNot() {
	if (this.tags === this.tags[3]){
		 console.log('не закрывающийся');

	}

}
  }

  let element = new HtmlElement(tagArr, styleArr, atributArr, textP, textA, textH3);

//console.log(tagArr[3]);
//console.log(tagArr.forEach(item => item.length === tagArr[3]));
*/

	//----решение не мое

	

// Task 2
/*
arrAtribut = [

  { name: id, value: wrapper, },

  { name: style, value: ``, },

  { name: src, value: 'lipsum.jpg',},

  { name: alt, value: 'Lorem Ipsum',},

  { name: href, value: 'https://www.lipsum.com/', },

  { name: target, value: _blank, },

];


arrStyles = [

  { name: display, value: flex,},

  {name: width, value: '100%', },

  { name: width, value: '300px',},

  { name: margin, value: '10px',},

  { name: text-align, value: justify,},

];


arrHtmlTegs = ['div', 'h3', 'p', 'a', 'img',];


let text1 = 'What is Lorem Ipsum?';

let text2 = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

let text3 = 'More...';


class HtmlElement {

  constructor(name, tegClose) {

    this.nameTeg = name;

    this.tegClose = tegClose;

    this.text = ``;

    this.arrAtribut=[];

    this.arrStyles=[];

    this.arrHtmlTegs=[];

  }; 


  SetAtribut2(_name, _value) {

    let tmpAttr = {

          name: _name,

          value: _value,

    };

    this.SetAtribut(tmpAttr);

  }


  SetAtribut(tmpAttr) {

    for(let i=0; i<this.arrAtribut.length; i++) {

      if (this.arrAtribut[i].name === tmpAttr.name) {

            this.arrAtribut[i].value = tmpAttr.value;

        return;

      }

    }

    this.arrAtribut.push(tmpAttr);

  }


  SetStyle2(_name, _value) {

    let tmpStyle = {

          name: _name,

          value: _value,

    };

    this.SetStyle(tmpStyle);

  }


  SetStyle(tmpStyle) {

    let newStyle = true;


    for(let i=0; i<this.arrStyles.length; i++) {

      if (this.arrStyles[i].name === tmpStyle.name) {

            this.arrStyles[i].value = tmpStyle.value;

            newStyle=false;

            break;

      }

    }

    if (newStyle) {

      this.arrStyles.push(tmpStyle);

    }

    let result = ``;

    for(let i=0; i<this.arrStyles.length; i++) {

      result += this.arrStyles[i].name , +this.arrStyles[i].value; //+ в конце строки

    }

    this.SetAtribut2(style, result);

  }



  SetText(text) {

    this.text=text;

  }


  AddHtmlElementToEnd(element) {

    this.arrHtmlTegs.push(element)

  }


  AddHtmlElementToBegin(element) {

    this.arrHtmlTegs.unshift(element)

  }


  getHtml() {

    let result = '<'+ this.nameTeg ;// + в концк строки

    for(let i = 0; i < this.arrAtribut.length; i++) {

      result += this.arrAtribut[i].name += + this.arrAtribut[i].value  ;// + в концк строки

    }

    if (this.tegClose) {

      result += '>';

      if (this.text){

        result += this.text;

      }

      for(let i = 0; i < this.arrHtmlTegs.length; i++) {

        result += this.arrHtmlTegs[i].getHtml();  
console.log(result);
      }

      result += '</'+ this.nameTeg +'>';

    } else {

      result += '>';

    }

    return result;

  }

};

*/



// let htmlElement = new HtmlElement(arrHtmlTegs[0], true)


// htmlElement.SetAtribut2(arrAtribut[0].name, arrAtribut[0].value);

// htmlElement.SetStyle2(arrStyles[0].name, arrStyles[0].value);


// let htmlElement2 = new HtmlElement(arrHtmlTegs[0], true);


// htmlElement2.SetStyle2(arrStyles[2].name, arrStyles[2].value);

// htmlElement2.SetStyle2(arrStyles[3].name, arrStyles[3].value);


// let htmlElement3 = new HtmlElement(arrHtmlTegs[1], true);


// htmlElement3.SetText(text1);


// let htmlElement4 = new HtmlElement(arrHtmlTegs[4], false);


// htmlElement4.SetStyle2(arrStyles[1].name, arrStyles[1].value);

// htmlElement4.SetAtribut(arrAtribut[2]);

// htmlElement4.SetAtribut(arrAtribut[3]);


// let htmlElement5 = new HtmlElement(arrHtmlTegs[2], true);


// htmlElement5.SetStyle2(arrStyles[4].name, arrStyles[4].value);

// htmlElement5.SetText(text2);


// let htmlElement6 = new HtmlElement(arrHtmlTegs[3], true);


// htmlElement6.SetAtribut(arrAtribut[4]);

// htmlElement6.SetAtribut(arrAtribut[5]);


// htmlElement6.SetText(text3);


// htmlElement5.AddHtmlElementToEnd(htmlElement6);

// htmlElement2.AddHtmlElementToEnd(htmlElement3);

// htmlElement2.AddHtmlElementToEnd(htmlElement4);

// htmlElement2.AddHtmlElementToEnd(htmlElement5);

// htmlElement.AddHtmlElementToEnd(htmlElement2);


// htmlElement.AddHtmlElementToEnd(htmlElement2);


// console.log(htmlElement.getHtml());

// document.write(htmlElement.getHtml());

//---------------------------------------- отступление о темы

// let div = document.createElement('div');
// div.className = 'text';
// div.innerHTML= '<strong>jglsjglugsssssuuufuouhouaf</strong>';
// document.body.append(div);
//---------------------------------



//------------------------------------------------Модуль № 3
//----------------------------------------------Домашнее задание № 1
//------------------------------------------------События

//-------------------------------------------------Задача №1
//-------------------------------------------------Задача №2
/*
<div class = "container" style = "width:300px; height:180px; background-color: aquamarine;
 display:flex; flex-direction: column; justify-content: space-around;">

  <input type = "button" name=buton id="btn1" value="open modal" style="width:100px; height:25px; margin-left:15px">
  
	<div id = "modal" style = "width: 270px; height: 100px; background-color: bisque; 
	display:flex; flex-direction: column; justify-content: space-around;margin-left:15px; align-items: center; display:none">
  <span class ="text"><b>Hello from Modal Window!<b></span>
 <input type = "button" name=buton id="btn2" value="close" style="width:230px; height:25px; margin-left:15px;">
  </div>
</div>

*/
/*
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let modal = document.querySelector('#modal');
console.log(btn1);
let isHide = true;// невиден? -> true

function showModal() {
if(isHide) {//  если модалл не виден то isHide = true -> меняем стиль на видимый 'block'
	modal.style.display = 'block';
	isHide = false; //теперь isHide = false т.к виден
 }
}

function hideModal() {
	if(!isHide) {//<- !isHide === isHide = false
		console.log(isHide);
		modal.style.display = 'none';
		isHide =  true;
 }

}
btn1.addEventListener ('click', showModal)
btn2.addEventListener ('click', hideModal)
*/
//-------------------------------------------------Задача №3
//-------------------------------------------------Задача №4
//-------------------------------------------------Задача №5(ok!)

/*
<div class = "container" style="width: 200px; height: 100px; display: flex; 
flex-direction: column; align-items: center; background-color: aqua;">
	<ol id = "ol" style = "width:100%; height: 100px;">
    <li class = "li li1">11111</li>
    <li class= "li li2">22222</li>
		<li class= "li li3">333333</li>
		<li class= "li li4">444444</li>
    
  </ol>
</div>

*/

// ----------------------Решение
/*
//let ol = document.querySelector('#ol');
let allLi = document.querySelectorAll('.li')

function orange(event){
	let li;
for(li of allLi ){
		li.style.backgroundColor = 'inherit';
		li.style.width = '100%';
 }
if ('click') {	
	event.target.style.backgroundColor = 'orange';
	
 } else {
	li.style.backgroundColor = 'inherit'
	
	return event.target.style.backgroundColor = 'orange';
 }
} 

ol.addEventListener('click', orange )
*/

//-------------------------------------------------Задача №6
/*

<div class = "container" style="width: 310px; height: 80px; display: flex; 
align-items: center; justify-content: space-between">
<div class = "svetofor" style="width: 250px; height: 100%; display: flex; 
; align-items: center; background-color: gray; border-radius: 5px;
 justify-content: space-evenly">
 
<div class = "color red" style="background-color:white"></div>

<div class = "color yellow" style="background-color: white"></div>
=======
    
>>>>>>> 4b8fbc19ace1c5d8b5d8e9aa585719da47fccd60

<div class = "color green" style="background-color:white"></div>

</div>
<button id="btn" style="width: 50px; height: 80px; border-radius: 5px">
	Next
</button>

*/ 


/*
let colors = document.querySelectorAll('.color');
//let lighters = document.querySelectorAll('.color');
let button = document.querySelector('#btn');
let red = document.querySelector('.red');
let yellow = document.querySelector('.yellow');
let green = document.querySelector('.green');
console.log(colors)
let lighter;
for ( lighter of colors){
	sLighter.style.width = '70px';
	sLighter.style.height = '70px';
	sLighter.style.borderRadius = '50px';
}

function getSvetofor() {
	

function getSvetoforRed() {
if ('click') {
	
		red.style.backgroundColor = 'red'
		green.style.backgroundColor = 'white'
		yellow.style.backgroundColor = 'white'
} else if (lighter.style.backgroundColor = 'white') {
	red.style.backgroundColor = 'white'
	green.style.backgroundColor = 'green'
	yellow.style.backgroundColor = 'white'

}
}
getSvetoforRed()
}
	button.addEventListener('click', getSvetofor)
*/
//----------------------------не мое решение!!!!
/*
let i = -1;
 function light(){
  i++;

  let arrColors = ['red','orange','green'],
  color = document.querySelectorAll('.color');
	console.log(color[i-1])
  if(color[i-1]) color[i-1].style.backgroundColor = 'white';
  if(i == arrColors.length) i = 0;
  color[i].style.backgroundColor = arrColors[i];
 }
 button.addEventListener('click', light )
*/
