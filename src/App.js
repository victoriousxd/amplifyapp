import logo from './logo.svg';
import './App.css';
import chicken from './assets/chicken_thumbs_up.gif'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={chicken} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload 
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <bob/>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
