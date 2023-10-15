<template>
   {{ data }}
<!--    <Homepage :v-if="'home' == data.site.route.node.name"></Homepage>-->
    <Homepage  />
</template>
<script setup>
import Homepage from "~/components/home-modules/Homepage.vue";

const route = useRoute();

const query = gql` query{
   site {
     route(path: "/home") {
       node {
         __typename
         id
        ... on NormalPage {
          htmlBody
          id
          name
        }
       }
     }
   }
 }`;

 const { data, error, refresh } = await useAsyncQuery({
  query,
});
console.log(data);
</script>
