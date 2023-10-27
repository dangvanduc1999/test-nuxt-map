<template>
    <a-row class="wrapper-feature-tab" :gutter="[30,80]">
        <a-col :span="24">
            <div class="container" v-html="featureDes"/>
        </a-col>
    </a-row>
</template>
<script setup lang="ts">
import {useProductDetail} from "~/pinia/product-detail.store";
import _ from "lodash";

const currentProduct = useProductDetail()
const featureDes= computed(() => _.get(currentProduct.currentProduct, 'data.data.site.route.node.description'))
</script>

<style scoped lang="scss">
.spin-feature {
    min-height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>




