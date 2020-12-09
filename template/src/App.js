
import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Link, BrowserRouter } from "react-router-dom";
import Nav from './component/shared/Nav'
import './App.css';
import Home from './component/pages/Home';
import Slider from './component/shared/Slider';
import About from './component/pages/About';
import Product from './component/pages/Product';
import Contact from './component/pages/Contact';
import DetailProduct from './component/pages/DetailProduct';
import ScrollToTop from './ScrollToTop';
import Footer from './component/shared/Footer';


class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <ScrollToTop>
        <div>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/product/:id" component={DetailProduct}/>
          <Footer />
        </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
