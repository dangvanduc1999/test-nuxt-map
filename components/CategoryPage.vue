<template>
  <main class="product-page-module">
    {{data.data.data.site.route.node}}
  </main>
</template>
<script setup lang="ts">
interface Props {
  data: any
}
const props = defineProps<Props>()
</script>