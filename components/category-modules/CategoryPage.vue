<template>
    <main class="product-page-module">
        <grid-image-section/>
        <description-category :description="data?.data.data.site.route.node.description" />
        <list-categories :list-categories-info="data.data.data.site.route.node.products" />
    </main>
</template>
<script setup lang="ts">
import GridImageSection from "~/components/product-modules/GridImageSection.vue";
import DescriptionCategory from "~/components/category-modules/DescriptionCategory.vue";
import ListCategories from "~/components/category-modules/ListCategories.vue";
import _ from "lodash";

interface Props {
  data: any
}
 defineProps<Props>()
</script>
