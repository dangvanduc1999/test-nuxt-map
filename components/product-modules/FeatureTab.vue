<template>
    <a-row class="wrapper-feature-tab" :gutter="[30,80]">
        <a-col :span="24">
            <div class="container" v-html="get(currentProduct.currentProduct, 'data.data.site.route.node.description')"/>
        </a-col>
    </a-row>
</template>
<script setup lang="ts">
import {useProductDetail} from "~/pinia/product-detail.store";
import {get} from "lodash";

const currentProduct = useProductDetail()
</script>

<style scoped lang="scss">
.spin-feature {
    min-height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>




