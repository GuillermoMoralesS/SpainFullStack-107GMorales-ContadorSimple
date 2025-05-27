import React, { useEffect, useState } from "react";
import Counter from "./Counter";

const Home = () => {
	const [timer, setTimer] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer(value => value + 1);
		}, 1000);

		return () => clearInterval(interval); 
	}, []);

	return (
		<div className="d-flex justify-content-center align-items-center bg-black text-white ">
			
			  <div className="d-flex bg-dark px-4" style={{ fontSize: "8rem" }}>
                <span className="fa fa-clock reloj-icono"></span>
            </div>

			<Counter seconds={Math.floor(timer / 1000000) % 10} />
			<Counter seconds={Math.floor(timer / 100000) % 10} />
			<Counter seconds={Math.floor(timer / 10000) % 10} />
			<Counter seconds={Math.floor(timer / 1000) % 10} />
			<Counter seconds={Math.floor(timer / 100) % 10} />
			<Counter seconds={Math.floor(timer / 10) % 10} />
			<Counter seconds={Math.floor(timer % 10)} />
		</div>
	);
};

export default Home;