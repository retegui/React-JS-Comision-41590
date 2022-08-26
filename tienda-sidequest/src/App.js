import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Logo from './assets/img/avatar1.png';
import { Contador } from './components/Contador/ItemCount';

function App() {

  const agregar = ()=>{
    console.log('funcion agregar')
  }
  return (
    <div className="App">
      <header className="App-header">
        <NavBar><img src={Logo} alt=''></img></NavBar>   
        <Contador stock={5} initial={1} agregarProducto={agregar}/>
        <ItemListContainer />
      </header>
    </div>
  );
}

export default App;
