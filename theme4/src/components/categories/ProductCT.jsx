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
function ProductCT() {
  return (
    <div>
      <div className="products">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="sidebar_left clearfix">
						<div className="sidebar_section">
							<div className="sidebar_title">Categories</div>
							<div className="sidebar_section_content">
								<ul>
									<li><a href="#">Wedding Dresses (23)</a></li>
									<li><a href="#">Swimsuits (11)</a></li>
									<li><a href="#">Jeans (61)</a></li>
									<li><a href="#">Tops (34)</a></li>
								</ul>
							</div>
						</div>
						<div className="sidebar_section">
							<div className="sidebar_title">Color</div>
							<div className="sidebar_section_content sidebar_color_content mCustomScrollbar" data-mcs-theme="minimal-dark">
								<ul>
								<li><a href="#"><span style={{ background: "#a3ccff" }}></span>Blue (23)</a></li>
								<li><a href="#"><span style={{ background: "#937c6f" }}></span>Brown (11)</a></li>
								<li><a href="#"><span style={{ background: "#000000" }}></span>Black (61)</a></li>
								<li><a href="#"><span style={{ background: "#ff5c00" }}></span>Orange (34)</a></li>
								<li><a href="#"><span style={{ background: "#a3ffb2" }}></span>Green (17)</a></li>
								<li><a href="#"><span style={{ background: "#f52832" }}></span>Red (22)</a></li>
								<li><a href="#"><span style={{ background: "#fdabf4" }}></span>Pink (7)</a></li>
								<li><a href="#"><span style={{ background: "#ecf863" }}></span>Yellow (13)</a></li>
								</ul>
							</div>
						</div>
						<div className="sidebar_section">
							<div className="sidebar_title">Size</div>
							<div className="sidebar_section_content">
								<ul>
									<li><a href="#">Small S (23)</a></li>
									<li><a href="#">Medium M (11)</a></li>
									<li><a href="#">Large L (61)</a></li>
									<li><a href="#">Extra Large XL (34)</a></li>
								</ul>
							</div>
						</div>
						<div className="sidebar_section">
							<div className="sidebar_title">Price</div>
							<div className="sidebar_section_content">
								<div className="filter_price">
									<div id="slider-range" className="slider_range"></div>
									<p><input type="text" id="amount" className="amount" readonly style={{ border: 0, fontWeight: "bold" }}
									/></p>
									<div className="clear_price_btn">Clear Price</div>
								</div>
							</div>
						</div>
						<div className="sidebar_section">
							<div className="sidebar_title">Best Sellers</div>
							<div className="sidebar_section_content bestsellers_content">
								<ul>
									<li className="clearfix">
										<div className="best_image"><img src={images.best1} alt="" /></div>
										<div className="best_content">
											<div className="best_title"><a href="product.html">Blue dress with dots</a></div>
											<div className="best_price">$45</div>
										</div>
										<div className="best_buy">+</div>
									</li>
									<li className="clearfix">
										<div className="best_image"><img src={images.best2} alt="" /></div>
										<div className="best_content">
											<div className="best_title"><a href="product.html">White t-shirt</a></div>
											<div className="best_price">$45</div>
										</div>
										<div className="best_buy">+</div>
									</li>
									<li className="clearfix">
										<div className="best_image"><img src={images.best3} alt="" /></div>
										<div className="best_content">
											<div className="best_title"><a href="product.html">Blue dress with dots</a></div>
											<div className="best_price">$45</div>
										</div>
										<div className="best_buy">+</div>
									</li>
									<li className="clearfix">
										<div className="best_image"><img src={images.best4} alt="" /></div>
										<div className="best_content">
											<div className="best_title"><a href="product.html">White t-shirt</a></div>
											<div className="best_price">$45</div>
										</div>
										<div className="best_buy">+</div>
									</li>

								</ul>
							</div>
						</div>
						<div className="sidebar_section sidebar_options">
							<div className="sidebar_section_content">
								<div className="sidebar_option d-flex flex-row align-items-center justify-content-start">
									<div className="option_image"><img src={images.option1} alt="" /></div>
									<div className="option_content">
										<div className="option_title">30 Days Returns</div>
										<div className="option_subtitle">No questions asked</div>
									</div>
								</div>
								<div className="sidebar_option d-flex flex-row align-items-center justify-content-start">
									<div className="option_image"><img src={images.option2} alt="" /></div>
									<div className="option_content">
										<div className="option_title">Free Delivery</div>
										<div className="option_subtitle">On all orders</div>
									</div>
								</div>
								<div className="sidebar_option d-flex flex-row align-items-center justify-content-start">
									<div className="option_image"><img src={images.option3} alt="" /></div>
									<div className="option_content">
										<div className="option_title">Secure Payments</div>
										<div className="option_subtitle">No need to worry</div>
									</div>
								</div>
								<div className="sidebar_option d-flex flex-row align-items-center justify-content-start">
									<div className="option_image"><img src={images.option4} alt="" /></div>
									<div className="option_content">
										<div className="option_title">24/7 Support</div>
										<div className="option_subtitle">Just call us</div>
									</div>
								</div>

							</div>
						</div>

					</div>

					<div className="current_page">Woman's Fashion</div>
				</div>
				<div className="col-12">
					<div className="product_sorting clearfix">
						<div className="view">
							<div className="view_box box_view"><i className="fa fa-th-large" aria-hidden="true"></i></div>
							<div className="view_box detail_view"><i className="fa fa-bars" aria-hidden="true"></i></div>
						</div>
						<div className="sorting">
							<ul className="item_sorting">
								<li>
									<span className="sorting_text">Show all</span>
									<i className="fa fa-caret-down" aria-hidden="true"></i>
									<ul>
										<li className="product_sorting_btn" data-isotope-option='{ "sortBy": "original-order" }'><span>Show All</span></li>
										<li className="product_sorting_btn" data-isotope-option='{ "sortBy": "price" }'><span>Price</span></li>
										<li className="product_sorting_btn" data-isotope-option='{ "sortBy": "stars" }'><span>Stars</span></li>
									</ul>
								</li>
								<li>
									<span className="sorting_text">Show</span>
									<span className="num_sorting_text">12</span>
									<i className="fa fa-caret-down" aria-hidden="true"></i>
									<ul>
										<li className="num_sorting_btn"><span>3</span></li>
										<li className="num_sorting_btn"><span>6</span></li>
										<li className="num_sorting_btn"><span>12</span></li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="row products_container">
				<div className="col">
					<div className="product_grid">
						<div className="product">
							<div className="product_image"><img src={images.product1} alt="" /></div>
							<div className="rating rating_4" data-rating="4">
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
						<div className="product">
							<div className="product_image"><img src={images.product2} alt="" /></div>
							<div className="rating rating_5" data-rating="5">
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
						<div className="product">
							<div className="product_image"><img src={images.product3} alt="" /></div>
							<div className="rating rating_3" data-rating="3">
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
						<div className="product">
							<div className="product_image"><img src={images.product4} alt="" /></div>
							<div className="rating rating_3" data-rating="3">
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
						<div className="product">
							<div className="product_image"><img src={images.product5} alt="" /></div>
							<div className="rating rating_3" data-rating="3">
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
						<div className="product">
							<div className="product_image"><img src={images.product6} alt="" /></div>
							<div className="rating rating_3" data-rating="3">
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
						<div className="product">
							<div className="product_image"><img src={images.product7} alt="" /></div>
							<div className="rating rating_3" data-rating="3">
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
						<div className="product">
							<div className="product_image"><img src={images.product8} alt="" /></div>
							<div className="rating rating_3" data-rating="3">
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
						<div className="product">
							<div className="product_image"><img src={images.product9} alt="" /></div>
							<div className="rating rating_3" data-rating="3">
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
						<div className="product">
							<div className="product_image"><img src={images.product10} alt="" /></div>
							<div className="rating rating_3" data-rating="3">
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
						<div className="product">
							<div className="product_image"><img src={images.product11} alt="" /></div>
							<div className="rating rating_3" data-rating="3">
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
						<div className="product">
							<div className="product_image"><img src={images.product12} alt="" /></div>
							<div className="rating rating_3" data-rating="3">
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
			<div className="row page_num_container">
				<div className="col text-right">
					<ul className="page_nums">
						<li><a href="#">01</a></li>
						<li className="active"><a href="#">02</a></li>
						<li><a href="#">03</a></li>
						<li><a href="#">04</a></li>
						<li><a href="#">05</a></li>
					</ul>
				</div>
			</div>
		</div>
		<div className="sidebar_right clearfix">
			<div className="sidebar_promo_1 sidebar_promo d-flex flex-column align-items-center justify-content-center">
				<div className="sidebar_promo_image" style={{ backgroundImage: `url(${images.sidebarPromo2})` }}></div>
				<div className="sidebar_promo_content text-center">
					<div className="sidebar_promo_title">30%<span>off</span></div>
					<div className="sidebar_promo_subtitle">On all shoes</div>
					<div className="sidebar_promo_button"><a href="checkout.html">check out</a></div>
				</div>
			</div>
			<div className="sidebar_promo_2 sidebar_promo">
				<div className="sidebar_promo_image" style={{ backgroundImage: `url(${images.sidebarPromo1})` }}></div>
				<div className="sidebar_promo_content text-center">
					<div className="sidebar_promo_title">30%<span>off</span></div>
					<div className="sidebar_promo_subtitle">On all shoes</div>
					<div className="sidebar_promo_button"><a href="checkout.html">check out</a></div>
				</div>
			</div>
		</div>

	</div>
    </div>
  )
}

export default ProductCT
