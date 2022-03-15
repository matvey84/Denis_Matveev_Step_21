import React from "react";
import { BrowserRouter} from 'react-router-dom'
import Header from './components/header/Header';
import { AppRoutes } from "./components/appRoutes/AppRoutes";

function App() {
	return(
	<BrowserRouter>
	  <Header/>
		
	    <div className='wrapper'>
			<AppRoutes/>
	    </div>
	</BrowserRouter>
 );
}

export default App;
