import PropTypes from "prop-types";

function DropdownItem({ children }) {
	return <div>{children}</div>;
}

DropdownItem.propTypes = {
	children: PropTypes.node.isRequired,
};

export default DropdownItem;
