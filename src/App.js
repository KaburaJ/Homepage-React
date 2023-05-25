import React from 'react';
import './App.css';
import logo from './logo.svg';
import img3 from './image-web-3-desktop.jpg';
import retro from './image-retro-pcs.jpg';
import laptop from './image-top-laptops.jpg';
import gaming from './image-gaming-growth.jpg';

const styles = {
  main: {

    paddingLeft : "630px",
  },
  inputText: {
    textDecoration: "none",
    color: "var(--dark-grayish-blue)",
  },

  new:{
    paddingLeft: "30px",
    paddingTop: "40px",
  },
  width:{
    width: "9.2cm",
    marginLeft: "0",
  },
  font:{
    fontSize: "15px",
  },
  bright:{
    textAlign: "start",
    marginTop: "0%",
  },
  read:{
    paddingBottom: "4.5cm",
  },
  cards:{
    color: "var(--grayish-blue",
  },
  cfont:{
    fontWeight: "bolder",
  }
}

function App() {
  return (
    <div className="App">
      <div className="navbar">
      <img src={logo} alt="logo" className="logo"/>
      <span style={styles.main}></span>
      <a style={styles.inputText}>Home</a>
      <a style={styles.inputText}>New</a>
      <a style={styles.inputText}>Popular</a>
      <a style={styles.inputText}>Trending</a>
      <a style={styles.inputText}>Categories</a>
      </div>
      <div className="grid">
          <div className="image">
            <img src={img3} alt="image-web-3-desktop" className="image"></img>
          </div>
          <div className="new" style={styles.new}>
          <first-child>New</first-child> <br></br><br></br>
                <p><h2>Hydrogen VS Electric Cars</h2></p> 
                
                <s style={styles.font}>Will hydrogen-fueled cars ever catch up to EVs?</s><br></br>
                <hr className="solid" style = {styles.width}/><br></br>
              
                <p><h2>The Downsides of AI Artistry</h2></p> 
                
                <s style={styles.font}>What are the possible adverse effects of <br></br> on-demand AI image generation?</s><br></br>
                <hr className="solid" style = {styles.width}/><br></br>
                <p><h2>Is VC Funding Drying Up?</h2></p> 
                <s style={styles.font}>Private funding by VC firms is down 50% YOY. We <br></br>take a look at what that means. </s><br></br>
                <hr className="solid" style = {styles.width}/><br></br>
          </div>
          <div className="bright"><h2 style={styles.bright}>The Bright Future of Web 3.0?</h2></div> 
          <div className="read">
                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?<br></br><br></br>
                <span style={styles.read}></span>
               <button>Read more</button> 
            </div>
          <div className="card 1">
            <img src={retro}></img>
            <h1 style={styles.cards}>01</h1><br></br>
            <h4 style={styles.cfont}>Reviving Retro PCs</h4>
            <h5 style={styles.cards}>What happens when old PCs are given modern upgrades?</h5>
          </div>
            
          <div className="card 2">
            <img src={laptop}></img>
            <h1 style={styles.cards}>02</h1><br></br>
            <h4 style={styles.cfont}>Top 10 Laptops of 2022</h4>
            <h5 style={styles.cards}>Our best picks for various needs and budgets.</h5>
          </div>
            
          <div className="card3">
            <img src={gaming}></img>
            <div className="text">
                <h1 style={styles.cards}>03</h1><br></br>
                <h4 style={styles.cfont}>The Growth of Gaming</h4>
                <h5 style={styles.cards}>How the pandemic has sparked fresh opportunities.</h5>
          </div> 
      </div>
      </div>
      </div>
   );
}

export default App;
