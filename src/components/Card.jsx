import React from 'react'
import AppContext from '../context'
import Skeleton from './Skeleton'

import '../scss/components/Card.scss'

import btnChecked from '../assets/img/Card/btn-checked.svg'
import btnPlus from '../assets/img/Card/btn-plus.svg'
import heartActive from '../assets/img/Card/heart-active.svg'
import heartNone from '../assets/img/Card/heart-none.svg'

function Card({ id, imageUrl, title, price, onFavorite, addToCart, favorited, loading = false }) {
	const { hasAddedItem } = React.useContext(AppContext)
	const [isFavorite, setIsFavorite] = React.useState(favorited)

	const onClickPlus = () => {
		addToCart({ id, imageUrl, title, price })
	}

	const onClickFavorite = () => {
		onFavorite({ id, imageUrl, title, price })
		setIsFavorite(!isFavorite)
	}

	return (
		<div className="content__card card">
			{loading ? (
				<Skeleton />
			) : (
				<>
					<div className="card__image">
						<button onClick={onClickFavorite} className="card__favorite">
							<img
								width={22}
								height={22}
								src={isFavorite ? heartActive : heartNone}
								alt="unliked"
							/>
						</button>
						<img width={133} height={112} src={imageUrl} alt="sneakers" />
					</div>
					<div className="card__description">{title}</div>
					<div className="card__bottom">
						<div className="card__price">
							Цена:<span>{price} руб.</span>
						</div>
						<img
							onClick={onClickPlus}
							className="card__plus"
							src={hasAddedItem(id) ? btnChecked : btnPlus}
							alt="plus"
						/>
					</div>
				</>
			)}
		</div>
	)
}

export default Card
