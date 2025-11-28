import React from 'react';
import { FaHeart, FaPeopleCarry } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalReducer } from '../hooks/useGlobalReducer';


export const CardsCharacter = ({ character }) => {

    const { store, dispatch } = useGlobalReducer();

    const isFav = store.favorites.some(item => item.uid === character.uid && item.type === "people");

    const favorite = () => {
        if (isFav) {
            console.log("eliminar character favorito");
            dispatch({
                type: "REMOVE_FAVORITE",
                payload: character.uid
            });
        } else {
            dispatch({
                type: "ADD_FAVORITE",
                payload: {
                    uid: character.uid,
                    name: character.properties.name,
                    type: "people"
                }
            });
        }
    };


    return (
        <div className='card-character mx-auto p-2 bg-dark bg-gradient bg-opacity-75 text-white rounded'>
 <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/38/Boba_Fett_-_A_Fett_to_Remember.jpg"
                    alt="#"
                    className="img-fluid mb-3"
                    style={{ width: "300px", borderRadius: "10px" }}
                  />

            <div className='card-body ms-3 mt-3'>
                <h5 className="card-title text-danger">{character.properties.name}</h5>
                <br />
                <p className="card-text text-light">Gender: {character.properties.gender}</p>
                <p className="card-text text-light">Hair Color: {character.properties.hair_color}</p>
                <p className="card-text text-light">Eyes Color: {character.properties.eye_color}</p>
            </div>

            <div className="card-footer ms-3 mt-5 d-flex justify-content-between ">
                <Link to={`/people/${character.uid}`} className="btn btn-dark border border-warning text-warning">Learn More</Link>
                <button className='button-heart' onClick={() => { console.log("like"); favorite() }}><FaHeart className="heart-icon" style={{ color: isFav ? "yellow" : "white" }} /></button>
            </div>
        </div>

    );
};

export const CardsPlanet = ({ planet }) => {
    const { store, dispatch } = useGlobalReducer();

    const isFav = store.favorites.some(item => item.uid === planet.uid && item.type === "planets");

    const favorite = () => {
        if (isFav) {
            console.log("eliminar planet favorito");
            dispatch({
                type: "REMOVE_FAVORITE",
                payload: planet.uid
            });
        } else {
            dispatch({
                type: "ADD_FAVORITE",
                payload: {
                    uid: planet.uid,
                    name: planet.properties.name,
                    type: "planets"
                }
            });
        }
    };

    return (
        <div className='card-planet mx-auto p-2 bg-dark bg-gradient bg-opacity-75 text-white rounded'>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Coruscant.jpg"
                    alt="#"
                    className="img-fluid mb-3"
                    style={{ width: "300px", borderRadius: "10px" }}
                  />
            <div className='card-body ms-3 mt-5'>
                <h5 className="card-title mt-4 text-danger fw-bold">{planet.properties.name}</h5>
                <br />
                <p className="card-text">Climate: {planet.properties.climate}</p>
                <p className="card-text">Terrain: {planet.properties.terrain}</p>
            </div>
            <div className="card-footer s-3 mt-5 d-flex justify-content-between">
                <Link to={`/planets/${planet.uid}`} className="btn btn-dark border border-success text-warning">Learn More</Link>
                <button className='button-heart' onClick={() => { console.log("like"); favorite() }}><FaHeart className="heart-icon" style={{ color: isFav ? "yellow" : "white" }} /></button>
            </div>
        </div>
    )
}

export const CardsVehicle = ({ vehicle }) => {
    const { store, dispatch } = useGlobalReducer();

    const isFav = store.favorites.some(item => item.uid === vehicle.uid && item.type === "vehicles");

    const favorite = () => {
        if (isFav) {
            console.log("eliminar vehicle favorito");
            dispatch({
                type: "REMOVE_FAVORITE",
                payload: vehicle.uid
            });
        } else {
            dispatch({
                type: "ADD_FAVORITE",
                payload: {
                    uid: vehicle.uid,
                    name: vehicle.properties.name,
                    type: "vehicles"
                }
            });
        }
    };
    return (
        <div className='card-vehicle mx-auto p-2 bg-dark bg-gradient bg-opacity-75 text-light rounded'>
<img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/73/Star_Wars_Celebration_2015_-_Jawas_%26_Droids_%2817398490724%29.jpg"
                    alt="#"
                    className="img-fluid mb-3"
                    style={{ width: "300px", borderRadius: "10px" }}
                  />
            <div className='card-body ms-3 mt-4'>
                <h5 className="card-title text-danger">{vehicle.properties.name}</h5>
                <br />
                <p className="card-text">Model: {vehicle.properties.model}</p>
                <p className="card-text">Crew: {vehicle.properties.crew}</p>
                <p className="card-text">Passengers: {vehicle.properties.passengers}</p>
            </div>
            <div className="card-footer s-3 mt-5 d-flex justify-content-between">
                <Link to={`/vehicles/${vehicle.uid}`} className="btn btn-dark border border-success text-warning">Learn More</Link>
                <button className='button-heart' onClick={() => { console.log("like"); favorite() }}><FaHeart className="heart-icon" style={{ color: isFav ? "yellow" : "white" }} /></button>
            </div>

        </div>
    );
};