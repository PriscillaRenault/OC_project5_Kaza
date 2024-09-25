import '../../scss/base/base.scss'
import './style.scss'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useFetch } from '../../hooks'

function Dropdown({ source }) {
	const [openIndices, setOpenIndices] = useState([]) // open index state
	const { data, isLoading, error } = useFetch(source)
	if (isLoading) {
		return <span>Chargement en cours...</span>
	}
	if (error) {
		return <span>Problème lors du chargement des données</span>
	}

	const handleToggle = (index, isOpen) => {
		if (isOpen) {
			// If the element is open, add its index to 'openIndices'
			setOpenIndices([...openIndices, index])
		} else {
			// If the element is close, remove its index to 'openIndices'
			setOpenIndices(openIndices.filter((i) => i !== index))
		}
	}

	// Render dropdown items
	const renderDropdownItems = () => {
		if (!data || data.length === 0) {
			return <p>Aucune donnée à afficher</p>
		}

		return data.map((item, index) => (
			<div key={index} className='dropdown__item'>
				<details
					open={openIndices.includes(index)} // Ouvre uniquement si l'index est dans 'openIndices'
					onToggle={(e) => handleToggle(index, e.target.open)} //  onToggle event open/close dropdown item
				>
					<summary className='dropdown__title'>
						<p>{item.title}</p>
						<FontAwesomeIcon
							icon={
								openIndices.includes(index)
									? faChevronUp
									: faChevronDown
							} // Change icon with open state
							className='dropdown__icon'
						/>
					</summary>
					<div className='dropdown__content'>
						<p>{item.content}</p>
					</div>
				</details>
			</div>
		))
	}

	return <div className='dropdown'>{renderDropdownItems()}</div>
}

Dropdown.propTypes = {
	source: PropTypes.string.isRequired,
}

export default Dropdown
