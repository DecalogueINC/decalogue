import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import './responsive.css';
import Mainmenu from './Components/Mainmenu'
import Home from './views/Home'
import About from './views/About'
import Products from './views/Product'
import Services from './views/Services'
import Ideas from './views/Ideas'
import NewsEvents from './views/NewEvents'
import Career from './views/Career'
import Contact from './views/Contact'
import Industries from './views/Industries';
import Solutions from './views/Solutions';
import Projects from './views/Projects';
import Currentopenings from './views/Career/Currentopenings';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App declongue">
      <Router>
      <Mainmenu/>
      <Switch>
      <Route path="/" exact component={Home} /> 
      <Route path="/About" render={props => <About {...props} />} /> 
      <Route path="/Products" render={props => <Products {...props} />} /> 
      <Route path="/Services" render={props => <Services {...props} />} /> 
      <Route path="/Solutions" render={props => <Solutions {...props} />} /> 
      <Route path="/Industries" render={props => <Industries {...props} />} /> 
      <Route path="/Ideas" render={props => <Ideas {...props} />} /> 
      <Route path="/News" render={props => <NewsEvents {...props} />} /> 
      <Route path="/Career" render={props => <Career {...props} />} /> 
      <Route path="/Contact" render={props => <Contact {...props} />} /> 
      <Route path="/jobs" render={props => <Currentopenings {...props} />} /> 
      <Route path="/Projects" render={props => <Projects {...props} />} /> 
      </Switch>
      </Router>
 
      <Footer/>
    </div>
  );
}

export default App;
