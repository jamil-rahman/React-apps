import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
        <p>This is my first react app!</p>
          <p>To get <a href="https://www.taniarascia.com/getting-started-with-react/" id ="anchor-tag"><b> started with React!</b> </a> You can visit tanaiarascia's tutorial!</p>
      </header>
    </div>
  );
}

export default App;
