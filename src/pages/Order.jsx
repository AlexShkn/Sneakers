import React from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context'
import Empty from '../components/Empty'
import Card from '../components/Card'

import arrowBack from '../assets/img/arrow-back.svg'

function Order() {
	const { cartItems } = React.useContext(AppContext)
	return (
		<>
			{cartItems.length ? (
				<div>
					<div className="content__top">
						<Link to={'/'}>
							<div className="arrow-back">
								<img src={arrowBack} alt="arrow" />
							</div>
						</Link>
						<h1 className="content__title main-title">Мои покупки</h1>
					</div>
					<div className="content__body">
						<div className="content__list">
							{cartItems.map(item => (
								<Card key={item.id} {...item} />
							))}
						</div>
					</div>
				</div>
			) : (
				<Empty
					smile={'😔'}
					title={'У вас нет заказов'}
					description={'Оформите хотя бы один заказ.'}
				/>
			)}
		</>
	)
}

export default Order
