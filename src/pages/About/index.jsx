import ImgBannerAbout from '../../assets/img_banner_about.png'
import Banner from '../../components/Banner'
import Dropdown from '../../components/Dropdown'
function about() {
	return (
		<div>
			<Banner title='' backgroundImage={ImgBannerAbout} />
			<Dropdown source='/data/about.json' />
		</div>
	)
}
export default about
