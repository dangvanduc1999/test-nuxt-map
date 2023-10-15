<script setup lang="ts">
const route = useRoute();
let the_path = `${route.path}`;
</script>

<template>
{{the_path}}
</template>


