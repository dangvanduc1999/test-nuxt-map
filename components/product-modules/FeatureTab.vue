<template>
    <a-row class="wrapper-feature-tab" :gutter="[30,80]">
        <a-col :span="24" v-html="description" />
    </a-row>
</template>
<script setup lang="ts">
interface Props {
    description : string,
}
const {description} = defineProps<Props>()
</script>




