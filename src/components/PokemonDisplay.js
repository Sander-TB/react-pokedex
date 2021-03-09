import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { typeColors } from "../utils/typeColors";

export default function PokemonDisplay({ pokemon, id }) {
	return (
		<Col>
			<Card className='card' key={id} id={id} pokemon={pokemon}>
				<Card.Img
					className='card-img'
					variant='top'
					src={pokemon.sprites.front_default}
					alt={pokemon.name}
				/>
				<Card.Body className='card-body'>
					<Card.Title>{pokemon.name}</Card.Title>
					<Card.Text>
						<p className='pkmn-id'>#{pokemon.id}</p>
						{pokemon.types.map((type) => {
							return (
								<p
									className='pkmn-types'
									style={{ backgroundColor: typeColors[type.type.name] }}>
									{type.type.name}
								</p>
							);
						})}
					</Card.Text>
					<Button className='card-btn'>
						{" "}
						<Link to={`${pokemon.id}`}>Details</Link>
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
}
