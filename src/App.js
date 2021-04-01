import logo from './logo.svg';
import './App.css';
import Header from './Header'
import ProfileLiff from './ProfileLiff'

const liff = window.liff;  

function App() {
  return (
    <div className="App">
      <Header />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welocome to React.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <ProfileLiff />
    </div>
  );
}

export default App;
