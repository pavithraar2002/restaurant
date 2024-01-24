
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import {BrowserRouter as Router,Routes,Route  } from "react-router-dom";
import RestaurantDetails from "./components/RestaurantDetails";


function App() {
  return (
    <Router>
    <Header/>
    <Routes>
      <Route  path="/" element = {<Home/>}/>
      <Route  path="/About" element = {<About/>}/>
      <Route  path="/Contact" element = {<Contact/>}/>
      <Route  path="/details/:id" element = {<RestaurantDetails/>}/>
    </Routes>
    <Footer/>
    </Router>
      
      
    
  );
}

export default App;
