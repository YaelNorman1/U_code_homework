import React, { Component } from 'react';
import './App.css';

class App extends Component {
  getStuff() {
    return "Wild function'ed text";
  }

  getMorningGreeting() {
    return (<div>good morning</div>)
  }

  getEveningGreeting() {
    return (<div>good evening</div>)
  }

  showCompany(name, revenue) {
    return <div id="{name}">{name} makes {revenue} every year</div>
  }

  getClassName(temperature) {
    if (temperature<15)
      return <div id="weatherBox">freezing </div>
    else if (temperature>30)
      return <div id="weatherBox">hell-scape </div>
    else
      return <div id="weatherBox">fair </div>
    

  }

  render() {

    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }
    ]

    let showCompanies= companies.map(company=> this.showCompany(company.name, company.revenue))

    // if (new Date().getHours() > 12) {
    //   return this.getEveningGreeting();
    // } else {
    //   return this.getMorningGreeting();
    // }
    return (
      <div>
        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 1</h4 >
          <div className="exercise" id="spotcheck-1">
            <h1>Stuff: {this.getStuff()}</h1>
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
            {new Date().getHours() > 12 ? this.getEveningGreeting() : this.getMorningGreeting()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3">
            {/* your code here */}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 1</h4>
          <div className="exercise" id="ex-1">
            <div>{showCompanies}</div>
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 2</h4>
          <div className="exercise" id="ex-2">
            {/* your code here */}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
