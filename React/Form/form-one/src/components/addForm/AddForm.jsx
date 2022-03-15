import React from "react";
import { MyButton } from "../../UI/button/MyButton";
import { MyInput } from "../../UI/input/MyInput";
import './addFormStyle.css';

import {useState} from 'react';

export const AddForm = ({create}) => {//принимаем функцию через prpops 
	const [allNewInfo, setAllNewInfo] = useState({login:'', passw:'', email:'', image:'', descript:'',})


const sendInfo = (e) =>{
	e.preventDefault();

	const newInfo = {
		...allNewInfo,
	}

	setAllNewInfo({login:'', passw:'', email:'', image:'', descript:'',})
	create(newInfo)// вызываем функцию и передаем туда объект newInfo как параметр 
}

const logValue = (e)=>{
	setAllNewInfo({...allNewInfo, login: e.target.value })

}
const inpPasswValue = (e) =>{
	setAllNewInfo({...allNewInfo, passw: e.target.value })
	
}
const inpMailValue =(e)=> {
	setAllNewInfo({...allNewInfo, email: e.target.value })
	
}

const inpImageValue =(e) => {
	setAllNewInfo({...allNewInfo, image: e.target.value})
console.log(e.target.value)
	
}
const inpDescriptValue = (e) => {
	setAllNewInfo({...allNewInfo, descript: e.target.value})
	

}
//<input value = {allNewInfo.image} onChange = {inpImageValue} style = {{width: 308, height: 29,margin: 5}} type ='file' accept= 'image/' name='File' />
	return(
  <div className='form-block'>
    <h2>Форма</h2>
      <form method="POST" encType = 'multipart/form-data.' className = 'main-form'>
	      <MyInput value = {allNewInfo.login} onChange = {logValue} type='text' name='Login' placeholder='Введите ваш логин'/>
	      <MyInput value = {allNewInfo.passw} onChange = {inpPasswValue}  suggested ="current-password" type ='password' name='password' placeholder= 'Ведите пароль '/>
	      <MyInput value = {allNewInfo.email} onChange = {inpMailValue} type ='email' name='email' placeholder='Введите вашу эл. почту'/>
	      <MyInput value = {allNewInfo.image} onChange = {inpImageValue} type='url'/>
	      <MyInput value = {allNewInfo.descript} onChange = {inpDescriptValue} type ='text' placeholder='Описание фотографии'/>
	      <MyButton onClick={sendInfo}> Отправить форму </MyButton>
      </form>
  </div>
  );

}