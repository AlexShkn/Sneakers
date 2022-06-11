import React from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import AppContext from './context'

import Drawer from './components/Drawer'
import Header from './components/Header'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Order from './pages/Order'
import NotFound from './pages/NotFound'

import btnRemove from './assets/img/btn-remove.svg'

function App() {
	const [catalog, setCatalog] = React.useState([])
	const [cartItems, setCartItems] = React.useState([])
	const [favoriteItems, setFavoriteItems] = React.useState([])
	const [cartOpened, setCartOpened] = React.useState(false)
	const [isLoading, setIsLoading] = React.useState(true)

	const baseUrl = 'https://628cd8df3df57e983ed76950.mockapi.io'

	React.useEffect(() => {
		async function fetchData() {
			const itemsResponse = await axios.get(`${baseUrl}/items`)
			const cartResponse = await axios.get(`${baseUrl}/cart`)
			const favoriteResponse = await axios.get(`${baseUrl}/favorite`)

			setIsLoading(false)
			setCatalog(itemsResponse.data)
			setCartItems(cartResponse.data)
			setFavoriteItems(favoriteResponse.data)
		}

		fetchData()
	}, [])

	const onRemoveItem = id => {
		axios.delete(`${baseUrl}/cart/${id}`)
		setCartItems(prev => prev.filter(item => item.id !== id))
	}

	const onAddToCart = async obj => {
		try {
			if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
				axios.delete(`${baseUrl}/cart/${obj.id}`)
				setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
			} else {
				axios.post(`${baseUrl}/cart`, obj)
				setCartItems(prev => [...prev, obj])
			}
		} catch (error) {
			alert('Не удалось добавить в корзину')
		}
	}

	const onAddToFavorite = async obj => {
		try {
			if (favoriteItems.find(favoriteObj => Number(favoriteObj.id) === Number(obj.id))) {
				setTimeout(() => {
					axios.delete(`${baseUrl}/favorite/${obj.id}`)
					setFavoriteItems(prev => prev.filter(item => item.id !== obj.id))
				}, 3000)
			} else {
				const { data } = await axios.post(`${baseUrl}/favorite`, obj)
				setFavoriteItems(prev => [...prev, data])
			}
		} catch (error) {
			alert('Не удалось добавить в закладки')
		}
	}

	const hasAddedItem = id => {
		return cartItems.some(obj => Number(obj.id) === Number(id))
	}

	return (
		<AppContext.Provider
			value={{
				cartItems,
				hasAddedItem,
				favoriteItems,
				setCartItems,
				onAddToFavorite,
				onAddToCart,
				setCartOpened,
				baseUrl,
			}}>
			<div className="wrapper">
				{cartOpened && <Drawer onRemoveItem={onRemoveItem} drawerClose={btnRemove} />}
				<div className="container">
					<Header onOpenCart={() => setCartOpened(true)} />
					<div className="content">
						<Routes>
							<Route
								path="/"
								element={
									<Home
										catalog={catalog}
										setFavoriteItems={setFavoriteItems}
										btnRemove={btnRemove}
										isLoading={isLoading}
									/>
								}
							/>
							<Route path="/favorites" element={<Favorites />} />
							<Route path="/order" element={<Order />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</div>
				</div>
			</div>
		</AppContext.Provider>
	)
}

export default App
