import React from 'react'
import '../scss/components/Card.scss'

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
					<img
						width={22}
						height={22}
						src={isFavorite ? '/img/heart-active.svg' : '/img/heart-none.svg'}
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
					src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
					alt="plus"
				/>
			</div>
		</div>
	)
}

export default Card
