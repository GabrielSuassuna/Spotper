import React, {Component} from 'react';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component{
  render() {
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

        <Footer
        />
      </div>
    </div>);
  }


}

export default App;
