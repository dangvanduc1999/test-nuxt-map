export default defineEventHandler(async (event) => {
  try {
    const runTimeConfig = useRuntimeConfig();

    const query = getQuery(event);
    
    const path = query["product_path"];
    
    for (const key in query) {
      if (!query[key]) delete query[key];
    }

    delete query["product_path"];

    const data = await $fetch("https://sandbox16.mybigcommerce.com/graphql", {
      method: "POST",
      headers: {
        "X-Auth-Token": runTimeConfig.public.accessToken,
        Authorization: runTimeConfig.public.authToken,
        "content-type": "application/json",
      },
      body: {
        operationName: "LookUpUrl",
        query: `query LookUpUrl{
          site {
            route(path: "${path}") {
              node {
                __typename
                id
                ... on Product {
                  name
                  description
                  sku
                  entityId
                  addToCartUrl
                  reviews {
                    edges {
                      node {
                        entityId
                        author {
                          name
                        }
                        title
                        text
                        rating
                        createdAt {
                          utc
                        }
                      }
                    }
                  }
                  relatedProducts {
                    edges {
                      node {
                        path
                        name
                        description
                        sku
                        entityId
                        addToCartUrl
                        images {
                          edges {
                            node {
                              urlOriginal
                              altText
                            }
                          }
                        }
                        prices {
                          price {
                            currencyCode
                            value
                          }
                        }
                      }
                    }
                    pageInfo {
                      hasNextPage
                      hasPreviousPage
                      startCursor
                      endCursor
                    }
                  }
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
                  variants {
                    edges {
                      node {
                        sku
        
                        entityId
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
                      }
                    }
                  }
        
                  variants {
                    edges {
                      node {
                        sku
                      }
                    }
                  }
                  images {
                    edges {
                      node {
                        urlOriginal
                        altText
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
                ... on Category {
                  entityId
                  name
                  path
                  seo {
                    pageTitle
                    metaDescription
                    metaKeywords
                  }
                  defaultImage {
                    urlOriginal
                  }
                  description
                  products(first: 50) {
                    edges {
                      node {
                        seo {
                          pageTitle
                          metaDescription
                          metaKeywords
                        }
                        reviews {
                          edges {
                            node {
                              entityId
                              author {
                                name
                              }
                              title
                              text
                              rating
                              createdAt {
                                utc
                              }
                            }
                          }
                        }
                        entityId
                        path
                        sku
                        name
                        path
                        brand {
                          name
                        }
                        images {
                          edges {
                            node {
                              urlOriginal
                            }
                          }
                        }
                        variants(first: 60) {
                          edges {
                            node {
                              sku
                              entityId
                              inventory {
                                isInStock
                              }
                              prices {
                                price {
                                  value
                                }
                              }
                              options {
                                edges {
                                  node {
                                    displayName
                                    entityId
                                    values {
                                      edges {
                                        node {
                                          label
                                          entityId
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        prices {
                          price {
                            value
                            formatted
                          }
                          basePrice {
                            value
                            formatted
                          }
                          retailPrice {
                            value
                          }
                          salePrice {
                            value
                          }
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
                    collectionInfo {
                      totalItems
                    }
                    pageInfo {
                      hasNextPage
                      hasPreviousPage
                      startCursor
                      endCursor
                    }
                  }
                }
              }
            }
          }
        }`,
        variables: query.variables ? JSON.parse(query.variables) : {},
      },
    });

    console.log(data);

    return { data };
  } catch (err) {
    console.log(err);
  }
});