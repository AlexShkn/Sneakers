import React from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import AppContext from './context'

import Drawer from './components/Drawer'
import Header from './components/Header'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Orders from './pages/Orders'
import NotFound from './pages/NotFound'

import btnRemove from './assets/img/btn-remove.svg'

function App() {
	const [catalog, setCatalog] = React.useState([])
	const [cartItems, setCartItems] = React.useState([])
	const [favoriteItems, setFavoriteItems] = React.useState([])
	const [cartOpened, setCartOpened] = React.useState(false)
	const [isLoading, setIsLoading] = React.useState(true)
	const [isOrderComplete, setIsOrdersComplete] = React.useState(false)

	const baseUrl = 'https://628cd8df3df57e983ed76950.mockapi.io'

	React.useEffect(() => {
		async function fetchData() {
			try {
				const itemsResponse = await axios.get(`${baseUrl}/items`)
				const cartResponse = await axios.get(`${baseUrl}/cart`)
				const favoriteResponse = await axios.get(`${baseUrl}/favorite`)

				setIsLoading(false)
				setCatalog(itemsResponse.data)
				setCartItems(cartResponse.data)
				setFavoriteItems(favoriteResponse.data)
			} catch (error) {
				alert('Не удалось сделать запрос данных')
			}
		}

		fetchData()
	}, [])

	const onRemoveItem = id => {
		try {
			axios.delete(`${baseUrl}/cart/${id}`)
			setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)))
		} catch (error) {
			alert('Не удалось удалить')
		}
	}

	const onAddToCart = async obj => {
		try {
			const findItem = cartItems.find(item => Number(item.parentId) === Number(obj.id))

			if (findItem) {
				setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)))
				await axios.delete(`${baseUrl}/cart/${findItem.id}`)
			} else {
				setCartItems(prev => [...prev, obj])
				const { data } = await axios.post(`${baseUrl}/cart`, obj)
				setCartItems(prev =>
					prev.map(item => {
						if (item.parentId === data.parentId) {
							return {
								...item,
								id: data.id,
							}
						}
						return item
					}),
				)
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
					setFavoriteItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
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
		return cartItems.some(obj => Number(obj.parentId) === Number(id))
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
				isOrderComplete,
				setIsOrdersComplete,
				baseUrl,
			}}>
			<div className="wrapper">
				<Drawer onRemoveItem={onRemoveItem} drawerClose={btnRemove} opened={cartOpened} />

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
							<Route path="/orders" element={<Orders />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</div>
				</div>
			</div>
		</AppContext.Provider>
	)
}

export default App
