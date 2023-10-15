<template>
  <div>
   <Header/>
   {{ the_path }}
<!--      <ProductPage v-if="data.site.route.node.__typename == 'Product'"></ProductPage>-->
      <ProductPage ></ProductPage>

<!--   <Homepage v-if="data.site.route.node.name == 'home'"></Homepage>-->

<!--   <pre>{{ data.site.route.node }}</pre>-->
</div>
</template>
<script setup>
const route = useRoute();
let the_path = `${route.path}`;
//let product_test = "/southern-indiana-fishing-map-guide/";
const query = gql`query{
   site {
     categoryTree {
      ...CategoryFields
      children {
        ...CategoryFields
        children {
          ...CategoryFields
        }
      }
    }
     route(path: "${the_path}") {
       node {
         __typename
         id
        ... on NormalPage {
          htmlBody
          id
          name
        }
        ... on Product {
					name
					description
					sku
					entityId
					addToCartUrl
					seo {
						pageTitle
						metaDescription
						metaKeywords
					}
					prices {
						price {
							currencyCode
							value
						}
					}
					productOptions {
						edges {
							node {
								entityId
								displayName
								isRequired
								isVariantOption
								... on CheckboxOption {
									checkedByDefault
								}
								... on MultipleChoiceOption {
									values(first: 10) {
										edges {
											node {
												entityId
												label
												isDefault
												... on SwatchOptionValue {
													hexColors
													imageUrl(width: 200)
												}
											}
										}
									}
								}
							}
						}
					}
					images {
						edges {
							node {
								urlOriginal
							}
						}
					}
					categories {
						edges {
							node {
								name
								path
							}
						}
					}
					brand {
						name
					}
					customFields {
						edges {
							node {
								name
								value
							}
						}
					}
				}


       }
     }
   }
 }
 fragment CategoryFields on CategoryTreeItem {
  name
  path
  entityId
}`;


 const { data, error, refresh } = await useAsyncQuery({
  query,
});
const type = ref(
  data.site?.route?.node?.__typename
);

console.log(data);

</script>
