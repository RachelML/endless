import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import GetStarted from './components/GetStarted';
import HowItWorks from './components/HowItWorks';
import Nav from './components/Nav'
import Axios from 'axios'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      worksData: []
    }
  }

  fetchWorksData = async () => {
    try{
  const response = await Axios.get(`https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge`)
  const howItWorks = response.data
  this.setState({ worksData: howItWorks })
  console.log(howItWorks)
    }catch(e){
      console.log(e)
    }
}

componentDidMount() {
  this.fetchWorksData()
}


render(){

  return (
    
    <div>
      <Nav />
        <h2>New Games & Accessories</h2>
        <h1>Monthly packages.</h1>
        <h1>Excitement delivered daily.</h1>
        <p>
          What's the best way to shop for the latest video games and peripherals?
           How about never shopping at all? You'll get new stuff on your doorstep -
           every month.
        </p>
        <GetStarted />
        <HowItWorks works={this.state.worksData}/>
    </div>
  );
}
}
export default App;
