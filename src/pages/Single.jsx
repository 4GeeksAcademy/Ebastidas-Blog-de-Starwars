// Importar los hooks y componentes necesarios de react-router-dom y otras librerías.
import { useParams } from "react-router-dom";  // Para usar Link para la navegación y useParams para obtener parámetros de la URL
import useGlobalReducer from "../hooks/useGlobalReducer";  // Importar un hook personalizado para acceder al estado global

// Definir y exportar el componente Single que muestra los detalles de un elemento individual.
export const Single = () => {

  // Obtener el parámetro de URL 'theId' usando el hook useParams.
  const { theId } = useParams()
  const { store } = useGlobalReducer()

  const index = parseInt(theId);
  
 

  return (
    <div className="container mt-5">

    <h1 className="text-center text-warning mb-4">people-name</h1>

    <div className="row">

      <div className="col-md-5">
        <div className="bg-danger">
          people-img
        </div>
      </div>

<div className="col-md-7 text-white">

  <h4>Descripción</h4>
  <hr/>
{/*props*/}

<div className="row">

  <div className="col-4">

  </div>

</div>



</div>
    </div>




    </div>
  )
};
