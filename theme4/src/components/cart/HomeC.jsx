import React from 'react'
import images from "../../js/images";
import "../../css/bootstrap.css"
import "../../css/cart_responsive.css"
import "../../css/cart.css"
import "../../css/categories_responsive.css"
import "../../css/categories.css"
import "../../css/checkout_responsive.css"
import "../../css/checkout.css"
import "../../css/contact_responsive.css"
import "../../css/contact.css"
import "../../css/main_styles.css"
import "../../css/product_responsive.css"
import "../../css/product.css"
import "../../css/responsive.css"
function HomeC() {
  return (
    <div>
      <div className="home">
		<div className="home_background parallax-window" data-parallax="scroll"  data-speed="0.8"><img src={images.cart} alt="" /></div>
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="home_container">
						<div className="home_content">
							<div className="home_title">Shopping Cart</div>
							<div className="breadcrumbs">
								<ul>
									<li><a href="index.html">Home</a></li>
									<li>Shopping Cart</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}

export default HomeC
