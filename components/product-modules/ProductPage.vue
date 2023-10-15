<template>
    <main class="product-page-module">
        <grid-image-section />
        <detail-section/>
        <tab-section />
    </main>
</template>
<script setup>
import GridImageSection from "~/components/product-modules/GridImageSection.vue";
import DetailSection from "~/components/product-modules/DetailSection.vue";
import TabSection from "~/components/product-modules/TabSection.vue";

const product_name = "Product name goes here";
</script>

<style scoped lang="scss">
    .product-page-module {
        width: 100%;
        max-width: 144rem;
        margin: 0 auto;
        padding: 0 4rem;
    }
</style>
