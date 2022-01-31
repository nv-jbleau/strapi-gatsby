import * as React from "react"
import { graphql,  StaticQuery } from "gatsby"
import 'bootstrap/dist/css/bootstrap.css';

import Layout from "../components/layout"
import Seo from "../components/seo"
import RecipeList from "../components/recipe-list/recipe-list"
import CategoryList from "../components/category-list/category-list"
import SearchTabs from "../components/search-tabs/search-tabs"
import MultiSelect from "../components/multiselect/multiselect";


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
    <MultiSelect/>
    <SearchTabs/>
    <h2>Recipe</h2>
    <StaticQuery
      query={query}
      render={
         queryData =>
          <RecipeList
           list={
             queryData.allStrapiRecipe.nodes.map(node => node.data)
            }
          />
        }
    />
    <h2 style={{paddingTop: 25 + 'px'}}>Category</h2>
    <CategoryList/>
  </Layout>
)

export default IndexPage
