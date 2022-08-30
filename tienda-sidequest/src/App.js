import './App.css';
import {NavBar} from './components/NavBar/NavBar';
import Logo from './assets/img/avatar1.png';
import { Landing } from './components/Landing/landing';


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <NavBar><img src={Logo} alt=''></img></NavBar>   
        <Landing/>
      </header>
    </div>
  );
}

export default App;
