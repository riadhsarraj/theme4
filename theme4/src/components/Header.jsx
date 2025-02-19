import React from 'react'
import images from "../js/images";
import "../css/bootstrap.css"
import "../css/cart_responsive.css"
import "../css/cart.css"
import "../css/categories_responsive.css"
import "../css/categories.css"
import "../css/checkout_responsive.css"
import "../css/checkout.css"
import "../css/contact_responsive.css"
import "../css/contact.css"
import "../css/main_styles.css"
import "../css/product_responsive.css"
import "../css/product.css"
import "../css/responsive.css"
function Header() {
  return (
    <div>
      <header className="header">
		<div className="header_inner d-flex flex-row align-items-center justify-content-start">
			<div className="logo"><a href="#">Wish</a></div>
			<nav className="main_nav">
				<ul>
					<li><a href="#">home</a></li>
					<li><a href="categories.html">clothes</a></li>
					<li><a href="categories.html">accessories</a></li>
					<li><a href="categories.html">lingerie</a></li>
					<li><a href="contact.html">contact</a></li>
				</ul>
			</nav>
			<div className="header_content ml-auto">
				<div className="search header_search">
					<form action="#">
						<input type="search" className="search_input" required="required"/>
						<button type="submit" id="search_button" className="search_button"><img src={images.magnifyingGlass} alt="" /></button>
					</form>
				</div>
				<div className="shopping">
					<a href="#">
						<div className="cart">
						<img src={images.shoppingBag} alt="" style={{ width: "20px", height: "20px" }} />
							<div className="cart_num_container">
								<div className="cart_num_inner">
									<div className="cart_num">1</div>
								</div>
							</div>
						</div>
					</a>
					<a href="#">
						<div className="star">
						<img src={images.star} alt="" />
							<div className="star_num_container">
								<div className="star_num_inner">
									<div className="star_num">0</div>
								</div>
							</div>
						</div>
					</a>
					<a href="#">
						<div className="avatar">
						<img src={images.avatar} alt="" />
						</div>
					</a>
				</div>
			</div>

			<div className="burger_container d-flex flex-column align-items-center justify-content-around menu_mm"><div></div><div></div><div></div></div>
		</div>
	</header>
	<div className="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
		<div className="menu_close_container"><div className="menu_close"><div></div><div></div></div></div>
		<div className="logo menu_mm"><a href="#">Wish</a></div>
		<div className="search">
			<form action="#">
				<input type="search" className="search_input menu_mm" required="required"/>
				<button type="submit" id="search_button_menu" className="search_button menu_mm"><img src={images.magnifyingGlass} alt="" /></button>
			</form>
		</div>
		<nav className="menu_nav">
			<ul className="menu_mm">
				<li className="menu_mm"><a href="#">home</a></li>
				<li className="menu_mm"><a href="#">clothes</a></li>
				<li className="menu_mm"><a href="#">accessories</a></li>
				<li className="menu_mm"><a href="#">lingerie</a></li>
				<li className="menu_mm"><a href="#">contact</a></li>
			</ul>
		</nav>
	</div>
    </div>
  )
}

export default Header
