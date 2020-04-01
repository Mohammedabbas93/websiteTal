import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

//imports pages
import Home from './pages/home';
import Aboutus from './pages/aboutus';
import Errorpage from './pages/errorpage';
import Services from './pages/services';
import News from './pages/news';
import OurWorks from './pages/ourworks';
import OurCustomers from './pages/ourcustomers';

//import components
import Navbar from './Components/navbar';



function App() {
  return (

  <Router>
    <Navbar/>
  <Switch>
  <Route exact path="/">
  <Home/>
  </Route>
  <Route path="/about-us">
  <Aboutus/>
  </Route>
  <Route path="/services">
  <Services/>
  </Route>
  <Route path="/news">
  <News/>
  </Route> 
  <Route path="/our-works">
  <OurWorks/>
  </Route> 
  <Route path="/our-customers">
  <OurCustomers/>
  </Route>
  <Route path="/*">
  <Errorpage/>
  </Route>
  </Switch>
  </Router>
    
  )
    

}

export default App;
