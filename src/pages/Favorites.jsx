import React from 'react'
import { Link } from 'react-router-dom'

import Empty from '../components/Empty'
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
				<Empty
					title={'Закладок нет :('}
					description={'Вы ничего не добавляли в закладки'}
					smile={'😧'}
				/>
			)}
		</>
	)
}

export default Favorites
