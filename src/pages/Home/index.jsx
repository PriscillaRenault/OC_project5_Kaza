import ImgBannerHome from '../../assets/img_banner_home.png'
import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'

function Home() {
	return (
		<div>
			<Banner
				title='Chez vous, partout et ailleurs'
				backgroundImage={ImgBannerHome}
			/>
			<Gallery />
		</div>
	)
}
export default Home
