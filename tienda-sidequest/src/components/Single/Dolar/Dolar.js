import {useState,useEffect} from 'react'
import './Dolar.css'

const Dolar = () => {
  const [data, setData] = useState([]);

  const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) =>
        console.error(
          `No se ha podido realizar la petición al servidor debido al error ${err}`
        )
      );
  }, [url]);

  return (
    <>
      {data.map((data) => (
        <div key={data.casa.nombre} className="dolar">
          <h1>
            <data className="">{data.casa.nombre}</data>
          </h1>
          <h2> Compra : {data.casa.compra}</h2>
          <h2> Venta : {data.casa.venta}</h2>
        </div>
      ))}
    </>
  );
};

export default Dolar;
