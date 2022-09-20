let searchInp = document.querySelector('.input-search')
let typeInp = document.querySelector('.selected-type');
let inpYear = document.querySelector('.input-year');
let btn = document.querySelector('.main-btn')
let form = document.querySelector('.form')
let arrowButton = document.querySelectorAll('.page-button')

let apiKey = 'f5716cf9';
let url = 'http://www.omdbapi.com/';
//http://www.omdbapi.com/?apikey=[yourkey]&



function enterTheMovie(e){//get response from the first page or initial request
  newUrl = new URL(url)
  newUrl.search = `?apikey=${apiKey}&s=${searchInp.value}&type=${typeInp.value}&y=${inpYear.value}`;
  getMovie(newUrl,e);
  newUrl = '';
  // btn.classList.toggle('on');
  }
  btn.addEventListener('click', enterTheMovie)
  btn.addEventListener('click',removeAllItemForNewResponse)
  
  async function getMovie(url,e) {//function to generate a request
  const resp = await fetch(url);
  const data = await resp.json();
  createElement(data,e);
  createButtonForPaginator(data)
  checkForTheNumberOfFiles(data)
  
}



function createElement(data){
 //contentArr=[]
 for(let j = 0; j < data.Search.length; j++){
    //console.log(data.Search.length)
    contentItem = document.createElement('div');
    contentItem.classList.add('item');
    contentItem.id = `${j}item`;
    document.querySelector('.content').append(contentItem);
    //------------------------------
    datailsItem = document.createElement('div');
    datailsItem.classList.add('details');
    datailsItem.id = `${j}details`;
    contentItem.append(datailsItem);
    //-------------------------------
    filmTitle = document.createElement('span');
    filmTitle.classList.add('film-title','item-text');
    filmTitle.id = `${j}title`;
    filmTitle.innerHTML = `${data.Search[j].Title}`;
    datailsItem.append(filmTitle);
    //-----------------------------------------
    filmIssue = document.createElement('span');
    filmIssue.classList.add('issue','item-text');
    filmIssue.id = `${j}issue`;
    filmIssue.innerHTML = `${data.Search[j].Year}`;
    datailsItem.append(filmIssue);
//-----------------------------------------
    posterBox = document.createElement('div');
    posterBox.classList.add('poster-box');
    posterBox.id = `${j}poster`;
    posterBox.innerHTML =  `<img src = ${data.Search[j].Poster} alt = "Извените постер отсутствует" >`;
    contentItem.append(posterBox);
//-----------------------------------------
    detailsBtn = document.createElement('button');
    detailsBtn.classList.add('details-btn');
    detailsBtn.id = `${data.Search[j].imdbID}`//`${j}detailsBtn`;
    detailsBtn.innerHTML = '<span class="daetails-btn-text">Подробнее</span>'
    contentItem.append(detailsBtn);
    
    //---------------------------------------------------------------
  //	contentArr.push(contentItem)

  detailsBtn.addEventListener('click', detailsInfoResp)
    }
  } 
  function removeAllItemForNewResponse(){
    for(let items of document.querySelectorAll('.item')){
      items.remove();
    }
  }
  //=========================================display page with details info
async function detailsInfoResp(event) {//function to generate new request for etended info
  newUrl = new URL(url)
  newUrl.search = `?apikey=${apiKey}&i=${event.target.id}&plot=full`;
  const resp = await fetch( newUrl);
  const extendetData = await resp.json();
  //console.log('Подробно', extendetData);
  createFrameForExtendedInfo(extendetData)
  }

