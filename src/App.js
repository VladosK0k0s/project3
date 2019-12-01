import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage.jsx';
import Declaration from './Components/Declaration/Declaration.jsx';
import ThankYouPage from './Components/ThankYouPage/ThankYouPage.jsx';
import ScrollToTop from 'react-router-scroll-top';

function App() {
  return (
    <div className="App">
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      
        <Route exact path = '/' render = {() => <MainPage/>}/>
        <Route exact path = '/project2/' render = {() => <MainPage/>}/>
        <Route exact path = '/thankYou' render = {() => <ThankYouPage/>}/>
        <Route  path = '/thankYou/:userId' render = {() => <ThankYouPage/>}/>
        <ScrollToTop>
        	<Route  path = '/declaration' render = {() => <Declaration/>}/>
        </ScrollToTop>
      </BrowserRouter> 
    </div>
  );
}

export default App;
