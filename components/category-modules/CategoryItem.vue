<template>
    <div class="category-item">
        <nuxt-link class="category-item__image" :to="categoryNode.path">
            <img :src="categoryNode.images.edges[0].node.urlOriginal" alt="category image">
        </nuxt-link>
        <h4 class="category-item__title">
            <nuxt-link :to="categoryNode.path">
                {{categoryNode.name}}
            </nuxt-link>
        </h4>
        <p class="category-item__price">
            {{categoryNode.prices.price.formatted}}
        </p>
        <common-button title-button="Add to cart" :custom-class-name="'category-item__btn'"/>
    </div>
</template>

<script setup lang="ts">

import CommonButton from "~/common/CommonButton.vue";
interface Props {
    categoryNode : any
}
const props = defineProps<Props>()

</script>

<style scoped lang="scss">
.category-item__btn {
    padding: 2rem !important;
}
</style>
