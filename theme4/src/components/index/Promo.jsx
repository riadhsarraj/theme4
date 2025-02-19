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
function Promo() {
  return (
    <div>
      <div className="promo">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="section_title_container text-center">
						<div className="section_subtitle">only the best</div>
						<div className="section_title">promo prices</div>
					</div>
				</div>
			</div>
			<div className="row promo_container">
				<div className="col-lg-4 promo_col">
					<div className="promo_item">
						<div className="promo_image">
						<img src={images.promo1} alt="" />
							<div className="promo_content promo_content_1">
								<div className="promo_title">-30% off</div>
								<div className="promo_subtitle">on all bags</div>
							</div>
						</div>
						<div className="promo_link"><a href="#">Shop Now</a></div>
					</div>
				</div>
				<div className="col-lg-4 promo_col">
					<div className="promo_item">
						<div className="promo_image">
						<img src={images.promo2} alt="" />
							<div className="promo_content promo_content_2">
								<div className="promo_title">-30% off</div>
								<div className="promo_subtitle">coats & jackets</div>
							</div>
						</div>
						<div className="promo_link"><a href="#">Shop Now</a></div>
					</div>
				</div>
				<div className="col-lg-4 promo_col">
					<div className="promo_item">
						<div className="promo_image">
						<img src={images.promo3} alt="" />
							<div className="promo_content promo_content_3">
								<div className="promo_title">-25% off</div>
								<div className="promo_subtitle">on Sandals</div>
							</div>
						</div>
						<div className="promo_link"><a href="#">Shop Now</a></div>
					</div>
				</div>

			</div>
		</div>
	</div>
    </div>
  )
}

export default Promo
