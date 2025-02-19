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
function Gallery() {
  return (
    <div>
      <div className="gallery">
		<div className="gallery_image" style={{ backgroundImage: `url(${images.gallery})` }}></div>
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="gallery_title text-center">
						<ul>
							<li><a href="#">#wish</a></li>
							<li><a href="#">#wishinstagram</a></li>
							<li><a href="#">#wishgirl</a></li>
						</ul>
					</div>
					<div className="gallery_text text-center">*Integer ut imperdiet erat. Quisque ultricies lectus tellus, eu tristique magna pharetra.</div>
					<div className="button gallery_button"><a href="#">submit</a></div>
				</div>
			</div>
		</div>	
		<div className="gallery_slider_container">
			<div className="owl-carousel owl-theme gallery_slider">
				<div className="owl-item gallery_item">
					<a className="colorbox">
					<img src={images.gallery1} alt="" />
					</a>
				</div>
				<div className="owl-item gallery_item">
					<a className="colorbox" >
					<img src={images.gallery2} alt="" />
					</a>
				</div>
				<div className="owl-item gallery_item">
					<a className="colorbox" >
					<img src={images.gallery3} alt="" />
					</a>
				</div>
				<div className="owl-item gallery_item">
					<a className="colorbox" >
					<img src={images.gallery4} alt="" />
					</a>
				</div>
				<div className="owl-item gallery_item">
					<a className="colorbox" >
					<img src={images.gallery5} alt="" />
					</a>
				</div>
				<div className="owl-item gallery_item">
					<a className="colorbox" >
					<img src={images.gallery6} alt="" />
					</a>
				</div>

			</div>
		</div>	
	</div>
    </div>
  )
}

export default Gallery
