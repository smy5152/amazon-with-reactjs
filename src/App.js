import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <Router>
    <div className="App">
    <Header />
      <Switch>
        <Route path="/checkout">
          <Checkout />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
