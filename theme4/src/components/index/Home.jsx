import React, { useEffect } from 'react';
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
import "../../js/cart_custom.js";
function Home() {
	useEffect(() => {
		// Appeler les fonctions de cart_custom.js ici
		if (window.initMenu) {
		  window.initMenu();
		}
		if (window.initQuantity) {
		  window.initQuantity();
		}
	  }, []);
  return (
    <div>
      <div className="home">
		<div className="home_slider_container">
			<div className="owl-carousel owl-theme home_slider">
				<div className="owl-item">
					<div className="home_slider_background" style={{ backgroundImage: `url(${images.homeslider})` }}></div>
					<div className="home_slider_content">
						<div className="home_slider_content_inner">
							<div className="home_slider_subtitle">Promo Prices</div>
							<div className="home_slider_title">New Collection</div>
						</div>	
					</div>
				</div>
				<div className="owl-item">
					<div className="home_slider_background" style={{ backgroundImage: `url(${images.homeslider})` }}></div>
					<div className="home_slider_content">
						<div className="home_slider_content_inner">
							<div className="home_slider_subtitle">Promo Prices</div>
							<div className="home_slider_title">New Collection</div>
						</div>	
					</div>
				</div>
				<div className="owl-item">
					<div className="home_slider_background" style={{ backgroundImage: `url(${images.homeslider})` }}></div>
					<div className="home_slider_content">
						<div className="home_slider_content_inner">
							<div className="home_slider_subtitle">Promo Prices</div>
							<div className="home_slider_title">New Collection</div>
						</div>	
					</div>
				</div>
			</div>
			<div className="home_slider_next d-flex flex-column align-items-center justify-content-center"><img src="images/arrow_r.png" alt=""/></div>
			<div className="home_slider_dots_container">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="home_slider_dots">
								<ul id="home_slider_custom_dots" className="home_slider_custom_dots">
									<li className="home_slider_custom_dot active">01.<div></div></li>
									<li className="home_slider_custom_dot">02.<div></div></li>
									<li className="home_slider_custom_dot">03.<div></div></li>
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

export default Home
