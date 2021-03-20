import { Button } from '@material-ui/core';
import './App.css';
import logo from './logo.png';
import logo1 from './logo1.png';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="logo" alt='logo'/>
        <div className="toolbox">
          <div className="front">
          <h1 className="congrats">Congratulations</h1>
          <img src={logo1} className="card" alt='logo'/>
          <p className="giftcard">Gift  worth rupees 200</p>
          </div>

          <div className="back">
          <label for="phone">Enter your phone number:</label>
          <input type="tel" id="phone" name="phone" />
          <Button variant="contained" color="primary">
            Primary
          </Button>

          </div>
          
        </div>
      </header>
    </div>
  );
}

export default App;
