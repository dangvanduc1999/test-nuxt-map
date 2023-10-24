export default defineEventHandler(async (event) => {
  try {
    const runTimeConfig = useRuntimeConfig();

    const query = getQuery(event);

    const categoryId = query["categoryId"];
    const productAttr =  `productAttributes:[${query["productAttr"]}]`;

    const $cursor = query["cursor"];
    
    for (const key in query) {
      if (!query[key]) delete query[key];
    }

    delete query["categoryId"];
    delete query["productAttr"];
    delete query["cursor"];

    const data = await $fetch("https://sandbox16.mybigcommerce.com/graphql", {
      method: "POST",
      headers: {
        "X-Auth-Token": runTimeConfig.public.accessToken,
        Authorization: runTimeConfig.public.authToken,
        "content-type": "application/json",
      },
      body: {
        operationName: "getStateRegionPerCategory",
        query: `query getStateRegionPerCategory($cursor: String = null) {
  site {
    search {
      searchProducts(
        filters: {searchSubCategories: false categoryEntityId:${categoryId} ${productAttr} }
      ) {
        products(first: 10, after: $cursor) {
          collectionInfo {
            totalItems
          }
          edges {
            cursor
            node {
              customFields {
                edges {
                  node {
                    name
                    value
                  }
                }
              }
              path
            }
          }
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
        }
      }
    }
  }
}`,
        variables: {
          cursor: $cursor
        },
      },
    });

    return { data };
  } catch (err) {
    console.log(err);
  }
});
