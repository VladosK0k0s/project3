import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import MainPage from './Components/MainPage/MainPage.jsx';
import Declaration from './Components/Declaration/Declaration.jsx';
import ThankYouPage from './Components/ThankYouPage/ThankYouPage.jsx';
import ScrollToTop from 'react-router-scroll-top';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <Header/>
        <Route exact path = '/' render = {() => <MainPage/>}/>
        <Route exact path = '/project2/' render = {() => <MainPage/>}/>
        <Route exact path = '/thankYou' render = {() => <ThankYouPage/>}/>
        <Route  path = '/thankYou/:userId' render = {() => <ThankYouPage/>}/>
        <ScrollToTop>
        	<Route  path = '/declaration' render = {() => <Declaration/>}/>
        </ScrollToTop>
        <Footer/>
      </BrowserRouter> 
    </div>
  );
}

export default App;
