import '../../scss/base/base.scss'
import './style.scss'
import GalleryItem from '../GalleryItem/index'
import { useFetch } from '../../hooks'

function Gallery() {
	const { data, isLoading, error } = useFetch(`/data/data.json`)

	// Ici le "?" permet de s'assurer que data existe bien.
	// Vous pouvez en apprendre davantage sur cette notation ici :
	// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
	if (isLoading) {
		return <span>Chargement en cours...</span>
	}
	if (error) {
		return <span>Oups il y a eu un problème</span>
	}

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
	)
}
export default Gallery
