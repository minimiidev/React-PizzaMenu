//
//
//

import type { Pizza as data } from "../interfaces/pizza";
import Pizza from "./Pizza";

interface Props {
	pizzas: data[];
	numPizzas: number;
}

export const Menu = ({ pizzas, numPizzas }: Props) => {
	return (
		<section
			aria-label="Menu"
			className="flex-col flex-center gap-8 w-full container"
		>
			<h2 className="py-5 border-t-2 border-b-2 font-light! h2">
				Our Menu
			</h2>

			<p className="font-medium text-center">
				Authentic Italian cuisine.
				<br /> {numPizzas} creative disehs to choose from.
				<br /> All from our stone oven, all organic, all delicious.
			</p>

			{numPizzas > 0 ?
				<ul className="gap-4 grid grid-cols-1 md:grid-cols-2">
					{pizzas.map((p, index) => (
						<Pizza key={index} {...p} />
					))}
				</ul>
			:	<p>
					Sorry, we're still working on our menu. Please come back
					later.
				</p>
			}
		</section>
	);
};

export default Menu;
