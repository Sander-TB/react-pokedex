import { useEffect, useState } from "react";
import { getAllPokemon, getOnePokemon } from "./utils/pokemon";
import { API_URL } from "./constants/Api";
import Heading from "./components/Heading";
import { Row, Container, Spinner } from "react-bootstrap";
import PokemonDisplay from "./components/PokemonDisplay";

export default function Home() {
	const [pokemonData, setPokemonData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const res = await fetch(API_URL);
				if (res.ok) {
					let response = await getAllPokemon(API_URL);
					await loadingPokemon(response.results);
				} else {
					setError("An error occurred: Having trouble catching 'em all");
				}
			} catch (error) {
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	const loadingPokemon = async (data) => {
		let allPokemon = await Promise.all(
			data.map(async (pokemon) => {
				let onePokemon = await getOnePokemon(pokemon.url);
				return onePokemon;
			})
		);
		setPokemonData(allPokemon);
	};
	if (error) {
		return <div>An error occurred: {error}</div>;
	}

	return (
		<div>
			{loading ? (
				<div className='loader-box'>
					<Heading title='Loading' />
					<Spinner className='loader' animation='border' />
				</div>
			) : (
				<>
					<Heading title='All 151* First Pokemon' />
					<p style={{ textAlign: "center" }}>
						Having trouble with fetching some of the pokemon, wip
					</p>
					<Container>
						<Row>
							{pokemonData.map((pokemon, id) => {
								return <PokemonDisplay key={id} pokemon={pokemon} />;
							})}
						</Row>
					</Container>
				</>
			)}
		</div>
	);
}
