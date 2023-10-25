<template>
    <div class="description-wrapper">
        <div class="container" v-html="description"/>
    </div>
</template>
<script setup lang="ts">
interface Props {
    description : string
}
  defineProps<Props>()
</script>

<style scoped lang="scss">
.description-wrapper {
    width: 100%;
    margin: 3rem 0;
}
</style>




