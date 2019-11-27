import React,{useState,useEffect} from 'react';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import Roteador from './components/Roteador/Roteador';

function App(){
  const [nome, setNome] = useState("Pedro")

  useEffect(()=>{

  },[nome])
  
    return(
    <div className='App'>
      <div className='app-container'>

        <SideBar/>
        <Roteador/>
      </div>
    </div>
    );
}

export default App;
