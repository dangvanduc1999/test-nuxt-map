<template>
    <main class="product-page-module">
        <grid-image-section />
        <detail-section :name="nameProduct" :list-slide-image="listImages" :price="priceProduct"
                        :list-region="[]" :list-state="listStateRef" :current-state="currentState">
            <template #slide-product-desktop>
                <slide-product :list-slide-image="listImages"/>
            </template>
            <template #slide-product-mobile>
                <slide-product-mobile :list-slide-image="listImages"/>
            </template>
        </detail-section>
        <tab-section :description="description">
            <template #mobile-tab-section>
                <mobile-tab-section class="mobile-tab-section" :name="nameProduct" :description="description"/>
            </template>
        </tab-section>
    </main>
</template>
<script setup lang="ts">
import GridImageSection from "~/components/product-modules/GridImageSection.vue";
import DetailSection from "~/components/product-modules/DetailSection.vue";
import TabSection from "~/components/product-modules/TabSection.vue";
import MobileTabSection from "~/components/product-modules/MobileTabSection.vue";
import SlideProduct from "~/components/product-modules/SlideProduct.vue";
import {filterUniqueObjectsByKeyName} from "~/utils/helper/filterUniqueObjectsByKeyName";
import {stateRegion} from "~/type/product.type";
import SlideProductMobile from "~/components/product-modules/SlideProductMobile.vue";
import {TYPE_NODEEDGES} from "~/utils/constant/app-constants";
import _ from "lodash";

interface Props {
    data: any
}

const props = defineProps<Props>()

const ENUM_MAPPING_DATA = {
    state: "State",
    region: "Region"
}
const queryReactive = reactive({
    categoryId: 1022,
    productAttr: `{ attribute:"State", values:[] }`,
    cursor: null
})
const listStateRef = ref<stateRegion[]>([])
const route = useRoute()

const {data: nodeDetails, refresh} = await useFetch("/api/category_options", {
    query: queryReactive,
    server: false,
    onResponseError({response, request}): Promise<void> | void {
        console.error(`error from ${request} with response error ${response}`)
    },
    onResponse: ({response}) => {
        const metaData = response._data?.data.data.site.search.searchProducts.products.pageInfo
        let edgeProducts = response._data?.data.data.site.search.searchProducts.products.edges ?? []
        let listState = edgeProducts.reduce((acc, curr) => {
            const state = curr?.node.customFields.edges[0].node
            if (state && state.name === ENUM_MAPPING_DATA.state) {
                acc.push(state)
            }
            return acc
        }, [])
        listStateRef.value = filterUniqueObjectsByKeyName([...listStateRef.value, ...listState], "value") as any
        if (metaData.hasNextPage) {
            queryReactive.cursor = metaData.endCursor
        }
    },
    onRequestError({error: Error, request}) {
        console.error(`error from ${request} with response error ${Error.message}`)
    },
    watch: [queryReactive]
});


const nameProduct = computed(() => _.get(props, "data.data.data.site.route.node.name", ""))
const listImages = computed(() => _.get(props, "data.data.data.site.route.node.images.edges", []))
const priceProduct = computed(() => _.get(props, "data.data.data.site.route.node.prices.price", {}))
const description = computed(() => _.get(props, "data.data.data.site.route.node.description", ""))
const currentState = computed(() => {
    const listEdges = _.get(props, "data.data.data.site.route.node.customFields.edges", [])
    let valueReturn = ""
    for (let edge of listEdges) {
        const name = _.get(edge, "node.name", "")
        if (name === TYPE_NODEEDGES.state.toString()) {
            valueReturn = _.get(edge, "node.value", "")
            break;
        }
    }
    return valueReturn
})

</script>

<style scoped lang="scss">

</style>
