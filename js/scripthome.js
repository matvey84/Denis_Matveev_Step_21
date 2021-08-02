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
let result = ((number%2)===0 && 'Четное!') || ((number%2)!==0 && 'Нечетное!');
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

 //Задача №3
 //Задача №4
 //Задача №5
 //Задача №6