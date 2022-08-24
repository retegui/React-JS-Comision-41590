import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Logo from './assets/img/avatar1.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar><img src={Logo} alt=''></img></NavBar>   
        <ItemListContainer />
      </header>
    </div>
  );
}

export default App;
