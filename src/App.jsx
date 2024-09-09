import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import ImgHome from "./assets/img_home.png";

function App() {
	return (
		<>
			<Header />
			<Banner
				title='Chez vous, partout ailleurs'
				backgroundImage={ImgHome}
			/>
			<Gallery />
			<Footer />
		</>
	);
}

export default App;
