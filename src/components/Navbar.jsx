import { Link } from "react-router-dom";

export const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg text-white">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/StarWarsLogo.jpeg"
            alt="Logo"
            style={{ height: "150px" }}
            className="d-inline-block align-text-top mt-3 ms-3"
          />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto d-flex align-items-center">

            <li className="nav-item dropdown me-3">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favoritos
              </a>
              <ul className="dropdown-menu me-0 bg-dark">
                <li><a className="dropdown-item text-warning" href="#">Action</a></li>
                <li><a className="dropdown-item text-warning" href="#">Another action</a></li>
                <li><a className="dropdown-item text-warning" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscador" aria-label="Search" />
            <button className="btn btn-outline-warning" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  );
};
