import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import MainPage from './Components/MainPage/MainPage.jsx'
import Declaration from './Components/Declaration/Declaration.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path = '/' render = {() => <MainPage/>}/>
        <Route path = '/declaration' render = {() => <Declaration/>}/>
      </BrowserRouter> 
    </div>
  );
}

export default App;
