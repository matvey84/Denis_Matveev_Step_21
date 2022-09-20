import React, {useState} from 'react';
import './styles/App.css';
import { AddForm } from './components/addForm/AddForm';
import { InfolIst } from './components/infoList/InfoList';


export default function App() {
  const[infoUser, setInfoUser] = useState([
    {id:'', login:'', password:'', email:'', image:'', content:'', }
  ])
  const createNewInfoUser =(newInfo) =>{//колбэк - принимает :newInfo из AddForm и передаетт в <AddForm 'props'-> create={createNewInfoUser}/>
    setInfoUser([...infoUser, newInfo ])
  }
  return (
    <div className ="App">
      <AddForm create={createNewInfoUser} />
      <InfolIst infoUser={infoUser} />
    </div>
  );
}


