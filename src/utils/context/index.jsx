import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

// Créer le contexte
export const IdLodgingContext = createContext()

export const IdLodgingProvider = ({ children }) => {
	const [lodgingId, setLodgingId] = useState(null)

	return (
		<IdLodgingContext.Provider value={{ lodgingId, setLodgingId }}>
			{children}
		</IdLodgingContext.Provider>
	)
}

IdLodgingProvider.propTypes = {
	children: PropTypes.node.isRequired,
}
