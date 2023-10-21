<template>
    <section class="detail-product">
        <a-row :gutter="30">
            <a-col :xs="0" :sm="24" :md="24" :lg="12">
                <slot name="slide-product-desktop"/>
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
                                        <a-select :disabled="listState.length === 0" :value="formState.state"
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
                                            <a-select :disabled="listRegions.length === 0" :value="formState.region"
                                                      class="product-custom-select"
                                                      placeholder="please select your region">
                                                <a-select-option v-for="region in listRegions" :value="region.value"
                                                                 :key="region.value">{{ region.value }}
                                                </a-select-option>
                                            </a-select>
                                        </a-form-item>
                                    </a-form-item>
                                    <div class="wrapper-quanity">
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
                                </a-form>
                                <!--element for mobile-->
                                <div class="action-mobile">
                                    <a-select :disabled="listState.length === 0" :value="formState.state"
                                              class="product-custom-select"
                                              placeholder="please select your state">
                                        <a-select-option v-for="state in listState" :value="state.value"
                                                         :key="state.value">{{ state.value }}
                                        </a-select-option>
                                    </a-select>
                                    <a-select :disabled="listRegions.length === 0" :value="formState.region"
                                              class="product-custom-select"
                                              placeholder="please select your region">
                                        <a-select-option v-for="region in listRegions" :value="region.value"
                                                         :key="region.value">{{ region.value }}
                                        </a-select-option>
                                    </a-select>
                                    <div class="rating">
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
                                    <img src="~/assets/images/sections/product-page/map.png" alt="map">
                                </div>
                            </a-col>
                            <!--                            element for mobile-->
                            <a-col :xs="24" :sm="0">
                                <slot name="slide-product-mobile"></slot>
                            </a-col>
                            <a-col :xs="24" :sm="0">
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

interface FormState {
    layout: string;
    state: string;
    region: string | undefined;
    quanity: number;
}

interface stateRegion {
    name: "State" | "Region",
    value: string
}

interface Props {
    name: string
    price: {
        currencyCode: string,
        value: number
    },
    listState: stateRegion[],
    listRegion: stateRegion[]
    path : string
}

const {name, price, listState, listRegion} = defineProps<Props>()
const route = useRoute();

const formState = reactive<FormState>({
    layout: "vertical",
    state: listState[0].value || "",
    region:  undefined,
    quanity: 1
});

const { data: nodeDetails } = await useFetch("/api/category_options", {
    query: {
        categoryId: 1022,
        productAttr: `{ attribute:"State", values:["${formState.state}"] }`,
        cursor: null,
    },
    onRequestError({ error: Error, request  }){
        console.error(`error from ${request} with response error ${Error.message}`)
    }
});


// computed region
const priceText = computed(() => {
    if (price.currencyCode === "USD") {
        return "$" + roundToTwoDecimalPlaces(price.value * formState.quanity)
    }
    return `${roundToTwoDecimalPlaces(price.value * formState.quanity)}`
})
const positiveQuanity = computed({
    get: () => formState.quanity,
    set: (value) => {
        if (value <= 0) {
            formState.quanity = 1;
        } else {
            formState.quanity = value;
        }
    }
});

/*
* Get all states for fishing map guides category 1022
*/
const listStates = computed<stateRegion[]>(() => { 

})
/*
* Get path for product 
*/
const getProductUrlFromForm = computed<string>(() => { 

})
/*
* Get all regions for fishing map guides category && for selected state
*/
const listRegions = computed<stateRegion[]>(() => {
    let edgeProducts = _.get(nodeDetails.value, "data.data.site.search.searchProducts.products.edges",[])
    //only show regions for current state
    let regionsFilteredByState = [];
    edgeProducts.forEach(((e) => {e.node.customFields.edges[0].node.value===formState.state&&void 0!==e.node.customFields.edges[1]?.node.value&&regionsFilteredByState.push(e.node.customFields.edges[1]?.node)}));
        return regionsFilteredByState as stateRegion[]
})

const increseQuanity = () => {
    formState.quanity++
}
const decreaseQuanity = () => {
    if (formState.quanity <= 1) {
        formState.quanity = 1
        return;
    }
    formState.quanity--
}

const onFinish = (values: any) => {
    console.log('Success:', values);
};


const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
</script>
