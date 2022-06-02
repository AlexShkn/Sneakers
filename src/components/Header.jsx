import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/components/Header.scss'

function Header({ onOpenCart, cartItems, favoriteItems }) {
	return (
		<header className="header">
			<Link to={'/'}>
				<div className="header__logo">
					<img src="img/logo.png" alt="Logotype" />
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
							{!!cartItems && <span>{cartItems}</span>}
							<img src="img/cart.svg" alt="Корзина" />
						</div>
						<span>1000 руб.</span>
					</li>
					<Link to="/favorites">
						<li className="nav-header__item">
							{favoriteItems.length ? (
								<img src="img/header-heart-active.svg" alt="Закладки" />
							) : (
								<img src="img/heart.svg" alt="Закладки" />
							)}
						</li>{' '}
					</Link>

					<li className="nav-header__item">
						<img src="img/user.svg" alt="Пользователь" />
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
