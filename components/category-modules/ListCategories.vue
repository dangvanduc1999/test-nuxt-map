<template>
    <a-row>
        <a-col :span="24">
            <div class="listCategories">
                <category-item v-for="categoryNode in listCategories" :key="_.get(listCategories,'node.entityId')"
                               :categoryNode="categoryNode.node"/>
            </div>
        </a-col>
    </a-row>
</template>

<script setup lang="ts">
import CategoryItem from "~/components/category-modules/CategoryItem.vue";
import _ from "lodash";

interface Props {
    listCategoriesInfo : any
}

const props = defineProps<Props>()
const listCategories = computed(() => _.get(props.listCategoriesInfo, "edges", []))
</script>
