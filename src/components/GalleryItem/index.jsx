import '../../scss/base/base.scss'
import './style.scss'
import PropTypes from 'prop-types'

/**
 * Create item in gallery
 * @param {string} id
 * @param {string} cover
 * @param {string} title
 * @param {function} onClick access lodging page
 * @returns
 */

function GalleryItem({ id, cover, title, onClick }) {
	return (
		<li
			key={id}
			className='gallery__item'
			onClick={onClick}
			data-cover={cover}
		>
			<div
				className='gallery__item--cover'
				style={{
					backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0, 0, 0, 0.6) 100%), 
					url(${cover})`,
				}}
			></div>
			<h2 className='gallery__item--title'>{title}</h2>
		</li>
	)
}

GalleryItem.propTypes = {
	id: PropTypes.string.isRequired,
	cover: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
}
export default GalleryItem
