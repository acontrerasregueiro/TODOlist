import React, { useState, useEffect } from "react";

function leerApi(setLista) {
	fetch("https://assets.breatheco.de/apis/fake/todos/user/acontrerasregueiro")
		.then((response) => response.json())
		.then((result) => setLista(result))
		.catch((error) => console.log("error", error));
}

function actualizardatosApi(lista) {
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	var raw = JSON.stringify(lista);
	var requestOptions = {
		method: "PUT",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	};

	fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/acontrerasregueiro",
		requestOptions
	)
		.then((response) => response.json())
		.then((result) => console.log(result))
		.catch((error) => console.log("error", error));
}

const App = () => {
	const [tarea, setTarea] = useState("");
	const [lista, setLista] = useState([]);

	useEffect(() => {
		leerApi(setLista);
	}, []); // se renderiza una vez , al iniciar la app por primera vez

	useEffect(() => {
		actualizardatosApi(lista);
	}, [lista]); // cada vez que se modifica la variable lista se ejecutara anadiraApi()

	function borrar(i) {
		//filtramos el resultado y dejamos todos salvo el que sea igual al indice
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
					//agrega lista a las tareas que ya teniamos
					setLista([...lista, { label: tarea, done: false }]);
				}}>
				Añadir a API
			</button>
			<ul>
				{lista?.map((objeto, indice) => {
					//AÑADO EL ELEMENTO COMO UN LI Y SU INDICE
					return (
						<li key={indice}>
							{objeto.label}
							<button
								key={indice}
								onClick={(e) => {
									borrar(indice);
								}}>
								x
							</button>
							;
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default App;
