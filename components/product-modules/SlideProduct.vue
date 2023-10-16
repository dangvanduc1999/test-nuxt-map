<template>
    <a-row :gutter="20">
        <a-col span="4" :style="{height: '478px'}">
            <swiper
                @swiper="setThumbsSwiper"
                :loop="true"
                :spaceBetween="10"
                :slidesPerView="4"
                :direction="'vertical'"
                :freeMode="true"
                :watchSlidesProgress="true"
                :modules="modules"
                class="small-slide"
            >
                <swiper-slide v-for="item in smallSlideMock" :key="item.id">
                    <div class="small-slide__item">
                        <img :src="item.src" :alt="item.alt"/>
                    </div>
                </swiper-slide>

            </swiper>
        </a-col>
        <a-col span="20" :style="{height: '478px'}">
            <div class="wrapper-big-slide">
                <div class="btn-arrow btn-arrow-prev">
                    <i>
                        <img src="https://store-hdumb.mybigcommerce.com/content/images/temp/arrow-left.png" alt=""/>
                    </i>
                </div>
                <swiper
                    :loop="true"
                    :spaceBetween="10"
                    :slides-per-view="1"
                    :thumbs="{ swiper: thumbsSwiper }"
                    :modules="modules"
                    class="big-slide"
                    :navigation=" {
                        nextEl: '.btn-arrow-next',
                        prevEl: '.btn-arrow-prev',
                    }"
                >
                    <swiper-slide v-for="item in bigSlideMock" :key="item.id">
                        <img :src="item.src" :alt="item.alt">
                    </swiper-slide>
                </swiper>
                <div class="btn-arrow btn-arrow-next">
                    <i>
                        <img src="https://store-hdumb.mybigcommerce.com/content/images/temp/arrow-right.png" alt=""/>
                    </i>
                </div>
            </div>
        </a-col>
    </a-row>

</template>

<script setup lang="ts">
import {ref} from 'vue';
import {FreeMode, Navigation, Thumbs} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import Michigan1 from "~/assets/images/sections/product-page/michigan1.png"
import Michigan2 from "~/assets/images/sections/product-page/michigan2.png"
import Michigan3 from "~/assets/images/sections/product-page/michigan3.png"
import Michigan4 from "~/assets/images/sections/product-page/michigan4.png"

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper: any) => {
    thumbsSwiper.value = swiper;
};
const modules = [FreeMode, Navigation, Thumbs]
const smallSlideMock = [
    {
        id: 1,
        src: Michigan1,
        alt: 'img_1'
    },
    {
        id: 2,
        src: Michigan2,
        alt: 'img_2'
    },
    {
        id: 3,
        src: Michigan3,
        alt: 'img_3'
    },
    {
        id: 4,
        src: Michigan4,
        alt: 'img_4'
    },
    {
        id: 5,
        src: Michigan1,
        alt: 'img_5'
    },
    {
        id: 6,
        src: Michigan2,
        alt: 'img_6'
    },
    {
        id: 7,
        src: Michigan3,
        alt: 'img_7'
    },
    {
        id: 8,
        src: Michigan4,
        alt: 'img_8'
    },
    {
        id: 9,
        src: Michigan1,
        alt: 'img_9'
    },
    {
        id: 10,
        src: Michigan2,
        alt: 'img_10'
    },

]
const bigSlideMock = [
    {
        id: 1,
        src: Michigan1,
        alt: 'img_1'
    },
    {
        id: 2,
        src: Michigan2,
        alt: 'img_2'
    },
    {
        id: 3,
        src: Michigan3,
        alt: 'img_3'
    },
    {
        id: 4,
        src: Michigan4,
        alt: 'img_4'
    },
    {
        id: 5,
        src: Michigan1,
        alt: 'img_5'
    },
    {
        id: 6,
        src: Michigan2,
        alt: 'img_6'
    },
    {
        id: 7,
        src: Michigan3,
        alt: 'img_7'
    },
    {
        id: 8,
        src: Michigan4,
        alt: 'img_8'
    },
    {
        id: 9,
        src: Michigan1,
        alt: 'img_9'
    },
    {
        id: 10,
        src: Michigan2,
        alt: 'img_10'
    },

]
</script>
<style scoped lang="scss">
.small-slide {
    height: 100%;

    &__item {
        border: 1px solid black;
        padding: 1rem;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

.wrapper-big-slide {
    height: 100%;
    padding: 0 1rem;
    display: flex;
    align-items: center;

    .big-slide {
        height: 100%;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .btn-arrow {
        i {
            width: 1.5rem;
            height: 1.5rem;
            display: inline-block;
            cursor: pointer;

            img {
                width: 100%;
                object-fit: cover;
            }

            &:first-child {
                margin-right: 8px;
            }

            &:last-child {
                margin-left: 8px;
            }
        }
    }
}

</style>
