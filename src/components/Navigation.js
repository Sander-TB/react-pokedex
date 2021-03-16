import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CgPokemon } from "react-icons/cg";

export default function Navigation() {
	return (
		<Navbar className='nav' expand='lg'>
			<Navbar.Brand className='brand'>
				<NavLink to='/'>
					React PokéDex
					<CgPokemon className='pokeball' />
				</NavLink>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link>
						<NavLink activeStyle={{ color: "black" }} to='/'>
							Home
						</NavLink>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
