const path = require(`path`)

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

// Create recipe pages dynamically
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const recipeDetailTemplate = path.resolve(`src/templates/recipe-item.js`)
  const result = await graphql(`
    query {
      allStrapiRecipe {
        edges {
          node {
            data {
              attributes {
                name
                slug
                description
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
              }
            }
          }
        }
      }
    }
  `)
  result.data.allStrapiRecipe.edges.forEach(edge => {
    edge.node.data.map(data => {

      const res = JSON.stringify(data.attributes)
      reporter.log('********************************' + res)
  
      createPage({
        path: `/recipes/${data.attributes.slug}`,
        component: recipeDetailTemplate,
        context: {
          recipe: data.attributes,
        },
      })
    })
  })
}