<template>
    <div class="isPending" v-if="pending">
	    <a-spin   />
    </div>
    <template v-else>
        <ProductPage v-if="checkProductNode" :data="nodeDetails"></ProductPage>
        <CategoryPage v-if="checkCategoryNode" :data="nodeDetails"></CategoryPage>
    </template>
</template>
<script setup>
import ProductPage from "~/components/product-modules/ProductPage.vue";
import {TYPENAME_QUERY} from "~/utils/constant/app-constants.ts";
import CategoryPage from "~/components/category-modules/CategoryPage.vue";

useHead({
    link: [
        {rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css'},
    ]
})
const route = useRoute();
const pathRef = ref(route.fullPath)

const {data: nodeDetails, pending } = await useFetch("/api/get_route", {
    query: {
        product_path: pathRef,
    },
    watch: [pathRef]
});
const checkProductNode = computed(() => nodeDetails.value.data.data.site.route.node.__typename === TYPENAME_QUERY.PRODUCT.toString())
const checkCategoryNode = computed(() => nodeDetails.value.data.data.site.route.node.__typename=== TYPENAME_QUERY.CATEGORY.toString())

</script>

<style scoped lang="scss">
.isPending{
  width: 100%;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
