
import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Link, BrowserRouter } from "react-router-dom";
import Nav from './component/shared/Nav'
import './App.css';
import Home from './component/pages/Home';
import Slider from './component/shared/Slider';


class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Home} />
          <Route path="/about" component={Home}/>
          <Route path="/contact" component={Home}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
