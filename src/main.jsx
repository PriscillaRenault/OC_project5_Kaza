import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index'
import Lodging from './pages/Lodging/index'
import About from './pages/About/index'
import Error from './pages/Error/index'
import Header from './components/Header/index'
import Footer from './components/Footer/index'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/Lodging/:idLodging' element={<Lodging />} />
				<Route path='/about' element={<About />} />
				<Route path='*' element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	</StrictMode>
)
