import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Empty from '../components/Empty'
import Card from '../components/Card'

import arrowBack from '../assets/img/arrow-back.svg'

function Orders() {
	const [orders, setOrders] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(true)

	React.useEffect(() => {
		;(async () => {
			try {
				const { data } = await axios.get('https://628cd8df3df57e983ed76950.mockapi.io/orders')
				setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
				setIsLoading(false)
			} catch (error) {
				alert('Ошибка при запросе заказов')
				console.error(error)
			}
		})()
	}, [])

	return (
		<>
			{orders.length ? (
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
							{(isLoading ? [...Array(8)] : orders).map((item, index) => (
								<Card key={index} loading={isLoading} {...item} />
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

export default Orders
