import GalleryItem from "./GalleryItem";
import "../scss/components/Gallery.scss";
import { useState, useEffect } from "react";

function Gallery() {
	const [data, setData] = useState([]); // Initialise l'état 'data' avec un tableau vide
	useEffect(() => {
		fetch("../../public/data/data.json")
			.then((response) => response.json()) // Convertit la réponse en JSON
			.then((jsonData) => setData(jsonData)) // Met à jour l'état 'data' avec les données récupérées
			.catch((error) =>
				console.error("Erreur lors du chargement des données", error)
			); // Gère les erreurs
	}, []);
	return (
		<ul className='gallery'>
			{data.map((item) => (
				<GalleryItem
					key={item.id}
					id={item.id}
					cover={item.cover}
					title={item.title}
				/>
			))}
		</ul>
	);
}
export default Gallery;
