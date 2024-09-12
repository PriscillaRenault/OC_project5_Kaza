import PropTypes from "prop-types";
import "../scss/components/GalleryItem.scss";
import HousingDetails from "./HousingDetails";

function GalleryItem({ id, cover, title }) {
	return (
		<li key={id} className='gallery__item' onClick={HousingDetails}>
			<div
				className='gallery__item--cover'
				style={{
					backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0, 0, 0, 0.6) 100%), 
					url(${cover})`,
				}}
			></div>
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
