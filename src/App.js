import React, { Component } from 'react'
import './App.css';
import Prices from './Components/Prices';

const pricing = require('./Utils/pricing');


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: '300-400'
    }
    this.changeCategory = this.changeCategory.bind(this);
  }

  changeCategory = (e) => {
    this.setState({active: e.target.innerHTML});
  }


  render() {
    const {active} = this.state;
    return (
      <div className = 'row' style = {{marginTop: '20px', paddingLeft: '30px', paddingRight: '30px'}}>
        <div className="col s12">
          <ul className="tabs">
              {
                  Object.keys(pricing).map(category => (
                      <li className = {active == category? 'tab col s12 l5ths indigo bold':'tab col s12 l5ths grey lighten-3 bold'}>
                          <a href = "" onClick = {this.changeCategory}>{category}</a>
                      </li>
                  ))
              }
          </ul>
        </div>
        <br />
        <br />
        <br />
        <br />
        <Prices uid = {active} prices = {pricing[active]} />
      </div>
    )
  }
}


