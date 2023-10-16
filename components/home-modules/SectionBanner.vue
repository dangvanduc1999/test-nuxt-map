<template>
    <swiper
        :space-between="50"
        centered-slides
        :modules="modules"
        :pagination="{
            clickable: true,
        }"
        @slideChange="onSlideChange"
        loop
    >
        <swiper-slide>
            <div class="hero">
                <div class="hero__inner">
                    <div class="hero__content">
                        <div class="hero__content-background">
                            <img src="https://store-hdumb.mybigcommerce.com/content/images/temp/hero-bg.jpg" alt="">
                        </div><!-- /.hero__content-background -->

                        <h1 class="h2">Fishing Map Guides</h1>

                        <p>Fishing maps, stocking and survey data, fishing tips and spots provide by local experts</p>

                        <div class="hero__actions">
                            <a href="#" class="btn btn--cyan">Shop Now</a>
                        </div><!-- /.hero__actions -->
                    </div><!-- /.hero__content -->

                    <div class="hero__image">
                        <img src="~/assets/images/banner/fishing_atlas.png" alt="">
                    </div><!-- /.hero__image -->
                </div><!-- /.hero__inenr -->
            </div><!-- /.hero -->
        </swiper-slide>
        <swiper-slide>
            <div class="hero">
                <div class="hero__inner">
                    <div class="hero__content">
                        <div class="hero__content-background">
                            <img src="https://store-hdumb.mybigcommerce.com/content/images/temp/hero-bg.jpg" alt="">
                        </div><!-- /.hero__content-background -->
                        <h1 class="h2">All Outdoors Atlas & Field Guides</h1>
                        <p>All of your favorite outdoor activities  are covered in one easy to use guide.</p>
                        <div class="hero__actions">
                            <a href="#" class="btn btn--cyan">Shop Now</a>
                        </div><!-- /.hero__actions -->
                    </div><!-- /.hero__content -->

                    <div class="hero__image">
                        <img src="~/assets/images/banner/outdoors_atlas.png" alt="">
                    </div><!-- /.hero__image -->
                </div><!-- /.hero__inenr -->
            </div><!-- /.hero -->
        </swiper-slide>
        <swiper-slide>
            <div class="hero">
                <div class="hero__inner">
                    <div class="hero__content">
                        <div class="hero__content-background">
                            <img src="https://store-hdumb.mybigcommerce.com/content/images/temp/hero-bg.jpg" alt="">
                        </div><!-- /.hero__content-background -->

                        <h1 class="h2">Interactive  eBooks</h1>
                        <p>These eBook editions of our Fishing Map Guides and All-Outdoors Atlases bring the maps and information you love to your phone, tablet, or computer. </p>
                        <div class="hero__actions">
                            <a href="#" class="btn btn--cyan">Shop Now</a>
                        </div><!-- /.hero__actions -->
                    </div><!-- /.hero__content -->

                    <div class="hero__image">
                        <img src="~/assets/images/banner/outdoors_atlas_forests.png" alt="">
                    </div><!-- /.hero__image -->
                </div><!-- /.hero__inenr -->
            </div><!-- /.hero -->
        </swiper-slide>
    </swiper>
  </template>
  
  <script setup lang="ts">
  
  import {Swiper, SwiperSlide} from 'swiper/vue';
  import { Pagination } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/pagination';
  
  const modules = [Pagination]
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
  