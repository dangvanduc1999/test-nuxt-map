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
                <swiper-slide v-for="(item,idx) in listSlideImage" :key="item.node.altText" v-slot="{ isActive , isVisible}">
                    <div :class="['small-slide__item', idx === currentIndex && 'active']">
                        <img :src="item.node.urlOriginal" :alt="item.node.altText"/>
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
                    @slideChange="handlChangeBigSlide"

                >
                    <swiper-slide v-for="item in listSlideImage" :key="item.node.altText">
                        <img :src="item.node.urlOriginal" :alt="item.node.altText">
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

interface image {
    node: {
        altText: string,
        urlOriginal: string
    }
}

interface Props {
    listSlideImage: image[]
}

const {listSlideImage} = defineProps<Props>()
const thumbsSwiper = ref(null);
const currentIndex = ref(0)
const setThumbsSwiper = (swiper: any) => {
    thumbsSwiper.value = swiper;
};
const modules = [FreeMode, Navigation, Thumbs]
const handlChangeBigSlide = (slide:any) => {
    currentIndex.value = slide.realIndex
}
</script>
<style scoped lang="scss">
.small-slide {
    height: 100%;

    &__item {
        border: 1px solid black;
        padding: 1rem;
        height: 100%;
        &.active {
            border: 3px solid black;
        }

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
        width: 90%;
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
                margin-right: 0.8rem;
            }

            &:last-child {
                margin-left: 0.8rem;
            }
        }
    }
}

</style>
