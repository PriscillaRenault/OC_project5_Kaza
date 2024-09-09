import PropTypes from "prop-types";
import "../scss/components/GalleryItem.scss";

function GalleryItem({ id, cover, title }) {
	return (
		<li key={id} className='gallery__item'>
			<img
				src={cover}
				alt={`${title} cover`}
				className='gallery__item--cover'
			/>
			<h2 className='gallery__item--title'>{title}</h2>
		</li>
	);
}

GalleryItem.propTypes = {
	id: PropTypes.string.isRequired,
	cover: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
export default GalleryItem;
