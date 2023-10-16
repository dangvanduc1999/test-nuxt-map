<template>
  <div>
   <Header/>
   <ProductPage></ProductPage>
</div>
</template>
<script setup>
const route = useRoute();
const { data: nodeDetails } = await useFetch("/api/get_route", {
  query: {
    product_path: route.fullPath,
  },
});

</script>