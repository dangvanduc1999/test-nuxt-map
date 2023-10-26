<template>
    <section class="detail-product">
        <a-row :gutter="30">
            <a-col :xs="0" :sm="24" :md="24" :lg="12">
                <slot name="slide-product-desktop" v-if="formState.region && formState.region !== '' "/>
                <div v-else>
                    <img :src="imageChooseRegion" alt="map">
                </div>
            </a-col>
            <a-col :xs="24" :sm="24"  :md="24" :lg="12">
                <div class="right-col">
                    <h1 class="title">
                        {{ name }}
                    </h1>
                    <div class="content">
                        <a-row :gutter="30">
                            <a-col :xs="24" :sm="12" class="action">
                                <a-form
                                    :model="formState"
                                    :layout="formState.layout"
                                    class="form-choose-region"
                                    autocomplete="off"
                                    @finish="onFinish"
                                    @finishFailed="onFinishFailed"
                                >
                                    <a-form-item
                                        name="state"
                                    >
                                        <template #label>
                                            <p class="label-custom">State</p>
                                        </template>
                                        <a-select @change="refetchHook"
                                                  :disabled="listState.length === 0" v-model:value="formState.state"
                                                  class="product-custom-select"
                                                  placeholder="please select your state">
                                            <a-select-option v-for="state in listState" :value="state.value"
                                                             :key="state.value">{{ state.value }}
                                            </a-select-option>
                                        </a-select>
                                    </a-form-item>
                                    <a-form-item>
                                        <template #label>
                                            <p class="label-custom">Region</p>
                                        </template>
                                        <a-form-item name="region">
                                            <a-select :disabled="queryCategoriReactive.listRegions.length === 0"
                                                      v-model:value="formState.region"
                                                      :loading="queryCategoriReactive.loading"
                                                      class="product-custom-select"
                                                      placeholder="please select your region"
                                                      @change="handleChangeRegion">
                                                <a-select-option :value="''" key="default" default>Please select region</a-select-option>
                                                <a-select-option v-for="region in queryCategoriReactive.listRegions"
                                                                 :value="region.value"
                                                                 :key="region.value">{{ region.value }}
                                                </a-select-option>
                                            </a-select>
                                        </a-form-item>
                                    </a-form-item>
                                    <template v-if="formState.region && formState.region !== ''">
                                        <div class="wrapper-quanity" >
                                            <p class="current-price">{{ priceText }}</p>
                                            <div class="quanity">
                                                <button class=" minus" @click="decreaseQuanity">
                                                    -
                                                </button>
                                                <div class="wrapper-qty">
                                                    <p>QTy</p>
                                                    <a-form-item name="quanity">
                                                        <a-input v-model:value="positiveQuanity" class="product-input"
                                                                 type="number"/>
                                                    </a-form-item>
                                                </div>
                                                <button class=" plus" @click="increseQuanity">
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <a-form-item  :wrapper-col="{ offset: 5, span: 16 }">
                                            <button  class="btn" type="submit">Add to cart</button>
                                        </a-form-item>
                                    </template>
                                </a-form>
                                <!--element for mobile-->
                                <div class="action-mobile">
                                    <a-select :disabled="listState.length === 0" v-model:value="formState.state"
                                        @change="refetchHook"
                                        class="product-custom-select"
                                        placeholder="please select your state">
                                        <a-select-option v-for="state in listState" :value="state.value"
                                                         :key="state.value">{{ state.value }}
                                        </a-select-option>
                                    </a-select>
                                    <a-select
                                        :disabled="queryCategoriReactive.listRegions.length === 0"
                                        v-model:value="formState.region"
                                        :loading="queryCategoriReactive.loading"
                                        class="product-custom-select"
                                        placeholder="please select your region"
                                        @change="handleChangeRegion">
                                        <a-select-option :value="''" key="default" default>Please select region</a-select-option>
                                        <a-select-option v-for="region in queryCategoriReactive.listRegions"
                                                :value="region.value"
                                                :key="region.value">{{ region.value }}
                                        </a-select-option>
                                    </a-select>
                                    <div class="rating" v-if="formState.region && formState.region !== ''">
                                        <div class="stars-list">
                                            <StarOutlined/>
                                            <StarOutlined/>
                                            <StarOutlined/>
                                            <StarOutlined/>
                                            <StarOutlined/>
                                        </div>
                                        <span>Write a review</span>
                                    </div>
                                </div>
                                <!--                                end region for element mobile-->
                            </a-col>
                            <a-col :xs="0" :sm="12" class="image">
                                <div>
                                    <img :src="imageChooseRegion" alt="map">
                                </div>
                            </a-col>
                            <!--                            element for mobile-->
                            <a-col :xs="24" :sm="0">
                                <slot name="slide-product-mobile"  v-if="formState.region && formState.region !== '' "></slot>
                                <div v-else>
                                    <img :src="imageChooseRegion" alt="map">
                                </div>
                            </a-col>
                            <a-col :xs="24" :sm="0" v-if="formState.region && formState.region !== ''">
                                <div class="wrapper-quanity">
                                    <p class="current-price">{{priceText}}</p>
                                    <div class="quanity">
                                        <button class=" minus" @click="decreaseQuanity">
                                            -
                                        </button>
                                        <div class="wrapper-qty">
                                            <a-input :value="positiveQuanity" class="product-input" type="number"/>
                                        </div>
                                        <button class=" plus" @click="increseQuanity">
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div class="mobile-wrapper">
                                    <button class="btn mobile-btn-add">
                                        Add to cart
                                    </button>
                                </div>
                            </a-col>

                        </a-row>
                    </div>
                </div>
            </a-col>
        </a-row>
    </section>
