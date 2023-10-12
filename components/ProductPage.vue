<template>
	<section class="section-big">
			<div class="shell">
				<div class="section__body">
					<aside class="section__aside">
						<div class="slider-images js-slider-images swiper mySwiper2">
							<div class="slider__slides swiper-wrapper">
								<div class="slider__slide swiper-slide">
									<figure class="slider__thumb">
										<img src="https://store-hdumb.mybigcommerce.com/content/images/temp/slider-thumb-1@2x.png" alt="" width="315" height="407">
									</figure><!-- /.slider__thumb -->
								</div><!-- /.slider__slide -->
							</div><!-- /.slider__slides -->
						</div><!-- /.slider js-slider -->

						<div class="slider-thumbnails js-slider-thumbnails swiper mySwiper">
							<div class="slider__slides swiper-wrapper">
								<div class="slider__slide swiper-slide">
									<figure>
										<img src="https://store-hdumb.mybigcommerce.com/content/images/temp/slider-thumb-2@2x.png" alt="" width="96" height="96">
									</figure>
								</div><!-- /.slider__slide -->
							
							</div><!-- /.slider__slides -->
						</div><!-- /.slider js-slider -->
					</aside><!-- /.section__aside -->

					<div class="section__content">
						<div class="form">
							<form action="?" method="post">
								<div class="form__head">
									<h6>{{ product_name }}</h6>

								</div><!-- /.form__head -->
								
								<div class="form__body">
									<div class="form__row">
										<div class="form__controls">
											<div class="select">
												<select name="state" id="state">
													<option value="1">choose your state</option>
													<option value="2">2</option>
													<option value="3">3</option>
												</select>

												<figure class="select__arrow">
													<img src="https://store-hdumb.mybigcommerce.com/content/images/svg/arrow.svg" alt="" width="40" height="40">
												</figure><!-- /.select__arrow -->
											</div><!-- /.select -->
										</div><!-- /.form__controls -->
									</div><!-- /.form__row -->

									<div class="form__row">
										<div class="form__controls">
											<div class="select">
												<select name="country" id="country">
													<option value="1">choose your county</option>
													<option value="3">2</option>
													<option value="3">3</option>
												</select>

												<figure class="select__arrow">
													<img src="https://store-hdumb.mybigcommerce.com/content/images/svg/arrow.svg" alt="" width="40" height="40">
												</figure><!-- /.select__arrow -->
											</div><!-- /.select -->
										</div><!-- /.form__controls -->
									</div><!-- /.form__row -->

									
								</div><!-- /.form__body -->
								
								<div class="form__actions">
									<input type="submit" value="Add To Cart" class="btn btn--small form__btn">
								</div><!-- /.form__actions -->
							</form>
						</div><!-- /.form -->
					</div><!-- /.section__content -->
				</div><!-- /.section__body -->
			</div><!-- /.shell -->
		</section><!-- /.section-big -->

		<section class="section-viewed">
			<div class="shell">
				<header class="section__head">
					<h3>Customers Also Viewed:</h3>
				</header><!-- /.section__head -->

				<div class="section__body">
					<div class="products">
						<ul>
							<li>
								<div class="product-small">
									<figure class="product__image">
										<img src="https://store-hdumb.mybigcommerce.com/content/images/temp/product-1@2x.png" alt="" width="147" height="144">
									</figure><!-- /.product__image -->

									<div class="product__content">
										<h6>Lake Monroe</h6>

										<p class="product__price">
											$<span>24.99</span>
										</p><!-- /.product__price -->
									</div><!-- /.product__content -->

									<a href="#" class="btn product__btn btn--small">Add to cart</a>
								</div><!-- /.product -->
							</li>
							
							<li>
								<div class="product-small">
									<figure class="product__image">
										<img src="https://store-hdumb.mybigcommerce.com/content/images/temp/product-2@2x.png" alt="" width="147" height="144">
									</figure><!-- /.product__image -->

									<div class="product__content">
										<h6>Lake Monroe</h6>

										<p class="product__price">
											$<span>24.99</span>
										</p><!-- /.product__price -->
									</div><!-- /.product__content -->

									<a href="#" class="btn product__btn btn--small">Add to cart</a>
								</div><!-- /.product -->
							</li>
							
							<li>
								<div class="product-small">
									<figure class="product__image">
										<img src="https://store-hdumb.mybigcommerce.com/content/images/temp/product-3@2x.png" alt="" width="147" height="144">
									</figure><!-- /.product__image -->

									<div class="product__content">
										<h6>Pickerel Lake</h6>

										<p class="product__price">
											$<span>24.99</span>
										</p><!-- /.product__price -->
									</div><!-- /.product__content -->

									<a href="#" class="btn product__btn btn--small">Add to cart</a>
								</div><!-- /.product -->
							</li>
							
							<li>
								<div class="product-small">
									<figure class="product__image">
										<img src="https://store-hdumb.mybigcommerce.com/content/images/temp/product-4@2x.png" alt="" width="147" height="144">
									</figure><!-- /.product__image -->

									<div class="product__content">
										<h6>Rhinelander Flow Boom Lake</h6>

										<p class="product__price">
											$<span>24.99</span>
										</p><!-- /.product__price -->
									</div><!-- /.product__content -->

									<a href="#" class="btn product__btn btn--small">Add to cart</a>
								</div><!-- /.product -->
							</li>
						</ul>
					</div><!-- /.products -->
				</div><!-- /.section__body -->
			</div><!-- /.shell -->
		</section><!-- /.section-viewed -->
</template>
<script setup>
const product_name = "Product name goes here";
</script>