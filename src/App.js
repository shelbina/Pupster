import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './pages/About';
import discover from './pages/Discover';
import search from './pages/Search';
import Navbar from './components/Navbar';
import './App.css';


const App = () =>
  <Router>
    <div>
      <Navbar/>
      <Route exact path="/" component={About}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/Discover" component={discover}/>
      <Route exact path="/Search" component={search}/>
    </div>
  </Router>;

export default App;
