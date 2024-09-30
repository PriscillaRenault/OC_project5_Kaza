import Banner from '../../components/Banner'
import Dropdown from '../../components/Dropdown'
function about() {
	return (
		<div>
			<Banner title='' backgroundImageClass='banner-about' />
			<Dropdown source='/data/about.json' />
		</div>
	)
}
export default about
