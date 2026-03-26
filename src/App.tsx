//
//

import { Footer, Header, Menu } from "./components";
import { pizzaData } from "./data/pizza";

//
export const App = () => {
	const pizzas = pizzaData;
	const numPizzas = pizzas.length;

	return (
		<div>
			<Header />
			<Menu pizzas={pizzas} numPizzas={numPizzas} />
			<Footer />
		</div>
	);
};

export default App;
