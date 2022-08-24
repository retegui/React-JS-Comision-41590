import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import logo from './assets/avatar1.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar><div><img src={logo} alt=''></img></div></NavBar>   
       <ItemListContainer></ItemListContainer>
        {/* <Articulos id="1"nombre="Super Mario 64" consola="Nintendo 64" desc="Suelto" precio="$6175" img="/assets/img/supermario64.jpg"         
          cantidad="5">
        </Articulos>
        <Articulos id="2" nombre="Dragon Quest VIII" consola="Nintendo 3DS" desc="Sellado" precio="$20592" img="/assets/img/dqviii.jpg"
          cantidad="3">
        </Articulos>  
        <Articulos id="3" nombre="Pokemon Ruby" consola="Gameboy Advance" desc="Suelto" precio="$8614" img="/assets/img/pokemonruby.jpg"
          cantidad="6">
        </Articulos>   */}
      </header>
    </div>
  );
}

export default App;
