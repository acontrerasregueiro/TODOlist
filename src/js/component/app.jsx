import React, { useState, useEffect } from "react";
//include images into your bundle
//create your first component
const App = () => {
	const [tarea, setTarea] = useState("");
	const [lista, setLista] = useState([]);
	// CUANDO HAYA UN CAMBIO EN LISTA, ME MUESTRA POR CONSOLA LISTA

	useEffect(() => {
		console.log(lista);
	}, [lista]);

	function borrar(i) {
		let re = lista.filter((valor, index) => {
			return index != i;
		});
		setLista(re);
	}

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
				Añadir TAREA
			</button>
			<button
				onClick={(e) => {
					//agrega lista a las tareas que ya teniamos
					setLista([...lista, tarea]);
					console.log;
				}}>
				Añadir a lista
			</button>
			<ul>
				{lista.map(function (valor, indice) {
					//AÑADO EL ELEMENTO COMO UN LI Y SU INDICE
					return (
						<li key={indice}>
							{valor}
							<button
								onClick={() => {
									borrar(indice);
								}}>
								x
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default App;
