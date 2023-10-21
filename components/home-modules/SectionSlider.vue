<template>
   
    <swiper
        :slides-per-view="1.7"
        :space-between="10"
        :navigation=" {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
        :modules="modules"
        :breakpoints="breakpoints"
        centered-slides
        loop
        @slideChange="onSlideChange"
    >
    <span class="swiper-button-prev slider__btn">
      <i>
        <img src="https://store-hdumb.mybigcommerce.com/content/images/temp/arrow-left.png" alt=""/>
      </i>
    </span>
      <swiper-slide>
        <div class="product">
          <div class="product__image">
            <img src="https://store-hdumb.mybigcommerce.com/content/images/temp/hat.png" alt=""/>
          </div>
          <div class="product__content">
            <h6>Kryptek Typhoon Trucker Hat</h6>
            <div class="price">
              <span class="current-price">$26.99</span>
            </div>
            <a href="#" class="btn product__btn">Shop now</a>
          </div>
          <div class="tag">
            <span class="arrival">New Arrival</span>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="product">
          <div class="product__image">
            <img src="https://store-hdumb.mybigcommerce.com/content/images/temp/tshirt-black.png" alt=""/>
          </div><!-- /.product__image -->
          <div class="product__content">
            <h6>Bass Topo series T-Shirt</h6>

            <ul class="list-colors">
              <li>
                <a href="#" class="black"></a>
              </li>

              <li>
                <a href="#" class="blue"></a>
              </li>
            </ul>
            <div class="price">
              <span class="origin-price">$29.99</span>
              <span class="current-price">$26.99</span>
            </div>

            <a href="#" class="btn product__btn">Shop now</a>
          </div>
          <div class="tag">
            <span class="sale">sale</span>
          </div>
        </div><!-- /.product -->
      </swiper-slide>
      <swiper-slide>
        <div class="product">
          <div class="product__image">
            <img src="https://store-hdumb.mybigcommerce.com/content/images/temp/tshirt-black.png" alt=""/>
          </div><!-- /.product__image -->

          <div class="product__content">
            <h6>Bass Topo series T-Shirt</h6>
            <ul class="list-colors">
              <li>
                <a href="#" class="black"></a>
              </li>
              <li>
                <a href="#" class="blue"></a>
              </li>
            </ul>
            <div class="price">
              <span class="current-price">$26.99</span>
            </div>
            <a href="#" class="btn product__btn">Shop now</a>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="product">
          <div class="product__image">
            <img src="https://store-hdumb.mybigcommerce.com/content/images/temp/tshirt-white.png" alt=""/>
          </div><!-- /.product__image -->

          <div class="product__content">
            <h6>Redfish Topo series T-Shirt</h6>

            <ul class="list-colors">
              <li>
                <a href="#" class="white"></a>
              </li>

              <li>
                <a href="#" class="black"></a>
              </li>
            </ul><!-- /.list-colors -->
            <div class="price">
              <span class="current-price">$26.99</span>
            </div>

            <a href="#" class="btn product__btn">Shop now</a>
          </div><!-- /.product__content -->
        </div><!-- /.product -->
      </swiper-slide>
      <swiper-slide>
        <div class="product">
          <div class="product__image">
            <img src="https://store-hdumb.mybigcommerce.com/content/images/temp/tshirt-white.png" alt=""/>
          </div><!-- /.product__image -->
          <div class="product__content">
            <h6>Redfish Topo series T-Shirt</h6>
            <ul class="list-colors">
              <li>
                <a href="#" class="white"></a>
              </li>
              <li>
                <a href="#" class="black"></a>
              </li>
            </ul>
            <div class="price">
              <span class="current-price">$26.99</span>
            </div>
            <a href="#" class="btn product__btn">Shop now</a>
          </div><!-- /.product__content -->
        </div><!-- /.product -->
      </swiper-slide>
      <span class="swiper-button-next slider__btn">
      <i>
        <img src="https://store-hdumb.mybigcommerce.com/content/images/temp/arrow-right.png" alt=""/>
      </i>
    </span>
    </swiper>

</template>

<script setup lang="ts">

import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation} from 'swiper/modules';
import 'swiper/css';


const modules = [Navigation]
const breakpoints = {
  '500' : {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  '768': {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  '1024': {
    slidesPerView: 3,
    spaceBetween: 30,
  },
}

const onSlideChange = () => {
  console.log('slide change');
};
</script>
