<template>
<main class="product-page-module">
        <grid-image-section />
        <detail-section :name="nameProduct" :list-slide-image="listImages" :price="priceProduct"
                :list-region="[]" :list-state="listStates" :current-state="currentState">
            <template #slide-product-desktop>
                <slide-product :list-slide-image="listImages"/>
            </template>
            <template #slide-product-mobile>
                <slide-product-mobile :list-slide-image="listImages"/>
            </template>
        </detail-section>
        <tab-section :description="description">
            <template #mobile-tab-section>
                <mobile-tab-section class="mobile-tab-section" :name="nameProduct" :description="description"  >

                </mobile-tab-section>
            </template>
        </tab-section>
    </main>
</template>
<script setup lang="ts">
import GridImageSection from "~/components/product-modules/GridImageSection.vue";
import DetailSection from "~/components/product-modules/DetailSection.vue";
import TabSection from "~/components/product-modules/TabSection.vue";
import MobileTabSection from "~/components/product-modules/MobileTabSection.vue";
import _ from "lodash"
import SlideProduct from "~/components/product-modules/SlideProduct.vue";
import {filterUniqueObjectsByKeyName} from "~/utils/helper/filterUniqueObjectsByKeyName";
import {stateRegion} from "~/type/product.type";

interface Props {
    data: any
}

const props = defineProps<Props>()

const ENUM_MAPPING_DATA = {
    state: "State",
    region: "Region"
}
const route = useRoute()

const {data: nodeDetails} = await useFetch("/api/category_options", {
    query: {
        categoryId: 1022,
        productAttr: `{ attribute:"State", values:[] }`,
        cursor: null
    },
    onResponseError({response, request}): Promise<void> | void {
        console.error(`error from ${request} with response error ${response}`)
    },
    onRequestError({error: Error, request}) {
        console.error(`error from ${request} with response error ${Error.message}`)
    }
});




const nameProduct = computed(() => _.get(props, "data.data.data.site.route.node.name", ""))
const listImages = computed(() => _.get(props, "data.data.data.site.route.node.images.edges", []))
const priceProduct = computed(() => _.get(props, "data.data.data.site.route.node.prices.price", {}))
const description = computed(() => _.get(props, "data.data.data.site.route.node.description",""))
const currentState = computed(() => _.get(props, "data.data.data.site.route.node.customFields.edges[0].node.value",""))

const listStates = computed<stateRegion[]>(() => {
    let edgeProducts = _.get(nodeDetails.value, "data.data.site.search.searchProducts.products.edges", [])
    let listState = edgeProducts.reduce((acc, curr) => {
        const state = _.get(curr, "node.customFields.edges[0].node")
        if (!_.isEmpty(state) && _.get(state, "name") === ENUM_MAPPING_DATA.state) {
            acc.push(state)
        }
        return acc
    }, [])
    return filterUniqueObjectsByKeyName(listState, "value")
})
</script>

<style scoped lang="scss">

</style>
