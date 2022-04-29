import React, { useState, useEffect } from "react";
//include images into your bundle
//create your first component
const App = () => {
	const [tarea, setTarea] = useState("");
	return (
		<div>
			<h1 className="text-center mt-5"> TODO LIST</h1>
			<input
				placeholder="Ingresar Tarea"
				onChange={(e) => {
					setTarea(e.target.value);
				}}></input>
			<button
				onClick={(e) => {
					alert(tarea);
				}}>
				Añadir
			</button>
		</div>
	);
};

export default App;
