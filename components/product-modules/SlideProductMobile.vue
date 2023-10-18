<template>
    <swiper
        :pagination="{
            el:'.mobile-slide-pagination',
            clickable: true
        }"
        :modules="modules" class="mobile-slide-list">
        <swiper-slide v-for="image in listSlideImage" :key="image.node.altText" class="mobile-slide-product-item__wrapper">
            <div class="mobile-slide-product-item">
                <img :src="image.node.urlOriginal" :alt="image.node.altText">
            </div>
        </swiper-slide>

    </swiper>
    <div class="mobile-slide-pagination"></div>
</template>

<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';
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
const modules = [Pagination]

</script>
