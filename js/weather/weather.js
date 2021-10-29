let inputCity = document.querySelector('.input-city');
let inputDate = document.querySelector('.input-date');
let btn = document.querySelector('.search-btn');
let displ = document.querySelector('.display-weather');
let btnBlock = document.querySelector('.btn-block');
const url = `http://api.openweathermap.org/data/2.5/weather?q=Mogilev,by&appid=0b858496213f893ee90e346e9005774a`;
let apiKey = '0b858496213f893ee90e346e9005774a'


function enterCity(e){
let inputText = inputCity.value
let date = inputDate.value;
newUrl = new URL(url)
newUrl.search = `q=${inputCity.value}&units=metric&lang=ru&appid=${apiKey}`
//inputCity.value = '';
getWeather(newUrl)
}
btn.addEventListener('click', enterCity)

function dayChoiseWeather(e){
	let range = parseInt(e.target.id);
	newUrl = new URL(url)
	newUrl.search = `q=${inputCity.value}&cnt=${range}&units=metric&lang=ru&appid=${apiKey}`
	//inputCity.value = '';
	getWeather(newUrl)
	console.log(newUrl)
	}
	btnBlock.addEventListener('click', dayChoiseWeather)
	
async function getWeather(url) {
	let date = new Date()
  const result = await fetch(url);
  const data = await result.json();
	document.querySelector('.date').innerHTML = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
	document.querySelector('.city').innerHTML = data.name
  document.querySelector('.degree').innerHTML = `${Math.round(data.main.temp)}&deg`
	//let mainInfo = document.querySelector('.main-info').innerHTML = data.weather[0].main;
	document.querySelector('.description').innerHTML = data.weather[0].description;
	let icon = document.querySelector('.weather-icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" width="125" height="125">	</img>`
	console.log(data)
}


//api.openweathermap.org/data/2.5/weather?q={city name}&appid=0b858496213f893ee90e346e9005774a
// getWeather()
// .then(data => console.log(data))