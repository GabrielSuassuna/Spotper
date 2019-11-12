import React,{useState,useEffect} from 'react';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SideBar from './components/SideBar/SideBar';

function App(){
  const [nome, setNome] = useState("Pedro")

  useEffect(()=>{

  },[nome])
  
    return(
    <div className='App'>
      <div className='app-container'>

        <div className='left-side-section'>
        </div>

        <div className='main-section'>
          <Header />
          <div className='main-section-container'>
          </div>
        </div>
        <SideBar/>
        <Footer
        />
      </div>
    </div>
    );
}

export default App;
