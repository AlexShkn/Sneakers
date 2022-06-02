import React from 'react'
import axios from 'axios'

import Card from '../components/Card'
import Skeleton from '../components/Skeleton'
import '../scss/pages/Home.scss'
import Slider from '../components/Slider'

import btnRemove from '../assets/img/btn-remove.svg'

function Home({ catalog, setCartItems, setFavoriteItems, baseUrl }) {
	const [searchValue, setSearchValue] = React.useState('')

	const onAddToCart = obj => {
		axios.post(`${baseUrl}/cart`, obj)
		setCartItems(prev => [...prev, obj])
	}
	const onAddToFavorite = obj => {
		axios.post(`${baseUrl}/favorite`, obj)
		setFavoriteItems(prev => [...prev, obj])
	}
	const onChangeSearchInput = e => {
		setSearchValue(e.target.value)
	}

	return (
		<>
			<Slider />

			<div className="content__top">
				<h1 className="content__title main-title">
					{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все крассовки'}
				</h1>
				<div className="content__search">
					{searchValue && (
						<img
							onClick={() => setSearchValue('')}
							className="search-clear"
							src={btnRemove}
							alt="Clear"
						/>
					)}
					<input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
				</div>
			</div>
			<div className="content__body">
				<div className="content__list">
					{catalog.length ? (
						catalog
							.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
							.map(item => (
								<Card
									addToFavorite={obj => onAddToFavorite(obj)}
									addToCart={obj => onAddToCart(obj)}
									key={item.id}
									{...item}
								/>
							))
					) : (
						<Skeleton />
					)}
					{}
				</div>
			</div>
		</>
	)
}

export default Home
