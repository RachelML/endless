import React, { useState, useEffect } from 'react';
import './App.css';
import GetStarted from './components/GetStarted';
import HowItWorks from './components/HowItWorks';
import Nav from './components/Nav'
import Axios from 'axios'
import Image from './images/photo-couch_2x.jpg'


function App() {
  const [data, setData] = useState();
 
  // api call to retrive data 

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await Axios(
//         'https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge',
//       );
 
// console.log(result.data)
//       setData(result.data);
//     };

//     fetchData();
//   }, []);
 

    return (
      <div className="Main-container">
        <Nav />
        <div>
          <img src={Image} alt="background" className="Background" />

          <div className="Text-container">
            <h2>New Games & Accessories</h2>
            <h1>Monthly packages.</h1>
            <h1>Excitement delivered daily.</h1>
            <p>
              What's the best way to shop for the latest video games and peripherals?
              How about never shopping at all? You'll get new stuff on your doorstep -
              every month.
          </p>

            <GetStarted />
            </div>
          
        </div>
          {/* passing api data to HowItWorks Component */}
        <HowItWorks 
          //  howData={data}
        />

      </div>
    )
  
      }

      export default App;
