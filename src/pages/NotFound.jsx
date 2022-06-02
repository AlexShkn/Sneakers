import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
	return (
		<div className="drawer__empty">
			<div className="drawer__description">
				<span>😔😧</span>
				<h2>Страница не существует :(</h2>
			</div>

			<Link to={'/'}>
				<button className="green-button">
					<img src="img/arrow.svg" alt="back" />
					Вернуться назад
				</button>
			</Link>
		</div>
	)
}

export default NotFound
