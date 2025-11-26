// Importar los hooks y componentes necesarios de react-router-dom y otras librerías.
import { Link, useParams } from "react-router-dom";  // Para usar Link para la navegación y useParams para obtener parámetros de la URL
import PropTypes from "prop-types";  // Para definir los tipos de props de este componente
import rigoImageUrl from "../assets/img/rigo-baby.jpg"  // Importar un recurso de imagen
import useGlobalReducer from "../hooks/useGlobalReducer";  // Importar un hook personalizado para acceder al estado global

// Definir y exportar el componente Single que muestra los detalles de un elemento individual.
export const Single = props => {
  // Acceder al estado global usando el hook personalizado.
  const { store } = useGlobalReducer()

  // Obtener el parámetro de URL 'theId' usando el hook useParams.
  const { theId } = useParams()
  const singleTodo = store.todos.find(todo => todo.id === parseInt(theId));

  return (
    <div className="container text-center">
      {/* Mostrar el título del elemento todo, recuperado dinámicamente del store usando theId. */}
      <h1 className="display-4">Todo: {singleTodo?.title}</h1>
      <hr className="my-4" />  {/* Una línea horizontal para separación visual. */}

      {/* Un componente Link actúa como una etiqueta anchor pero se usa para el enrutamiento del lado del cliente y evitar recargar la página. */}
      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

// Usar PropTypes para validar las props pasadas a este componente, asegurando un comportamiento confiable.
Single.propTypes = {
  // Aunque la prop 'match' está definida aquí, no se usa en el componente.
  // Considera eliminarla o usarla según sea necesario.
  match: PropTypes.object
};
