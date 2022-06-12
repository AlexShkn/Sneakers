import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import AppContext from '../context'
import '../scss/components/Header.scss'

import { logo, cart, heart, heartActive, order } from '../assets/img/index'

function Header({ onOpenCart }) {
	const { cartItems, favoriteItems } = React.useContext(AppContext)
	const { totalPrice } = useCart()

	return (
		<header className="header">
			<Link to={'/'}>
				<div className="header__logo">
					<img src={logo} alt="Logotype" />
					<div>
						<h3 className="header__title">React Sneakers</h3>
						<p className="header__subtitle">Магазин лучших кроссовок</p>
					</div>
				</div>
			</Link>

			<nav className="header__nav nav-header">
				<ul className="nav-header__list">
					<li onClick={onOpenCart} className="nav-header__item">
						<div className="nav-header__cart">
							{!!cartItems.length && <span>{cartItems.length}</span>}
							<img src={cart} alt="Корзина" />
						</div>
						<span>{totalPrice} руб.</span>
					</li>
					<Link to="/favorites">
						<li className="nav-header__item">
							{favoriteItems.length ? (
								<img src={heartActive} alt="Закладки" />
							) : (
								<img src={heart} alt="Закладки" />
							)}
						</li>
					</Link>
					<Link to="/orders">
						<li className="nav-header__item">
							<img src={order} alt="Order" />
						</li>
					</Link>
				</ul>
			</nav>
		</header>
	)
}

export default Header
