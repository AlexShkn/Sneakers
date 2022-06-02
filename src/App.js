import React from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'

import Drawer from './components/Drawer'
import Header from './components/Header'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Order from './pages/Order'
import NotFound from './pages/NotFound'
// import Slider from './components/Slider'

function App() {
	const [catalog, setCatalog] = React.useState([])
	const [cartItems, setCartItems] = React.useState([])
	const [favoriteItems, setFavoriteItems] = React.useState([])
	const [cartOpened, setCartOpened] = React.useState(false)
	const baseUrl = 'https://628cd8df3df57e983ed76950.mockapi.io'

	React.useEffect(() => {
		axios.get(`${baseUrl}/items`).then(res => {
			setCatalog(res.data)
		})
		axios.get(`${baseUrl}/cart`).then(res => {
			setCartItems(res.data)
		})
		axios.get(`${baseUrl}/favorite`).then(res => {
			setFavoriteItems(res.data)
		})
	}, [])

	const onRemoveItem = id => {
		axios.delete(`${baseUrl}/cart/${id}`)
		setCartItems(prev => prev.filter(item => item.id !== id))
	}

	return (
		<div className="wrapper">
			{cartOpened && (
				<Drawer
					cartItems={cartItems}
					onClose={() => setCartOpened(false)}
					onRemoveItem={onRemoveItem}
				/>
			)}
			<div className="container">
				<Header
					cartItems={cartItems.length}
					favoriteItems={favoriteItems}
					onOpenCart={() => setCartOpened(true)}
				/>
				{/* <Slider /> */}
				<div className="content">
					<Routes>
						<Route
							path="/"
							element={
								<Home
									setCartItems={setCartItems}
									favoriteItems={favoriteItems}
									setFavoriteItems={setFavoriteItems}
									catalog={catalog}
									baseUrl={baseUrl}
								/>
							}
						/>
						<Route path="favorites" element={<Favorites favoriteItems={favoriteItems} />} />
						<Route path="order" element={<Order />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</div>
	)
}

export default App
