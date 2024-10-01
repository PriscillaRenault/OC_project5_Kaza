import Slider from '../../components/LodgingDetails/Slider'
import LodgingInfo from '../../components/LodgingDetails/LodgingInfo'
import Tags from '../../components/LodgingDetails/Tags'
import Rating from '../../components/LodgingDetails/Rating'
import Host from '../../components/LodgingDetails/Host'
import Dropdown from '../../components/Dropdown'
import Error from '../Error'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../utils/hooks'
import { useContext, useEffect } from 'react'
import { IdLodgingContext } from '../../utils/context'
import './style.scss'

function Lodging() {
	const { id } = useParams()
	const { data, isLoading, error } = useFetch(`/data/data.json`)
	const { setLodgingId } = useContext(IdLodgingContext)

	useEffect(() => {
		setLodgingId(id)
	}, [id, setLodgingId])

	if (isLoading) {
		return <span>Chargement en cours...</span>
	}
	if (error) {
		return <Error />
	}

	//filter lodging by id
	const lodging = data.find((item) => item.id === id)
	if (!lodging) {
		return <Error />
	}
	const { pictures, title, location, tags, host, rating } = lodging
	return (
		<div>
			<Slider pictures={pictures} />
			<div className='lodging-page'>
				<div className='lodging-page__text'>
					<LodgingInfo
						className='lodging-page__text--title'
						title={title}
						location={location}
					/>
					<Tags dataTags={tags} />
				</div>
				<div className='lodging-page__host-rating'>
					<Host name={host.name} picture={host.picture} />
					<Rating dataRating={rating} />
				</div>
			</div>
			<div className='lodging-page__dropdown'>
				<Dropdown
					source='/data/data.json'
					dataToggle='description'
					className='lodging-page__dropdown--items'
				/>
				<Dropdown
					source='/data/data.json'
					dataToggle='equipments'
					className='lodging-page__dropdown--items'
				/>
			</div>
		</div>
	)
}
export default Lodging
