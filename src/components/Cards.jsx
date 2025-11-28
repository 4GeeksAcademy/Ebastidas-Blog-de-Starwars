import React from 'react';
import { FaHeart } from "react-icons/fa";


export const CardsCharacter = ({ character }) => {
    return (
        <div className='card-character mx-auto p-2 bg-dark bg-gradient bg-opacity-75 text-white rounded'>
            <img src={character.image} className="img-fluid card-img-top" style={{ objectFit: 'cover' }} alt={character.name} />

            <div className='card-body ms-3 mt-3'>
                <h5 className="card-title text-danger">{character.properties.name}</h5>
                <br />
                <p className="card-text text-light">Gender: {character.properties.gender}</p>
                <p className="card-text text-light">Hair Color: {character.properties.hair_color}</p>
                <p className="card-text text-light">Eyes Color: {character.properties.eye_color}</p>
            </div>

            <div className="card-footer ms-3 mt-5 d-flex justify-content-between ">
                <a href="#" className="btn btn-dark border border-warning text-warning">Learn More</a>
                <button className='button-heart'><FaHeart className="heart-icon" /></button>
            </div>
        </div>

    )
}

export const CardsPlanet = ({ planet }) => {
    return (
        <div className='card-planet mx-auto p-2 bg-dark bg-gradient bg-opacity-75 text-white rounded'>
            <img src={planet.image} className="img-fluid card-img-top" style={{ objectFit: 'cover' }} alt={planet.img} />


            <div className='card-body ms-3 mt-5'>
                <h5 className="card-title mt-4 text-danger fw-bold">{planet.properties.name}</h5>
                <br />
                <p className="card-text">Climate: {planet.properties.climate}</p>
                <p className="card-text">Terrain: {planet.properties.terrain}</p>
            </div>
            <div className="card-footer s-3 mt-5 d-flex justify-content-between">
                <a href="#" className="btn btn-dark border border-success text-warning">Learn More</a>
                <button className='button-heart'><FaHeart className="heart-icon" /></button>
            </div>
        </div>
    )
}


export const CardsVehicle = ({ vehicle }) => {
    return (
        <div className='card-vehicle mx-auto p-2 bg-dark bg-gradient bg-opacity-75 text-light rounded'>

            <div className='card-body ms-3 mt-4'>
                <h5 className="card-title text-danger">{vehicle.properties.name}</h5>
                <br />
                <p className="card-text">Model: {vehicle.properties.model}</p>
                <p className="card-text">Crew: {vehicle.properties.crew}</p>
                <p className="card-text">Passengers: {vehicle.properties.passengers}</p>
            </div>
            <div className="card-footer s-3 mt-5 d-flex justify-content-between">
                <a href="#" className="btn btn-dark border border-warning text-warning ">Learn More</a>
                <button className='button-heart'><FaHeart className="heart-icon" /></button>
            </div>

        </div>
    );
};