import logo from './logo.svg';
import './App.css';
import GetStarted from './components/GetStarted';
import HowItWorks from './components/HowItWorks';
import Nav from './components/Nav'


function App() {
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
        <HowItWorks />
    </div>
  );
}

export default App;
