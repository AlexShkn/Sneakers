import React from 'react'
import axios from 'axios'
import AppContext from '../context'
import { useCart } from '../hooks/useCart'
import '../scss/components/Drawer.scss'

import Empty from './Empty'

import arrowBtn from '../assets/img/arrow.svg'
import emptyCart from '../assets/img/empty-cart.jpg'
import completeOrder from '../assets/img/complete-order.jpg'

const delay = () => new Promise(resolve => setTimeout(resolve, 1000))

function Drawer({ onRemoveItem, drawerClose }) {
	const { setCartOpened, baseUrl } = React.useContext(AppContext)
	const { cartItems = [], setCartItems, totalPrice } = useCart()

	const [isOrderComplete, setIOrdersComplete] = React.useState(false)
	const [orderId, setOrderId] = React.useState(null)
	const [isLoading, setIsLoading] = React.useState(false)

	const onClickOrderComplete = async () => {
		try {
			setIsLoading(true)
			const { data } = await axios.post(`${baseUrl}/orders`, { items: cartItems })
			setOrderId(data.id)
			setIOrdersComplete(true)
			setCartItems([])
			for (let i = 0; i < cartItems.length; i++) {
				const item = cartItems[i]
				await axios.delete(`${baseUrl}/cart/` + item.id)
				await delay()
			}
		} catch (error) {
			alert('Не удалось создать заказ :(')
		}
		setIsLoading(false)
	}

	return (
		<div className="drawer">
			<div className="drawer__panel">
				<div className="drawer__top">
					<h2 className="drawer__title">Корзина</h2>
					<img
						onClick={() => setCartOpened(false)}
						className="drawer__close"
						src={drawerClose}
						alt="close"
					/>
				</div>
				{cartItems.length ? (
					<div className="drawer__content">
						<div className="drawer__items">
							{cartItems.map(item => (
								<div key={item.id} className="item-drawer">
									<div className="item-drawer__image">
										<img width={70} height={70} src={item.imageUrl} alt="" />
									</div>
									<div className="item-drawer__description">
										<div className="item-drawer__name">{item.title}</div>
										<div className="item-drawer__total">
											<div className="item-drawer__price">{item.price} руб.</div>
											<div className="item-drawer__count">
												<button></button>
												<span>1</span>
												<button></button>
											</div>
										</div>
									</div>
									<img
										onClick={() => onRemoveItem(item.id)}
										className="item-drawer__del"
										src={drawerClose}
										alt="remove"
									/>
								</div>
							))}
						</div>
						<div className="drawers__footer footer-drawers">
							<div className="footer-drawers__price">
								Итого:<span className="dashed"></span>
								<span className="footer-drawers__total-price">{totalPrice} руб.</span>
							</div>
							<div className="footer-drawers__tax">
								Налог 5%:<span className="dashed"></span>
								<span className="footer-drawers__total-tax">
									{Math.round(totalPrice * 0.05)} руб.
								</span>
							</div>
							<button
								disabled={isLoading}
								onClick={onClickOrderComplete}
								className="footer-drawers__button green-button">
								Оформить заказ
								<img src={arrowBtn} alt="pay" />
							</button>
						</div>
					</div>
				) : (
					<Empty
						title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пуста'}
						image={isOrderComplete ? completeOrder : emptyCart}
						description={
							isOrderComplete
								? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
								: 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ'
						}
					/>
				)}
			</div>
		</div>
	)
}

export default Drawer