</template>


<script setup lang="ts">
import {StarOutlined} from "@ant-design/icons-vue"
import {roundToTwoDecimalPlaces} from "~/utils/helper/formatNumber";
import _ from "lodash"
import {edgeProducts} from "~/type/product.type";
import {getCategory} from "~/services/products.service";
import {useProductDetail} from "~/pinia/product-detail.store";
import {END_POINT} from "~/utils/constant/app-endpoint";
import {convertToSnakeCase} from "~/utils/helper/convertStringToSnakeCase";
import type {stateRegion} from "~/type/product.type";
import type {ObjectMapping} from "~/type/base.type";

type mappingRegionToPathRefType = ObjectMapping<string> | null

interface FormState {
    layout: string;
    state: string;
    region: string | undefined;
    quanity: number;
}

interface IqueryCategoriReactive {
    cursorRef: null | string,
    productAttrJsonRef: string,
    hasNextPage: boolean,
    listRegions: stateRegion[],
    categoryId: number,
    loading : boolean
}

interface Props {
    name: string
    price: {
        currencyCode: string,
        value: number
    },
    listState: stateRegion[],
    listRegion: stateRegion[],
    currentState : string
}

const {name, price, listState, currentState} = defineProps<Props>()

const route = useRoute();
const currenProduct = useProductDetail()
const pathRef = ref(route.fullPath)
const formState = ref<FormState>({
    layout: "vertical",
    state: currentState || listState[0].value || "",
    region:  "",
    quanity: 1
});
const mappingRegionToPathRef = ref<mappingRegionToPathRefType>(null)
const listEdgeProductHasRegion = ref<edgeProducts[]>([])
const queryCategoriReactive = reactive<IqueryCategoriReactive>({
    loading : false,
    cursorRef: null,
    productAttrJsonRef: `{ attribute:"State", values:["${formState.value.state}"] }`,
    hasNextPage: true,
    listRegions: [],
    categoryId: 1022,
})
const queryParamsProduct = reactive({
    product_path : `/fishing-map-guides/${convertToSnakeCase(formState.value.state)}`
})

const {data: currentNode} = useFetch(() => END_POINT.route,{
    query : queryParamsProduct,
    server: false,
    onResponse({response}){
        currenProduct.addProductCurrentDetail(response._data)
    },
    watch :[queryParamsProduct],
})



watch(pathRef, async () => {
    listEdgeProductHasRegion.value = []
    queryCategoriReactive.cursorRef = null
})



watch(() => queryCategoriReactive.cursorRef, async () => {
    handleGetAllCategory()
})

