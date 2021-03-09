import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./Home";
import Contact from "./Contact";
import PokemonDetail from "./components/PokemonDetail";
import "./css/index.css";

function App() {
	return (
		<Router>
			<Navigation />
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/contact'>
					<Contact />
				</Route>
				<Route path='/:id'>
					<PokemonDetail />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

// https://youtu.be/HaEB0vdxpdg?t=2613 <-- Colors for types
