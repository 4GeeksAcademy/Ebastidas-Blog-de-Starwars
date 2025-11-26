import React from 'react';
import { FaHeart } from "react-icons/fa";


export const CardsCharacter = ({ character }) => {
    return (
        <div className='card mx-auto p-2 bg-dark text-white'>
            <img src={character.image} className="img-fluid card-img-top" style={{ objectFit: 'cover' }} alt={character.name} />

            <div className='card-body'>
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">Gender: {character.gender}</p>
                <p className="card-text">Hair Color: {character.hair_color}</p>
                <p className="card-text">Eyes Color: {character.eye_color}</p>

                <div className="d-flex justify-content-between">
                    <a href="#" className="btn btn-dark border border-warning text-warning">Learn More</a>
                    <button className='button-heart'><FaHeart className="heart-icon" /></button>
                </div>
            </div>
        </div>
    )
}

export const CardsPlanet = ({ planet }) => {
    return (
        <div className='card mx-auto p-2 bg-dark text-white'>
            <div className='card-body'>
                <h5 className="card-title">{planet.name}</h5>
                <p className="card-text">Climate: {planet.climate}</p>
                <p className="card-text">Terrain: {planet.terrain}</p>
                <p className="card-text">Population: {planet.population}</p>

                <div className="d-flex justify-content-between">
                    <a href="#" className="btn btn-dark border border-warning text-warning">Learn More</a>
                    <button className='button-heart'><FaHeart className="heart-icon" /></button>
                </div>
            </div>
        </div>
    )
}


export const CardsVehicle = ({ vehicle }) => {
    return (
        <div className='card mx-auto p-2 bg-dark text-white'>
            <div className='card-body'>
                <h5 className="card-title">{vehicle.name}</h5>
                <p className="card-text">Model: {vehicle.model}</p>
                <p className="card-text">Crew: {vehicle.crew}</p>
                <p className="card-text">Passengers: {vehicle.passengers}</p>
                <p className="card-text">Class: {vehicle.vehicle_class}</p>

                <div className="d-flex justify-content-between">
                    <a href="#" className="btn btn-dark border border-warning text-warning">Learn More</a>
                    <button className='button-heart'><FaHeart className="heart-icon" /></button>
                </div>
            </div>
        </div>
    );
};