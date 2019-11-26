import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import MainPage from './Components/MainPage/MainPage.jsx'
import Declaration from './Components/Declaration/Declaration.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from 'react-router-scroll-top'

function App() {
  return (
    <div className="App">
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <Route exact path = '/' render = {() => <MainPage/>}/>
        <ScrollToTop>
        	<Route  path = '/declaration' render = {() => <Declaration/>}/>
        </ScrollToTop>
      </BrowserRouter> 
    </div>
  );
}

export default App;
