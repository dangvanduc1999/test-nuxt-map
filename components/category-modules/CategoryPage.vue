<template>
    <main class="product-page-module">
        <grid-image-section/>
        <description-category :description="get(data,'data.data.site.route.node.description','')" />
        <list-categories :list-categories-info="get(data,'data.data.site.route.node.products',{})" />
    </main>
</template>
<script setup lang="ts">
import GridImageSection from "~/components/product-modules/GridImageSection.vue";
import DescriptionCategory from "~/components/category-modules/DescriptionCategory.vue";
import ListCategories from "~/components/category-modules/ListCategories.vue";
import {get} from "lodash";

interface Props {
  data: any
}
 defineProps<Props>()
</script>
