import './App.css';
import {NavBar} from './components/NavBar/NavBar';
import Logo from './assets/img/avatar1.png';
import ItemListContainer from './components/Container/ItemListContainer/ItemListContainer'
import ItemDetail from './components/Single/ItemDetail/ItemDetail'


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <NavBar><img src={Logo} alt=''></img></NavBar>   
        <ItemListContainer/>
        <ItemDetail/> 
     </header>
    </div>
  );
}

export default App;
