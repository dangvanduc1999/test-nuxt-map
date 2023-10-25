import { defineStore } from 'pinia'

export const useProductDetail = defineStore({
    id: 'product-detail',
    state: () => {
        return {
            currentProduct : {},
        }
    },
    actions: {
        addProductCurrentDetail(value:any) {
            this.currentProduct = value
        },
    },
    getters: {
        getCurrentProduct: state => state.currentProduct,
    },
})
