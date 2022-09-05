import useFetch from "../../../hooks/useFetch.jsx";
import './Dolar.css'

const DolarCustomHook = () => {
  const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
  const { data } = useFetch(url);

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

export default DolarCustomHook;