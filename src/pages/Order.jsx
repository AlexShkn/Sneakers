import React from 'react'
import Empty from '../components/Empty'

function Order() {
	return (
		<Empty
			smile={'😔'}
			title={'У вас нет заказов'}
			description={'Вы нищеброд? Оформите хотя бы один заказ.'}
		/>
	)
}

export default Order
