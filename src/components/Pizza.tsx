//
//
//

import type { Pizza as Props } from "../interfaces/pizza";

export const Pizza = ({
	ingredients,
	name,
	photoUrl,
	price,
	soldOut,
}: Props) => {
	return (
		<li className={`pizza ${soldOut ? "sold-out" : ""} flex gap-4`}>
			<img
				src={photoUrl}
				alt={name}
				className={`shadow rounded-md w-36 h-auto object-cover hover:scale-105 transition-all duration-300 ease-in-out
						`}
			/>
			<div className="flex flex-col gap-3">
				<h3 className="font-normal! h4">{name}</h3>
				<p className="font-light text-sm! italic">{ingredients}</p>
				<p>{soldOut ? "SOLD OUT" : `Price: ${price}`}</p>
			</div>
		</li>
	);
};

export default Pizza;
