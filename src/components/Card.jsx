import React from 'react'

import '../scss/components/Card.scss'

import btnChecked from '../assets/img/Card/btn-checked.svg'
import btnPlus from '../assets/img/Card/btn-plus.svg'
import heartActive from '../assets/img/Card/heart-active.svg'
import heartNone from '../assets/img/Card/heart-none.svg'

function Card({ id, imageUrl, title, price, addToFavorite, addToCart }) {
	const [isAdded, setIsAdded] = React.useState(false)
	const [isFavorite, setIsFavorite] = React.useState(false)

	const onClickPlus = () => {
		setIsAdded(!isAdded)
		!isAdded && addToCart({ id, imageUrl, title, price })
	}

	const onClickFavorite = () => {
		addToFavorite({ id, imageUrl, title, price })
		setIsFavorite(!isFavorite)
	}

	return (
		<div className="content__card card">
			<div className="card__image">
				<button onClick={onClickFavorite} className="card__favorite">
					<img width={22} height={22} src={isFavorite ? heartActive : heartNone} alt="unliked" />
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
					src={isAdded ? btnChecked : btnPlus}
					alt="plus"
				/>
			</div>
		</div>
	)
}

export default Card
