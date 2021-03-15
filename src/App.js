import React from 'react';
import './App.css';
import './About.css';
import Nav from './Nav'
import About from './About'
import Shop from './Shop'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';




function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/shop" component={Shop} />
      </Switch>
    </div>
    </Router>

   
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>

    

   <h1>What We Offer</h1>
    
    <div className="content">

        <div className="login animate-left">
            <div className="login-img">
                <img src="https://cdn.pixabay.com/photo/2019/01/17/19/11/registration-3938434_960_720.jpg" alt=""/>
            </div>
            <div className="login-text">
                <h2>Login Page</h2>
                <p>We use a secure PHP driven login page that connects to your database.</p>
            </div>
        </div>

        <div className="contact animate-right">
            <div className="contact-text">
                <h2>Contact Form</h2>
                <p>We set your contact page/form so that you automatically recieve emails from clients.</p>
            </div>
            <div className="contact-img">
                <img src="https://cdn.pixabay.com/photo/2017/10/17/10/03/contact-2860030_960_720.jpg" alt=""/>
            </div>
        </div>

        <div className="style animate-left">
            <div className="style-img">
                <img src="https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_960_720.jpg" alt=""/>
            </div>
            <div className="style-text">
                <h2>Image Styling</h2>
                <p>We offer extra styling to your images so that viewers can experience slide, fade, pop-ups and more!</p>
            </div>
        </div>

        <div className="vid">
            <a href="index.html">Watch Intro Video</a>
        </div>

    </div>
  </div>
) 

export default App;
