//
//
//
export const Footer = () => {
	const hour = new Date().getHours();
	const openHour = 12;
	const closeHour = 22;

	const isOpen = hour > openHour && hour < closeHour ? true : false;

	return (
		<footer
			aria-label="Footer"
			className="py-10 w-full text-center container"
		>
			{isOpen ?
				<div>
					<p className="">
						We're open until from {openHour}:00 to {closeHour}:00.
						Come visit us or order online.
					</p>
					<button className="bg-yellow-300 hover:bg-yellow-500 shadow mt-5 px-5 py-3 border-none rounded text-xl transition-all duration-300 ease-in-out cursor-pointer">
						Order Now
					</button>
				</div>
			:	<p>Sorry, we're closed now.</p>}
		</footer>
	);
};

export default Footer;
