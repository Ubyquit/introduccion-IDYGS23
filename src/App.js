import logo from './logo.svg';
import './App.css';
import { Hola } from './components/Hola';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola mundo como estas?</p>
        <Hola/>
      </header>
    </div>
  );
}

export default App;
