
<template>
    <section class="product-grid-image">
        <a-row>
            <a-col :span="6" v-for="img in ImageData" :key="img.id">
                <div class="image-wrapper">
                    <img  :src="img.srcPath" :alt="img.alt">
                </div>
            </a-col>
        </a-row>
    </section>
</template>

<script setup lang="ts">
import img_1Import from "~/assets/images/sections/product-page/img_1.png"
import img_2Import from "~/assets/images/sections/product-page/img_2.png"
import img_3Import from "~/assets/images/sections/product-page/img_3.png"
import img_4Import from "~/assets/images/sections/product-page/img_4.png"

type ImageData = {
    id : number,
    srcPath : any,
    alt : string,
}

const ImageData :ImageData[] = [
    {
        id : 1,
        srcPath : img_1Import,
        alt: "img_1"
    },
    {
        id : 2,
        srcPath : img_3Import,
        alt: "img_3"
    },
    {
        id : 3,
        srcPath : img_4Import,
        alt: "img_4"
    },
    {
        id : 4,
        srcPath : img_2Import,
        alt: "img_2"
    },
]

</script>