function createFrameForExtendedInfo(extendetData){
//-----------------------------create main frame
  extendetFrame = document.createElement('div');
  extendetFrame.classList.add('extendet')
  document.querySelector('.wrapper').append(extendetFrame);
//----------------------------cteate top block with poster (lleft side) and info(right side)
  topBlockOfExtendetFrame = document.createElement('div');
  topBlockOfExtendetFrame.classList.add('top-block');
  extendetFrame.append(topBlockOfExtendetFrame);
//-------------------------------------cteate left side of the top block with poster 
  leftSide = document.createElement('div');
  leftSide.classList.add('left-side');
  leftSide.innerHTML = `<img src = ${extendetData.Poster} alt = "Извените постер отсутствует" >`;
  topBlockOfExtendetFrame.append(leftSide);
//------------------------------------cteate right side of the top block with info about movie
  rightSide = document.createElement('div');
  rightSide.classList.add('right-side');
  rightSide.innerHTML = `
  <div class = "info">
    <span class = "info-list-item">Название: ${extendetData.Title}</span>
    <span class = "info-list-item">Год выпуска: ${extendetData.Released}</span>
    <span class = "info-list-item">Жанр: ${extendetData.Genre}</span>
    <span class = "info-list-item">Выпущено: ${extendetData.Production}</span>
    <span class = "info-list-item">Страна: ${extendetData.Country}</span>
    <span class = "info-list-item">Режисёр: ${extendetData.Director}</span>
    <span class = "info-list-item">В ролях: ${extendetData.Actors}</span>
    <span class = "info-list-item">Продолжительность: ${extendetData.Runtime}</span>
    <span class = "info-list-item">Сборы: ${extendetData.BoxOffice}</span>
    <span class = "info-list-item">В ролях: ${extendetData.Title}</span>
</div>`
  topBlockOfExtendetFrame.append(rightSide);
//----------------------------cteate bottom block with description of the movie
  bottomBlockOfExtendetFrame = document.createElement('div');
  bottomBlockOfExtendetFrame.classList.add('bottom-block');
  bottomBlockOfExtendetFrame.innerHTML = `${extendetData.Plot}`
  extendetFrame.append(bottomBlockOfExtendetFrame);
//------------------------------------create remove button
  removeButton = document.createElement('button');
  removeButton.classList.add('remove-button');
  removeButton.innerHTML = `<span class = "cross">X</span>`;
  extendetFrame.append(removeButton);
 
removeButton.addEventListener('click', removeExtendetFrame)
}

 function removeExtendetFrame(){
  extendetFrame.remove()
 }
 //--------------------------------------------------
  function createButtonForPaginator(pages,data){

  for (let i = 0; i < pages /*data.Search.length || num*/; i++){
    pageButton = document.createElement('button');
    pageButton.classList.add('btn-page','page-button')
    pageButton.innerHTML = `<span class="page-button-text">${i+1}</span>`
    pageButton.id = `${i+1}pb`;//вставить порядковый шрвулс
    document.querySelector('.btn-block-page').append(pageButton)
    pageButton.addEventListener('click', getNextPageResponse)
    }
  }

 async function getNextPageResponse(event){
  for(let items of document.querySelectorAll('.item')){
     items.remove();
  }
  newUrl = new URL(url)
  newUrl.search = `?apikey=${apiKey}&s=${searchInp.value}&type=${typeInp.value}&y=${inpYear.value}&page=${parseInt(event.target.id)}`;
  const resp = await fetch( newUrl);
  const nextPageData = await resp.json();
  //console.log(event.target.id, nextPageData);
  createElement(nextPageData)
  }
  
  function removePaginatorButton(){
    for(let allButtons of document.querySelectorAll('.page-button')){
      allButtons.remove();
    }
  }
  btn.addEventListener('click', removePaginatorButton)


function checkForTheNumberOfFiles(data){
  let totalResult = Number(data.totalResults)

  if(totalResult <=99){
    pages = Math.ceil(totalResult/data.Search.length);
    createButtonForPaginator(pages,data)
  } 
  if(totalResult > 99 && totalResult <=999 ){
    totalPages = Math.ceil(totalResult/data.Search.length);
    pages = Math.ceil(totalResult/totalPages);
    createButtonForPaginator(pages,data)
  }
  if(totalResult > 999 && totalResult <=9999 ){
    totalPages = Math.ceil(totalResult/(data.Search.length));
    pages = Math.ceil(totalResult/totalPages);
    createButtonForPaginator(pages,data)
  }		
}

//--------------------------------------work with paginators arrow-buttons

async function d(event){
  newUrl = new URL(url)
  newUrl.search = `?apikey=${apiKey}&s=${searchInp.value}&type=${typeInp.value}&y=${inpYear.value}`;//*&page=${parseInt(event.target.id)}*
  const resp = await fetch( newUrl);
  const dataForArrow = await resp.json();

  changeButtonNumberWhenClickArrow(event, dataForArrow)
}

function changeButtonNumberWhenClickArrow(event, dataForArrow){
event.target = !event.target
let total = dataForArrow.totalResults/10
let remainder;

if (event.target.classList.contains('right-arrow') || event.target.classList.contains('btn-text')){
  
  document.querySelectorAll('.page-button').forEach(pageButton => {
  pageButton.id =`${parseInt(pageButton.id) + dataForArrow.Search.length}`
  pageButton.innerHTML = `<span class="page-button-text">${pageButton.id}</span>`
  remainder = `${Math.ceil((total+10) - pageButton.id)}`;
  
   if (pageButton.textContent > Math.ceil(total)){
      pageButton.remove()
      event.target.style.visibility = 'hidden';
   } else if (event.target.classList.contains('.left-arrow')) {
    event.target.style.visibility = 'visible';
   }
    visibleLeftArrow(pageButton)
  })
 }

 if (event.target.classList.contains('left-arrow') || event.target.classList.contains('btn-text')){
    document.querySelectorAll('.page-button').forEach(pageButton => {
    pageButton.id =`${pageButton.id - dataForArrow.Search.length}`
    pageButton.innerHTML = `<span class="page-button-text">${pageButton.id}</span>`
    remainder = `${Math.ceil(remainder + dataForArrow.Search.length)}`;
    console.log(remainder, 'total')

      if (pageButton.id <= 10){
      event.target.style.visibility = 'hidden';
    } 
    })
   }

}
let arrows = document.querySelectorAll('.arrow')
arrows.forEach(arrow => {arrow.addEventListener('click',d)})

function visibleRigthArrow(){ 
  setTimeout(()=>document.querySelector('.right-arrow').style.visibility = 'visible', 700)
}
btn.addEventListener('click', visibleRigthArrow)

function visibleLeftArrow(pageButton){
  if (pageButton.id > 10){
    document.querySelector('.left-arrow').style.visibility = 'visible'
   } 
}