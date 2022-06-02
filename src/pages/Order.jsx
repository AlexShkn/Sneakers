import React from 'react'
import { Link } from 'react-router-dom'

import arrowBtn from '../assets/img/arrow.svg'

function Order() {
	return (
		<div className="drawer__empty">
			<div className="drawer__description">
				<span>😔</span>
				<h2>У вас нет заказов</h2>
				<p>Вы нищеброд? Оформите хотя бы один заказ.</p>
			</div>

			<Link to={'/'}>
				<button className="green-button">
					<img src={arrowBtn} alt="back" />
					Вернуться назад
				</button>
			</Link>
		</div>
	)
}

export default Order
