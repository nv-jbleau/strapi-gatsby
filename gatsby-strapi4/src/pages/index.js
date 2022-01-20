import * as React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import RecipeList from "../components/recipe-list/recipe-list"


const query = graphql`
  query {
    allStrapiRecipe {
      nodes {
        data {
          id
          attributes {
            description
            name
            slug
            thumbnail {
              data {
                id
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <StaticQuery
      query={query}
      render={ queryData => <RecipeList queryData={queryData}/>}
    />
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
