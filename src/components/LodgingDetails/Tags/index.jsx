import PropTypes from 'prop-types'
import './style.scss'

function Tags({ dataTags }) {
	const tags = dataTags || []

	return (
		<div className='tag'>
			{tags.map((tag, index) => (
				<div key={index} className='tag__items'>
					{tag}
				</div>
			))}
		</div>
	)
}

Tags.propTypes = {
	dataTags: PropTypes.array.isRequired,
}

export default Tags
