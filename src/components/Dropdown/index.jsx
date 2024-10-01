import '../../scss/base/base.scss'
import './style.scss'
import PropTypes from 'prop-types'
import { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useFetch } from '../../utils/hooks'
import { IdLodgingContext } from '../../utils/context'

/**
 * Create dropdown component use on about page and lodging page to display equipments and description
 * @param {string} source - The source of the data
 * @param {string} dataToggle - The toggle to display equipments / description
 * @param {string} dataLodgingId
 */

function Dropdown({ source, dataToggle, dataLodgingId }) {
	const [openIndices, setOpenIndices] = useState([]) // open dropdown
	const { data, isLoading, error } = useFetch(source)
	const { lodgingId } = useContext(IdLodgingContext)
	const validLodgingId = dataLodgingId || lodgingId

	if (isLoading) {
		return <span>Chargement en cours...</span>
	}
	if (error) {
		return <span>Problème lors du chargement des données</span>
	}

	// Function to render dropdown item
	const renderDropdownItem = (title, content, index, customClass) => {
		const isOpen = openIndices.includes(index)

		return (
			<div className={`dropdown ${customClass}`} key={index}>
				<details
					open={isOpen}
					onToggle={() => {
						if (isOpen) {
							setOpenIndices(
								openIndices.filter((i) => i !== index)
							) // close dropdown
						} else {
							setOpenIndices([...openIndices, index]) // open dropdown
						}
					}}
				>
					<summary className='dropdown__title'>
						<p>{title}</p>
						<FontAwesomeIcon
							icon={isOpen ? faChevronUp : faChevronDown}
							className='dropdown__icon'
						/>
					</summary>
					<div className='dropdown__content'>{content}</div>
				</details>
			</div>
		)
	}

	// Filter data to find dataId === validLodgingId
	if (source === '/data/data.json') {
		const lodging = data.find((item) => item.id === validLodgingId)
		const { equipments, description } = lodging

		if (!lodging) {
			return <span>Aucun hébergement trouvé</span>
		}

		// display equipments
		if (dataToggle === 'equipments') {
			return renderDropdownItem(
				'Équipements',
				equipments.map((item, index) => <p key={index}>{item}</p>),
				0,
				'dropdown__lodging'
			)
		}

		// display description
		if (dataToggle === 'description') {
			return renderDropdownItem(
				'Description',
				<p>{description}</p>,
				1,
				'dropdown__lodging'
			)
		}
	}

	// display about page
	if (source === '/data/about.json') {
		return (
			<div className='about'>
				{data.map(({ title, content }) =>
					renderDropdownItem(
						title,
						<p>{content}</p>,
						title,
						'dropdown__about'
					)
				)}
			</div>
		)
	}
}
Dropdown.propTypes = {
	source: PropTypes.string.isRequired,
	dataToggle: PropTypes.string,
	dataLodgingId: PropTypes.string,
}

export default Dropdown
