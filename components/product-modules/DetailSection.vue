<template>
    <section class="detail-product">
        <a-row :gutter="30">
            <a-col :span="12">
                <slide-product />
            </a-col>
            <a-col :span="12">
                <div class="right-col">
                    <h1 class="title">
                        fishing map guide book
                    </h1>
                    <div class="content">
                        <a-row :gutter="30">
                            <a-col :span="12" class="action">
                                <a-form
                                    :model="formState"
                                    :layout="formState.layout"
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
                                        <a-input class="product-input" v-model:value="formState.state"/>
                                    </a-form-item>
                                    <a-form-item
                                        name="region"
                                    >
                                        <template #label>
                                            <p class="label-custom">Region</p>
                                        </template>
                                        <a-select :value="formState.region" class="product-custom-select"
                                                  placeholder="please select your zone">
                                            <a-select-option value="shanghai">Southwest</a-select-option>
                                            <a-select-option value="beijing">Southwest</a-select-option>
                                        </a-select>
                                    </a-form-item>
                                    <div class="wrapper-quanity">
                                        <p class="current-price">$29.95</p>
                                        <div class="quanity">
                                            <button class=" minus">
                                                -
                                            </button>
                                            <div class="wrapper-qty">
                                                <p>QTy</p>
                                                <a-form-item name="quanity">
                                                    <a-input :value="formState.quanity" class="product-input" type="number"/>
                                                </a-form-item>
                                            </div>
                                            <button class=" plus">
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <a-form-item  :wrapper-col="{ offset: 5, span: 16 }">
                                        <button  class="btn" type="submit">Add to cart</button>
                                    </a-form-item>
                                </a-form>
                            </a-col>
                            <a-col class="image">

                                <div>
                                    <img src="~/assets/images/sections/product-page/map.png" alt="map">
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
import SlideProduct from "~/components/product-modules/SlideProduct.vue";

interface FormState {
    layout: string;
    state: string;
    region: string;
    quanity: number;
}

const formState = reactive<FormState>({
    layout: "vertical",
    state: '',
    region: 'shanghai',
    quanity: 1
});
const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
</script>
