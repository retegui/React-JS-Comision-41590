import supermario64 from '../../assets/img/supermario64.jpg';
import pokemonruby from '../../assets/img/pokemonruby.jpg';
import parasite2 from '../../assets/img/parasite2.jpg';

export const itemList = () =>

[ 
    {
        id: 1,
        nombre: "Super Mario 64",
        consola: "Nintendo 64",
        desc: "Suelto",
        precio: 6175,
        imagen: supermario64 ,
        cantidad:5
    },
    {
        id: 2,
        nombre: "Pokemon Ruby",
        consola: "Gameboy Advance",
        desc: "Suelto",
        precio: 8614,
        imagen: pokemonruby,
        cantidad:6
    },

    {
        id: 3,
        nombre: "Parasite Eve II",
        consola: "Playstation",
        desc: "En caja sin manual",
        precio: 10090,
        imagen: parasite2,
        cantidad:4
    },
]