<template>
<main class="product-page-module">
        <grid-image-section />
        <detail-section :name="nameProduct" :list-slide-image="listImages" :price="priceProduct"
                        :list-region="listRegions" :list-state="listStates">
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
                    <template #slide-tab2-mobile>
                        <slide-feature-mobile/>
                    </template>
                </mobile-tab-section>
            </template>
        </tab-section>
    </main>
</template>
<script setup lang="ts">
import GridImageSection from "~/components/product-modules/GridImageSection.vue";
import DetailSection from "~/components/product-modules/DetailSection.vue";
import TabSection from "~/components/product-modules/TabSection.vue";
import SlideProductMobile from "~/components/product-modules/SlideProductMobile.vue";
import MobileTabSection from "~/components/product-modules/MobileTabSection.vue";
import SlideFeatureMobile from "~/components/product-modules/SlideFeatureMobile.vue";
import _ from "lodash"
import SlideProduct from "~/components/product-modules/SlideProduct.vue";

interface Props {
    data: any
}

const props = defineProps<Props>()

const ENUM_MAPPING_DATA = {
    state: "State",
    region: "Region"
}

const nameProduct = _.get(props, "data.data.data.site.route.node.name", "")
const listImages = _.get(props, "data.data.data.site.route.node.images.edges", [])
const priceProduct = _.get(props, "data.data.data.site.route.node.prices.price", {})
const customFields = _.get(props, "data.data.data.site.route.node.customFields.edges", [])
const description = _.get(props, "data.data.data.site.route.node.description","")

const listStates = customFields.filter(state => state.node.name === ENUM_MAPPING_DATA.state).map(state => ({
    name: state.node.name || "",
    value: state.node.value || ""
}))
const listRegions = customFields.filter(state => state.node.name === ENUM_MAPPING_DATA.region).map(state => ({
    name: state.node.name,
    value: state.node.value
}))

</script>

<style scoped lang="scss">

</style>
