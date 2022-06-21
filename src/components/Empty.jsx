import React from 'react'
import { Link } from 'react-router-dom'

import AppContext from '../context'

import arrowBtn from '../assets/img/arrow.svg'

const Empty = ({ smile, title, image, description }) => {
	const { setCartOpened, isOrderComplete, setIsOrdersComplete } = React.useContext(AppContext)

	const stateSwitching = () => {
		setCartOpened(false)
		if (isOrderComplete) setIsOrdersComplete(false)
	}

	return (
		<div className="empty">
			{smile ? <span>{smile}</span> : <img width={120} height={120} src={image} alt="Empty" />}
			<h2>{title}</h2>
			<p>{description}</p>
			<Link to={'/'}>
				<button onClick={() => stateSwitching()} className="green-button">
					Вернуться назад
					<img src={arrowBtn} alt="back" />
				</button>
			</Link>
		</div>
	)
}

export default Empty
