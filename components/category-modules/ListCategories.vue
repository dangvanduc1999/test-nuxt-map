<template>
    <a-row>
        <a-col :span="24">
            <div class="listCategories">
                <category-item v-for="categoryNode in listCategories" :key="get(listCategories,'node.entityId')"
                               :categoryNode="categoryNode.node"/>
            </div>
        </a-col>
    </a-row>
</template>

<script setup lang="ts">
import CategoryItem from "~/components/category-modules/CategoryItem.vue";
import {get} from "lodash";

interface Props {
    listCategoriesInfo : any
}

const props = defineProps<Props>()
const listCategories = computed(() => get(props.listCategoriesInfo, "edges", []))
</script>
