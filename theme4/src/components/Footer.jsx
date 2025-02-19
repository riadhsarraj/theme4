import React from 'react'
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
function Footer() {
  return (
    <div>
      	<footer className="footer">
		<div className="container">
			<div className="row">
				<div className="col text-center">
					<div className="footer_logo"><a href="#">Wish</a></div>
					<nav className="footer_nav">
						<ul>
							<li><a href="index.html">home</a></li>
							<li><a href="categories.html">clothes</a></li>
							<li><a href="categories.html">accessories</a></li>
							<li><a href="categories.html">lingerie</a></li>
							<li><a href="contact.html">contact</a></li>
						</ul>
					</nav>
					<div className="footer_social">
						<ul>
							<li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
							<li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
							<li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
							<li><a href="#"><i className="fa fa-reddit-alien" aria-hidden="true"></i></a></li>
							<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
						</ul>
					</div>
					<div className="copyright">
                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    </div>
				</div>
			</div>
		</div>
	</footer>
    </div>
  )
}

export default Footer
