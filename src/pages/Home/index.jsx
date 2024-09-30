import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'

function Home() {
	return (
		<div>
			<Banner
				title='Chez vous, partout et ailleurs'
				backgroundImageClass='banner-home'
			/>
			<Gallery />
		</div>
	)
}
export default Home
