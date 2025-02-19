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
function CheckoutCH() {
  return (
    <div>
      <div class="checkout">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<div class="billing">
						<div class="checkout_title">billing details</div>
						<div class="checkout_form_container">
                        <form action="#" id="checkout_form">
                            <div className="d-flex flex-lg-row flex-column align-items-start justify-content-between">
                                <input type="text" className="checkout_input checkout_input_50" placeholder="First Name" required />
                                <input type="text" className="checkout_input checkout_input_50" placeholder="Last Name" required />
                            </div>
                            <input type="text" className="checkout_input" placeholder="Company Name" />
                            <input type="email" className="checkout_input" placeholder="E-mail" required />
                            <select name="country" id="country" className="country_select checkout_input">
                                <option>Country</option>
                                <option>Country</option>
                                <option>Country</option>
                            </select>
                            <input type="text" className="checkout_input" placeholder="Address" required />
                            <input type="text" className="checkout_input" placeholder="Town" required />
                            <div className="d-flex flex-lg-row flex-column align-items-start justify-content-between">
                                <input type="text" className="checkout_input checkout_input_50" placeholder="Zipcode" required />
                                <input type="text" className="checkout_input checkout_input_50" placeholder="Phone No" required />
                            </div>
                            <textarea name="checkout_comment" id="checkout_comment" className="checkout_comment" placeholder="Leave a comment about your order"></textarea>
                            <div className="billing_options">
                                <div className="billing_account">
                                <input type="checkbox" id="checkbox_account" name="regular_checkbox" className="regular_checkbox checkbox_account" />
                                <label htmlFor="checkbox_account"><img src="images/checked.png" alt="" /></label>
                                <span>Create an account</span>
                                </div>
                                <div className="billing_shipping">
                                <input type="checkbox" id="checkbox_shipping" name="regular_checkbox" className="regular_checkbox checkbox_shipping" />
                                <label htmlFor="checkbox_shipping"><img src="images/checked.png" alt="" /></label>
                                <span>Ship to a different address</span>
                                </div>
                            </div>
                        </form>
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="cart_details">
						<div class="checkout_title">cart total</div>
						<div class="cart_total">
							<ul>
								<li class="d-flex flex-row align-items-center justify-content-start">
									<div class="cart_total_title">Product</div>
									<div class="cart_total_price ml-auto">Total</div>
								</li>
								<li class="d-flex flex-row align-items-center justify-content-start">
									<div class="cart_total_title">2 Piece Swimsuit x1</div>
									<div class="cart_total_price ml-auto">$35.00</div>
								</li>
								<li class="d-flex flex-row align-items-center justify-content-start">
									<div class="cart_total_title">Subtotal</div>
									<div class="cart_total_price ml-auto">$35.00</div>
								</li>
								<li class="d-flex flex-row align-items-center justify-content-start">
									<div class="cart_total_title">Shipping</div>
									<div class="cart_total_price ml-auto">$5.00</div>
								</li>
								<li class="d-flex flex-row align-items-start justify-content-start total_row">
									<div class="cart_total_title">Total</div>
									<div class="cart_total_price ml-auto">$40.00</div>
								</li>
							</ul>
						</div>
						<div class="payment_options">
							<div>
								<input type="radio" id="radio_payment_1" name="regular_radio" class="regular_radio"/>
								<label for="radio_payment_1">cash on delivery</label>
							</div>
							<div>
								<input type="radio" id="radio_payment_2" name="regular_radio" class="regular_radio" checked/>
								<label for="radio_payment_2">paypal</label>
								<div class="visa payment_option"><a href="#"><img src={images.visa} alt="" /></a></div>
								<div class="master payment_option"><a href="#"><img src={images.master} alt="" /></a></div>
							</div>
							<button class="cart_total_button">place order</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}

export default CheckoutCH
