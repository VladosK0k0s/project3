import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import MainPage from './Components/MainPage/MainPage.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path = '/' render = {() => <MainPage/>}/>
      </BrowserRouter> 
    </div>
  );
}

export default App;