onMounted(() => {
    handleGetAllCategory()
    currenProduct.addProductCurrentDetail(currentNode)
})



// computed region
const priceText = computed(() => {
    if (price.currencyCode === "USD") {
        return "$" + roundToTwoDecimalPlaces(price.value * formState.value.quanity)
    }
    return `${roundToTwoDecimalPlaces(price.value * formState.value.quanity)}`
})
const positiveQuanity = computed({
    get: () => formState.value.quanity,
    set: (value) => {
        if (value <= 0) {
            formState.value.quanity = 1;
        } else {
            formState.value.quanity = value;
        }
    }
});
const imageChooseRegion = computed(() => `https://store-kipp5.mybigcommerce.com/content/region/fishing-map-guides/${convertToSnakeCase(formState.value.state)}/choose-a-region.svg`)
const imageChooseMainImage = computed(() => `https://store-kipp5.mybigcommerce.com/content/region/fishing-map-guides/${convertToSnakeCase(formState.value.state)}/choose-a-region.jpg`)
const refetchHook = (value: string) => {
    queryParamsProduct.product_path = `/fishing-map-guides/${convertToSnakeCase(value)}`
    formState.value.region = ''
    queryCategoriReactive.listRegions = []
    queryCategoriReactive.cursorRef = null
    queryCategoriReactive.productAttrJsonRef = `{ attribute:"State", values:["${value}"] }`
    handleGetAllCategory()
}

const increseQuanity = () => {
    formState.value.quanity++
}

const decreaseQuanity = () => {
    if (formState.value.quanity <= 1) {
        formState.value.quanity = 1
        return;
    }
    formState.value.quanity--
}

const handleChangeRegion =  (value: stateRegion['value']) => {
    if(value === "" || !mappingRegionToPathRef.value) {
        return
    }
    const pathNavigate = mappingRegionToPathRef.value[value]
    navigateTo(pathNavigate)
}

const onFinish = (values: any) => {
    console.log('Success:', values);
};


const handleGetAllCategory = () => {
    queryCategoriReactive.loading = true
    getCategory(queryCategoriReactive.categoryId, queryCategoriReactive.productAttrJsonRef, queryCategoriReactive.cursorRef)
    .then(res => {
        queryCategoriReactive.hasNextPage =  _.get(res, "data.data.site.search.searchProducts.products.pageInfo.hasNextPage", false)

        let edgeProducts =  _.get(res, "data.data.site.search.searchProducts.products.edges", [])
        let regionsFilteredByState: stateRegion[];

        const listEdgeProducts: edgeProducts[] = edgeProducts.filter((item: edgeProducts) => {
            const nodeState =  _.get(item, "node.customFields.edges[0].node.value", "")
            const isHasNoRegion =  _.isEmpty( _.get(item, "node.customFields.edges", [])[1])
            return !isHasNoRegion && nodeState === formState.value.state
        })
        listEdgeProductHasRegion.value = [...listEdgeProductHasRegion.value, ...listEdgeProducts]
        // handle cache current path of current state
        if (listEdgeProducts.length > 0) {
            mappingRegionToPathRef.value = listEdgeProductHasRegion.value.reduce((acc, curr) => {
                const valueMapping =  _.get(curr, "node.customFields.edges[1].node.value")
                // init formState region
                if ( _.get(curr, "node.path") === route.fullPath) {
                    formState.value.region = valueMapping
                }
                (acc as any)[valueMapping] =  _.get(curr, "node.path")
                return acc
            }, {})
        }

        // mapping current region to current state

        regionsFilteredByState = listEdgeProducts.map(item =>  _.get(item, "node.customFields.edges[1].node", [{name: "Region", value: ""}])) as any
        queryCategoriReactive.listRegions = [...queryCategoriReactive.listRegions, ...regionsFilteredByState]
        if (queryCategoriReactive.hasNextPage) {
            queryCategoriReactive.cursorRef =  _.get(res, "data.data.site.search.searchProducts.products.pageInfo.endCursor", "no cursor")
        }
    })
    .catch(error => {
        console.log(error)
    }).finally(() => {
        queryCategoriReactive.loading = false
    })
}

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
</script>
