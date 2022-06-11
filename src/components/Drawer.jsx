import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/components/Drawer.scss'

import Empty from './Empty'

import arrowBtn from '../assets/img/arrow.svg'
import emptyCart from '../assets/img/empty-cart.jpg'

function Drawer({ cartItems = [], onClose, onRemoveItem, drawerClose }) {
	return (
		<div className="drawer">
			<div className="drawer__panel">
				<div className="drawer__top">
					<h2 className="drawer__title">Корзина</h2>
					<img onClick={onClose} className="drawer__close" src={drawerClose} alt="close" />
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
												<button>-</button>
												<span>1</span>
												<button>+</button>
											</div>
										</div>
									</div>
									<img
										onClick={() => onRemoveItem(item.id)}
										className="item-drawer__del"
										src={drawerClose}
										alt=""
									/>
								</div>
							))}
						</div>
						<div className="drawers__footer footer-drawers">
							<div className="footer-drawers__price">
								Итого:<span className="dashed"></span>
								<span className="footer-drawers__total-price">21498 руб.</span>
							</div>
							<div className="footer-drawers__tax">
								Налог 5%:<span className="dashed"></span>
								<span className="footer-drawers__total-tax">1074 руб.</span>
							</div>
							<Link to="order">
								<button onClick={onClose} className="footer-drawers__button green-button">
									Оформить заказ
									<img src={arrowBtn} alt="" />
								</button>
							</Link>
						</div>
					</div>
				) : (
					<Empty
						title={'Корзина пуста'}
						image={emptyCart}
						description={'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ'}
						onClose={onClose}
					/>
				)}
			</div>
		</div>
	)
}

export default Drawer
