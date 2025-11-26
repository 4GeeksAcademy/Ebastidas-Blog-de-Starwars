import React, { useState, useEffect } from 'react';
import { CharacterList } from '../components/CharacterList';
import { PlanetList } from '../components/PlanetList';
import { VehicleList } from '../components/VehicleList';


const Home = () => {

	const [characterList, setCharacterList] = useState([]);
	const [planetList, setPlanetList] = useState([]);
	const [vehicleList, setVehicleList] = useState([]);


	useEffect(() => {

		const getCharacterList = async () => {
			const res = await fetch("https://www.swapi.tech/api/people/");
			const data = await res.json();

			const detailed = await Promise.all(
				data.results.map(async (item) => {
					const r = await fetch(item.url);
					const info = await r.json();
					return info.result.properties;
				})
			);

			setCharacterList(detailed);
		};

		const getPlanetList = async () => {
			const res = await fetch("https://www.swapi.tech/api/planets/");
			const data = await res.json();

			const detailed = await Promise.all(
				data.results.map(async (item) => {
					const r = await fetch(item.url);
					const info = await r.json();
					return info.result.properties;
				})
			);

			setPlanetList(detailed);
		};
		const getVehicleList = async () => {
			const res = await fetch("https://www.swapi.tech/api/vehicles/");
			const data = await res.json();

			const detailed = await Promise.all(
				data.results.map(async (item) => {
					const r = await fetch(item.url);
					const info = await r.json();
					return info.result.properties;
				})
			);

			setVehicleList(detailed);
		};

		getCharacterList();
		getPlanetList();
		getVehicleList();

	}, []);


	return (
		<div className="">
			<h1 className='character-title'>Characters</h1>
			<br></br>
			<CharacterList characters={characterList} />

			<h1 className='planet-title'>Planets</h1>
			<br></br>
			<PlanetList planets={planetList} />

			<h1 className='vehicle-list'>Vehicles</h1>
			<br></br>
			<VehicleList vehicles={vehicleList} />
		</div>
	);
};

export default Home;