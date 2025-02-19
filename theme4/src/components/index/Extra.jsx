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
function Extra() {
  return (
    <div>
      <div className="extra clearfix">
		<div className="extra_promo extra_promo_1">
			<div className="extra_promo_image" style={{ backgroundImage: `url(${images.extra1})` }}></div>
			<div className="extra_1_content d-flex flex-column align-items-center justify-content-center text-center">
				<div className="extra_1_price">30%<span>off</span></div>
				<div className="extra_1_title">On all shoes</div>
				<div className="extra_1_text">*Integer ut imperdiet erat. Quisque ultricies lectus tellus, eu tristique magna pharetra.</div>
				<div className="button extra_1_button"><a href="checkout.html">check out</a></div>
			</div>
		</div>
		<div className="extra_promo extra_promo_2">
			<div className="extra_promo_image" style={{ backgroundImage: `url(${images.extra2})` }}></div>
			<div className="extra_2_content d-flex flex-column align-items-center justify-content-center text-center">
				<div className="extra_2_title">
					<div className="extra_2_center">&</div>
					<div className="extra_2_top">Mix</div>
					<div className="extra_2_bottom">Match</div>
				</div>
				<div className="extra_2_text">*Integer ut imperdiet erat. Quisque ultricies lectus tellus, eu tristique magna pharetra.</div>
				<div className="button extra_2_button"><a href="checkout.html">check out</a></div>
			</div>
		</div>
	</div>
    </div>
  )
}

export default Extra
