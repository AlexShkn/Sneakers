import React from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context'

import Empty from '../components/Empty'
import Card from '../components/Card'

import arrowBack from '../assets/img/arrow-back.svg'

function Favorites() {
	const { favoriteItems, onAddToFavorite } = React.useContext(AppContext)
	return (
		<>
			{favoriteItems.length ? (
				<div>
					<div className="content__top">
						<Link to={'/'}>
							<div className="arrow-back">
								<img src={arrowBack} alt="arrow" />
							</div>
						</Link>
						<h1 className="content__title main-title">Мои закладки</h1>
					</div>
					<div className="content__body">
						<div className="content__list">
							{favoriteItems.map(item => (
								<Card key={item.id} {...item} onFavorite={onAddToFavorite} favorited={true} />
							))}
						</div>
					</div>
				</div>
			) : (
				<Empty
					smile={'😧'}
					title={'Закладок нет :('}
					description={'Вы ничего не добавляли в закладки'}
				/>
			)}
		</>
	)
}

export default Favorites
