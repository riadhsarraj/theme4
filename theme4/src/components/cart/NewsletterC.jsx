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
function NewsletterC() {
  return (
    <div>
      <div className="newsletter">
		<div className="newsletter_content">
			<div className="newsletter_image parallax-window" data-parallax="scroll"  data-speed="0.8"><img src={images.cartnl} alt="" /></div>
			<div className="container">
				<div className="row options">
					<div className="col-lg-3">
						<div className="options_item d-flex flex-row align-items-center justify-content-start">
							<div className="option_image"><img src={images.option1} alt="" /></div>
							<div className="option_content">
								<div className="option_title">30 Days Returns</div>
								<div className="option_subtitle">No questions asked</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="options_item d-flex flex-row align-items-center justify-content-start">
							<div className="option_image"><img src={images.option2} alt="" /></div>
							<div className="option_content">
								<div className="option_title">Free Delivery</div>
								<div className="option_subtitle">On all orders</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="options_item d-flex flex-row align-items-center justify-content-start">
							<div className="option_image"><img src={images.option3} alt="" /></div>
							<div className="option_content">
								<div className="option_title">Secure Payments</div>
								<div className="option_subtitle">No need to worry</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="options_item d-flex flex-row align-items-center justify-content-start">
							<div className="option_image"><img src={images.option4} alt="" /></div>
							<div className="option_content">
								<div className="option_title">24/7 Support</div>
								<div className="option_subtitle">Just call us</div>
							</div>
						</div>
					</div>

				</div>
				<div className="row newsletter_row">
					<div className="col">
						<div className="section_title_container text-center">
							<div className="section_subtitle">only the best</div>
							<div className="section_title">subscribe for a 20% discount</div>
						</div>
					</div>
				</div>
				<div className="row newsletter_container">
					<div className="col-lg-10 offset-lg-1">
						<div className="newsletter_form_container">
							<form action="#">
								<input type="email" className="newsletter_input" required="required" placeholder="E-mail here"/>
								<button type="submit" className="newsletter_button">subscribe</button>
							</form>
						</div>
						<div className="newsletter_text">Integer ut imperdiet erat. Quisque ultricies lectus tellus, eu tristique magna pharetra nec. Fusce vel lorem libero. Integer ex mi, facilisis sed nisi ut, vestib ulum ultrices nulla. Aliquam egestas tempor leo.</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}

export default NewsletterC
