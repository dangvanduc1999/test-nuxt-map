<template>
    <ProductPage v-if="checkProductNode" :data="nodeDetails"></ProductPage>
    <CategoryPage v-if="checkCategoryNode" :data="nodeDetails"></CategoryPage>
</template>
<script setup>
import ProductPage from "~/components/product-modules/ProductPage.vue";
import _ from "lodash"
import {TYPENAME_QUERY} from "~/utils/constant/app-constants.ts";

const route = useRoute();
const { data: nodeDetails } = await useFetch("/api/get_route", {
  query: {
    product_path: route.fullPath,
  },
});
const checkProductNode = _.get(nodeDetails.value, "data.data.site.route.node.__typename", "") === TYPENAME_QUERY.PRODUCT.toString();
const checkCategoryNode = _.get(nodeDetails.value, "data.data.site.route.node.__typename", "") === TYPENAME_QUERY.CATEGORY.toString();
</script>
