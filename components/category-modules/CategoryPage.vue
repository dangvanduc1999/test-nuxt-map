<template>
    <main class="product-page-module">
        <grid-image-section/>
        <description-category :description="description" />
        <list-categories :list-categories-info="listCategoriesInfo" />
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
 const props = defineProps<Props>()
const description = computed(() => _.get(props.data,'data.data.site.route.node.description',''))
const listCategoriesInfo = computed(() => _.get(props.data,'data.data.site.route.node.products',{}))
</script>
