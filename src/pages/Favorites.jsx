import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

function Favorites({ favoriteItems }) {
	return (
		<>
			{favoriteItems.length ? (
				<div>
					<div className="content__top">
						<Link to={'/'}>
							<div className="arrow-back">
								<img src="img/arrow-back.svg" alt="" />
							</div>
						</Link>
						<h1 className="content__title main-title">Мои закладки</h1>
					</div>
					<div className="content__body">
						<div className="content__list">
							{favoriteItems.map(item => (
								<Card key={item.id} {...item} />
							))}
						</div>
					</div>
				</div>
			) : (
				<div className="drawer__empty">
					<div className="drawer__description">
						<span>😧</span>
						<h2>Закладок нет :(</h2>
						<p>Вы ничего не добавляли в закладки</p>
					</div>

					<Link to={'/'}>
						<button className="green-button">
							<img src="img/arrow.svg" alt="back" />
							Вернуться назад
						</button>
					</Link>
				</div>
			)}
		</>
	)
}

export default Favorites
