import Slider from '../../components/LodgingDetails/Slider'
import LodgingInfo from '../../components/LodgingDetails/LodgingInfo'
import Tags from '../../components/LodgingDetails/Tags'
import Rating from '../../components/LodgingDetails/Rating'
import Host from '../../components/LodgingDetails/Host'
import Dropdown from '../../components/Dropdown'
import Error from '../../components/Error'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../utils/hooks'
import { useContext, useEffect } from 'react'
import { IdLodgingContext } from '../../utils/context'

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
		return <span>Problème lors du chargement des données</span>
	}

	//filter lodging by id
	const lodging = data.find((item) => item.id === id)
	if (!lodging) {
		return <Error />
	}

	return (
		<>
			<Slider pictures={lodging.pictures} />
			<div>
				<div>
					<LodgingInfo
						title={lodging.title}
						location={lodging.location}
					/>
					<Tags dataTags={lodging.tags} />
				</div>
				<div>
					<Host
						name={lodging.host.name}
						picture={lodging.host.picture}
					/>
					<Rating dataRating={lodging.rating} />
				</div>
			</div>
			<div>
				<Dropdown source='/data/data.json' dataToggle='equipments' />
				<Dropdown source='/data/data.json' dataToggle='description' />
			</div>
		</>
	)
}
export default Lodging
