import "../../scss/base/base.scss";
import "./Banner.scss";

function Banner({ title, backgroundImage }) {
	return (
		<div
			className='banner'
			style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
				url(${backgroundImage}) `,
			}}
		>
			<h1 className='banner__title'>{title}</h1>
		</div>
	);
}

import PropTypes from "prop-types";
Banner.propTypes = {
	title: PropTypes.string.isRequired,
	backgroundImage: PropTypes.string.isRequired,
};

export default Banner;
