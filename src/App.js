import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './componests/navbar/navbar';
import Footer from './componests/footer/footer';
import Login from './componests/login/Login';


function App() {
 

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>

        <Route path="/login" exact component={Login} />

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
