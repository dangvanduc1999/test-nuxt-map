<template>
    <swiper
        :pagination="{
            el:'.mobile-slide-pagination-feature',
            clickable: true
        }"
        :modules="modules" class="mobile-slide-list">
        <swiper-slide class="mobile-slide-product-item__wrapper">
            <div class="mobile-slide-product-item">
                <img src="~/assets/images/sections/product-page/michigan3.png" alt="michigan">
            </div>
        </swiper-slide>
        <swiper-slide class="mobile-slide-product-item__wrapper">
            <div class="mobile-slide-product-item">
                <img src="~/assets/images/sections/product-page/michigan3.png" alt="michigan">
            </div>
        </swiper-slide>
        <swiper-slide class="mobile-slide-product-item__wrapper">
            <div class="mobile-slide-product-item">
                <img src="~/assets/images/sections/product-page/michigan3.png" alt="michigan">
            </div>
        </swiper-slide>
        <swiper-slide class="mobile-slide-product-item__wrapper">
            <div class="mobile-slide-product-item">
                <img src="~/assets/images/sections/product-page/michigan3.png" alt="michigan">
            </div>
        </swiper-slide>
        <swiper-slide class="mobile-slide-product-item__wrapper">
            <div class="mobile-slide-product-item">
                <img src="~/assets/images/sections/product-page/michigan3.png" alt="michigan">
            </div>
        </swiper-slide>
        <swiper-slide class="mobile-slide-product-item__wrapper">
            <div class="mobile-slide-product-item">
                <img src="~/assets/images/sections/product-page/michigan3.png" alt="michigan">
            </div>
        </swiper-slide>
    </swiper>
    <div class="mobile-slide-pagination-feature"></div>
</template>

<script setup lang="ts">

import {Swiper, SwiperSlide} from "swiper/vue";
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';

const modules = [Pagination]
</script>
