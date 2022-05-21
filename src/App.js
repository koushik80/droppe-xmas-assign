import logo from './logo.png';
import './App.css';
import SocialFollow from './SocialFollow';

const App = () => {
  return (
    <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
      <div><p>
        upcoming...
      </p></div>
      <SocialFollow />
    </div>
  );
};

export default App;
