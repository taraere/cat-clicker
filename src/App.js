import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0
//     }
//   }
  
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Cat Clicker</h1>
//         </header>
      
//         <CatDetails cat={new Kitty("Pepper")} />
//         <CatDetails cat={new Kitty("Arnold", "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426")} />
//       </div>
//     );
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  RenderKitties(cats) {
    for (const cat of cats) {
      console.log(cats);
      console.log(cat);
      return <CatDetails cat/>
    }
  }
  
  RenderKitty(cat) {
    return <CatDetails cat/>
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cat Clicker</h1>
        </header>

        {this.RenderKitty(
          new Kitty("Pepper"))}
          
          </div>
        );
      }
    }

function Kitty(catName = "Kitty", imageUrl = "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496") {
  this.catName = catName;
  this.imageUrl = imageUrl;
  this.age = 12;
}

class CatDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      cat: this.props.cat
    }
  }

  handleClick(i) {
    console.log(this.props.cat);
    let oldCounter = this.state.counter;
    this.setState({
      counter: oldCounter += 1
    })
  }

  render() {
    return (
        <div>
        <img 
        src={this.state.cat.imageUrl}
        className="Cat-photo"
        onClick={(i) => 
            this.handleClick(i)
          }
        alt="cute cat"
        />
    
        <p className="instructions">Click the cat, "{this.state.cat.catName}"</p>
    
        {this.state.counter}
        </div>
    )
  }
}

// 13:13 10/4/2018

    
    export default App;
    
        // {this.RenderKitties([
        //   new Kitty("Pepper"), 
        //   new Kitty("Arnold", "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426")
        // ])}