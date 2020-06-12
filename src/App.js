import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './components/home/home';
import Singleblog from './components/blogs/single.blog';
import { Container } from 'react-bootstrap';
import Footer from './components/footer/footer';

const App = () => {


  return (
    <div className="top-comp-div">
      <Router>
        <Header />
        <div className="route-components">
          <Container className="container-div-info">
            <Switch>
              <Route component={Home} exact path="/" />
              <Route component={Singleblog} path="/blogs/:slug" />
            </Switch>
          </Container>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
