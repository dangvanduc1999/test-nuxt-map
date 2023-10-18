export default defineEventHandler(async (event) => {
  try {
    const runTimeConfig = useRuntimeConfig();

    const query = getQuery(event);

    const category_id = query["category_id"];
    for (const key in query) {
      if (!query[key]) delete query[key];
    }

    delete query["category_id"];

    const data = await $fetch("https://sandbox16.mybigcommerce.com/graphql", {
      method: "POST",
      headers: {
        "X-Auth-Token": runTimeConfig.public.accessToken,
        Authorization: runTimeConfig.public.authToken,
        "content-type": "application/json",
      },
      body: {
        operationName: "getStateRegionPerCategory",
        query: `query getStateRegionPerCategory {
          site {
            category(entityId: ${category_id}) {
              name
              products {
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
        }`,
        variables: query.variables ? JSON.parse(query.variables) : {},
      },
    });


    return { data };
  } catch (err) {
    console.log(err);
  }
});
