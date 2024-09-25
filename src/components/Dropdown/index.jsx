//partager le contexte
import '../../scss/base/base.scss'
import './style.scss'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useFetch } from '../../hooks'

function Dropdown({ source, dataToggle }) {
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
			setOpenIndices([...openIndices, index])
		} else {
			setOpenIndices(openIndices.filter((i) => i !== index))
		}
	}

	// Render dropdown items
	const renderDropdownItems = () => {
		if (!data || data.length === 0) {
			return <p>Aucune donnée à afficher</p>
		}

		if (source === '/data/about.json') {
			return data.map((item, index) => (
				<div key={index} className='dropdown__item'>
					<details
						open={openIndices.includes(index)}
						onToggle={(e) => handleToggle(index, e.target.open)}
					>
						<summary className='dropdown__title'>
							<p>{item.title}</p>
							<FontAwesomeIcon
								icon={
									openIndices.includes(index)
										? faChevronUp
										: faChevronDown
								}
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

		if (dataToggle === 'equipments') {
			return data.map((item, index) => (
				<div key={index} className='dropdown__item'>
					<details
						open={openIndices.includes(index)}
						onToggle={(e) => handleToggle(index, e.target.open)}
					>
						<summary className='dropdown__title'>
							<p>{`Équipement ${index + 1}`}</p>
							<FontAwesomeIcon
								icon={
									openIndices.includes(index)
										? faChevronUp
										: faChevronDown
								}
								className='dropdown__icon'
							/>
						</summary>
						<div className='dropdown__content'>
							<p>{item}</p>
						</div>
					</details>
				</div>
			))
		}

		if (dataToggle === 'description') {
			return (
				<div className='dropdown__item'>
					<details open>
						<summary className='dropdown__title'>
							<p>Description</p>
							<FontAwesomeIcon
								icon={faChevronDown}
								className='dropdown__icon'
							/>
						</summary>
						<div className='dropdown__content'>
							<p>{data}</p>
						</div>
					</details>
				</div>
			)
		}
	}

	return <div className='dropdown'>{renderDropdownItems()}</div>
}

Dropdown.propTypes = {
	source: PropTypes.string.isRequired,
	dataToggle: PropTypes.string,
}

export default Dropdown
