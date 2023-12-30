import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './componests/navbar/navbar';
import Footer from './componests/footer/footer';
import Login from './componests/login/Login';
import Home from './componests/home/home';
import About from './componests/about/about';
import Contact from './componests/contact/contact';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom'; // Import ReactDOM

import "./App.css"

function App() {
  // const [showHome, setShowHome] = useState(true);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login">
          <Login  />
        </Route>
        <Route path="/about">
          <About  />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

ReactDOM.render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

export default App;
