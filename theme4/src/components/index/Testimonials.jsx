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
function Testimonials() {
  return (
    <div>
      <div className="testimonials">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="section_title_container text-center">
						<div className="section_subtitle">only the best</div>
						<div className="section_title">testimonials</div>
					</div>
				</div>
			</div>
			<div className="row test_slider_container">
				<div className="col">
					<div className="owl-carousel owl-theme test_slider text-center">
						<div className="owl-item">
							<div className="test_text">“Integer ut imperdiet erat. Quisque ultricies lectus tellus, eu tristique magna pharetra nec. Fusce vel lorem libero. Integer ex mi, facilisis sed nisi ut, vestibulum ultrices nulla. Aliquam egestas tempor leo.”</div>
							<div className="test_content">
								<div className="test_image"><img src={images.testimonials} alt="" /></div>
								<div className="test_name">Christinne Smith</div>
								<div className="test_title">client</div>
							</div>
						</div>
						<div className="owl-item">
							<div className="test_text">“Integer ut imperdiet erat. Quisque ultricies lectus tellus, eu tristique magna pharetra nec. Fusce vel lorem libero. Integer ex mi, facilisis sed nisi ut, vestibulum ultrices nulla. Aliquam egestas tempor leo.”</div>
							<div className="test_content">
								<div className="test_image"><img src={images.testimonials} alt="" /></div>
								<div className="test_name">Christinne Smith</div>
								<div className="test_title">client</div>
							</div>
						</div>
						<div className="owl-item">
							<div className="test_text">“Integer ut imperdiet erat. Quisque ultricies lectus tellus, eu tristique magna pharetra nec. Fusce vel lorem libero. Integer ex mi, facilisis sed nisi ut, vestibulum ultrices nulla. Aliquam egestas tempor leo.”</div>
							<div className="test_content">
								<div className="test_image"><img src={images.testimonials} alt="" /></div>
								<div className="test_name">Christinne Smith</div>
								<div className="test_title">client</div>
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

export default Testimonials
