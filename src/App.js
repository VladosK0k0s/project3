import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import MainSlider from './Components/MainSlider/MainSlider.jsx';
import Declaration from './Components/Declaration/Declaration.jsx';
import ThankYouPage from './Components/ThankYouPage/ThankYouPage.jsx';
import Page404 from './Components/Page404/Page404.jsx';
import ScrollToTop from 'react-router-scroll-top';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      <ScrollToTop>
        <Header/>
        <Switch>
          <Route exact path = '/' render = {() => <MainSlider/>}/>
          <Route exact path = '/project3/' render = {() => <MainSlider/>}/>
          <Route exact path = '/thankYou' render = {() => <ThankYouPage/>}/>
          <Route exact path = '/thankYou/:userId' render = {() => <ThankYouPage/>}/>
          <Route exact path = '/declaration' render = {() => <Declaration/>}/>
          <Route path="*" render={()=> <Page404/>}/>
        </Switch>
        <Footer/>
        </ScrollToTop>
      </BrowserRouter> 
    </div>
  );
}

export default App;
