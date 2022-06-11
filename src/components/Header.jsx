import React from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context'
import '../scss/components/Header.scss'

import logo from '../assets/img/Header/logo.png'
import cart from '../assets/img/Header/cart.svg'
import heart from '../assets/img/Header/heart.svg'
import heartActive from '../assets/img/Header/header-heart-active.svg'
import order from '../assets/img/Header/order.svg'

function Header({ onOpenCart }) {
	const { cartItems, favoriteItems } = React.useContext(AppContext)
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
						<span>1000 руб.</span>
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
					<Link to="/order">
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
