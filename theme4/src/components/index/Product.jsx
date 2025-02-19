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
function Product() {
  return (
    <div>
      <div className="arrivals">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="section_title_container text-center">
						<div className="section_subtitle">only the best</div>
						<div className="section_title">new arrivals</div>
					</div>
				</div>
			</div>
			<div className="row products_container">
				<div className="col-lg-4 product_col">
					<div className="product">
						<div className="product_image">
						<img src={images.product1} alt="" />
						</div>
						<div className="rating rating_4">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
						</div>
						<div className="product_content clearfix">
							<div className="product_info">
								<div className="product_name"><a href="product.html">Woman's Long Dress</a></div>
								<div className="product_price">$45.00</div>
							</div>
							<div className="product_options">
								<div className="product_buy product_option"><img src={images.shoppingBagWhite} alt="" /></div>
								<div className="product_fav product_option">+</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 product_col">
					<div className="product">
						<div className="product_image">
						<img src={images.product2} alt="" />
						</div>
						<div className="rating rating_4">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
						</div>
						<div className="product_content clearfix">
							<div className="product_info">
								<div className="product_name"><a href="product.html">2 Piece Swimsuit</a></div>
								<div className="product_price">$35.00</div>
							</div>
							<div className="product_options">
								<div className="product_buy product_option"><img src={images.shoppingBagWhite} alt="" /></div>
								<div className="product_fav product_option">+</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 product_col">
					<div className="product">
						<div className="product_image">
						<img src={images.product3} alt="" />
						</div>
						<div className="rating rating_4">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
						</div>
						<div className="product_content clearfix">
							<div className="product_info">
								<div className="product_name"><a href="product.html">Man Blue Jacket</a></div>
								<div className="product_price">$145.00</div>
							</div>
							<div className="product_options">
								<div className="product_buy product_option"><img src={images.shoppingBagWhite} alt="" /></div>
								<div className="product_fav product_option">+</div>
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

export default Product
