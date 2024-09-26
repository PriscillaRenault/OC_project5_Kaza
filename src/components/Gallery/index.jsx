import '../../scss/base/base.scss'
import './style.scss'
import GalleryItem from '../GalleryItem/index'
import { useFetch } from '../../utils/hooks'
import { useNavigate } from 'react-router-dom'

function Gallery() {
	const { data, isLoading, error } = useFetch(`/data/data.json`)
	const navigate = useNavigate()

	if (isLoading) {
		return <span>Chargement en cours...</span>
	}
	if (error) {
		return <span>Problème lors du chargement des données</span>
	}

	const handleClick = (id) => {
		navigate(`/Lodging/${id}`)
	}

	return (
		<ul className='gallery'>
			{data.map((item) => (
				<GalleryItem
					key={item.id}
					id={item.id}
					cover={item.cover}
					title={item.title}
					onClick={() => handleClick(item.id)}
				/>
			))}
		</ul>
	)
}
export default Gallery
