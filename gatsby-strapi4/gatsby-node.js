const path = require(`path`)

let allStrapiRecipe = {};
let allStrapiRecipeFr = {};

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

// Create recipe pages dynamically
exports.createPages = async ({ graphql, actions, page, reporter }) => {
  const { createPage } = actions
  
  const recipeDetailTemplate = path.resolve(`src/templates/recipe-item.js`)
  const homeTemplate= path.resolve(`src/templates/index.js`)
  const recipeResult = await graphql(`
    query {
      allStrapiRecipe {
        edges {
          node {
            data {
              attributes {
                name
                slug
                description
                locale
                thumbnail {
                  data {
                    attributes {
                      localFile {
                        childImageSharp {
                          gatsbyImageData(
                            width: 250
                            height: 300
                            placeholder: BLURRED
                          )
                        }
                      }
                    }
                  }
                }
                localizations {
                  data {
                    attributes {
                      description
                      locale
                      name
                      slug
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  allStrapiRecipe = recipeResult.data;

  recipeResult.data.allStrapiRecipe.edges.forEach(edge => {
    edge.node.data.map(data => {
      // const res = JSON.stringify(data.attributes)  
      // English pages
      createPage({
        path: `${data.attributes.locale}/${data.attributes.slug}`,
        component: recipeDetailTemplate,
        context: {
          recipe: data.attributes,
        },
      })

      data.attributes.localizations.data.map(local => {
        allStrapiRecipeFr =  {...local.attributes, thumbnail: data.attributes.thumbnail},
        // French pages
        createPage({
          path:`${local.attributes.locale}/${local.attributes.slug}`,
          component: recipeDetailTemplate,
          context: {
            recipe:allStrapiRecipeFr,
          }
        })
      })
    })
  })

  createPage({
    path: `/en`,
    component: homeTemplate,
    context: {
      ...allStrapiRecipe
    }
  })

  createPage({
    path: `/fr`,
    component: homeTemplate,
    context: {
      ...allStrapiRecipe
    }
  })
  const categoryDetailTemplate = path.resolve(`src/templates/category-item.js`)
  const categoryResults = await graphql(`
    query {
      allStrapiCategory {
        edges {
          node {
            data {
              attributes {
                recipes {
                  data {
                    attributes {
                      slug
                      name
                    }
                    id
                  }
                }
                name
                slug
              }
            }
          }
        }
      }
    }
  `)

  categoryResults.data.allStrapiCategory.edges.forEach(edge => {
    edge.node.data.map(data=> {
      // const res = JSON.stringify(data.attributes)
      // reporter.log('********************************' + res)
      createPage({
        path:`/categories/${data.attributes.slug}`,
        component: categoryDetailTemplate,
        context: {
          category: data.attributes,
        },
      })
    })
  })
}



// exports.onCreatePage = ({ page, actions, reporter }) => {
//   const { createPage, deletePage } = actions
//   // const  res = JSON.stringify(page)  
//   // reporter.log('page' + res);

//   if (page.path === '/') {
//     deletePage(page)
//     createPage({
//       ...page,
//       context: {
//         ...page.context,
//         ...allStrapiRecipe
//       },
//     })
//   }
// }