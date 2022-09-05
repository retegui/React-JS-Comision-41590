import supermario64 from '../assets/img/supermario64.jpg'
import pokemonruby from '../assets/img/pokemonruby.jpg';
import parasite2 from '../assets/img/parasite2.jpg';

const productos = [ 
    {
        id: 1,
        nombre: "Super Mario 64",
        consola: "Nintendo 64",
        desc: "Super Mario 64 is a 1996 platform game for the Nintendo 64. Developed by Nintendo Entertainment Analysis and Development and published by Nintendo, it is the first Super Mario game to feature 3D gameplay, combining traditional Super Mario gameplay, visual style, and characters in a large open world. ",
        precio: 6175,
        img: [supermario64] ,
        cantidad:5
    },
    {
        id: 2,
        nombre: "Pokemon Ruby",
        consola: "Gameboy Advance",
        desc: "Suelto",
        precio: 8614,
        img: [pokemonruby],
        cantidad:6
    },

    {
        id: 3,
        nombre: "Parasite Eve II",
        consola: "Playstation",
        desc: "En caja sin manual",
        precio: 10090,
        img: parasite2,
        cantidad:4
    },
]

const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos)
        reject(err => console.log(err))
    }, 3000)
})

export default getFetch
