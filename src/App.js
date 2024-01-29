import logo from './logo.svg';
import './App.css';
import Movies from "./components/Movies"
import Header from "./components/Header"



const App = () => {

  return (
    <div className="App">
      <Header/>
      <Movies/>
    </div>
  );
}

export default App;

