import React from 'react'

import '../scss/pages/Home.scss'

import Card from '../components/Card'
import Slider from '../components/Slider'

function Home({ catalog, cartItems, onAddToCart, onAddToFavorite, isLoading, btnRemove }) {
	const [searchValue, setSearchValue] = React.useState('')

	const onChangeSearchInput = e => {
		setSearchValue(e.target.value)
	}

	const renderItems = () => {
		const filteredItems = catalog.filter(item =>
			item.title.toLowerCase().includes(searchValue.toLowerCase()),
		)
		return isLoading
			? [...Array(10)]
			: filteredItems.map(item => (
					<Card
						key={item.id}
						onFavorite={obj => onAddToFavorite(obj)}
						addToCart={obj => onAddToCart(obj)}
						addOn={cartItems.some(obj => Number(obj.id) === Number(item.id))}
						loading={isLoading}
						{...item}
					/>
			  ))
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
				<div className="content__list">{renderItems()}</div>
			</div>
		</>
	)
}

export default Home
