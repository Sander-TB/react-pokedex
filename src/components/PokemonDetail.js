import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { POKE_URL } from "../constants/Api";
import Heading from "./Heading";
import {
	Card,
	Button,
	Spinner,
	ProgressBar,
	Container,
	Row,
	Col,
} from "react-bootstrap";
import { HiArrowNarrowLeft } from "react-icons/hi";

export default function PokemonDetail() {
	const [pokemon, setPokemon] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	let history = useHistory();

	const { id } = useParams();

	if (!id) {
		history.push("/");
	}

	const url = POKE_URL + "/" + id;

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(url);

				if (response.ok) {
					const json = await response.json();
					console.log(json);
					setPokemon(json);
				} else {
					setError("Cannot fetch details");
				}
			} catch (error) {
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, [url]);

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
					<Card className='detail-card' key={id}>
						<Heading title={pokemon.name} />
						<div className='img-inner-container'>
							<Card.Img
								src={pokemon.sprites.front_default}
								alt={pokemon.name}
							/>
							<Card.Img src={pokemon.sprites.back_default} alt={pokemon.name} />
						</div>
						<div className='img-inner-container'>
							<Card.Img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
							<Card.Img src={pokemon.sprites.back_shiny} alt={pokemon.name} />
						</div>
						<Card.Body className='detail-body'>
							<h3>Base Stats:</h3>
							<Container>
								<Row className='stats-row'>
									<Col className='stats-col' sm>
										<p>
											{" "}
											<strong>Height: </strong>
											{pokemon.height} inches
										</p>
										<p>
											{" "}
											<strong>Weight: </strong> {pokemon.weight} pounds
										</p>
										<p>
											{" "}
											<strong>Base Experience: </strong>
											{pokemon.base_experience} exp
										</p>
									</Col>

									<Col className='stats-col' sm>
										{pokemon.stats.map((stat) => {
											return (
												<div className='stats-inner'>
													<p>
														<strong>{stat.stat.name}:</strong>
													</p>
													<ProgressBar
														className='stat-bar'
														now={stat.base_stat}
														label={stat.base_stat}
														max={150}
													/>
												</div>
											);
										})}
									</Col>
								</Row>
							</Container>
							<Button className='card-btn detail-btn'>
								{" "}
								<Link to='/'>
									<HiArrowNarrowLeft /> Go Back
								</Link>
							</Button>
						</Card.Body>
					</Card>
				</>
			)}
		</div>
	);
}
