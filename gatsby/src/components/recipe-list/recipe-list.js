import { StaticQuery, graphql } from "gatsby"
import * as React from "react"
import { Outlet, Link } from "react-router-dom";

const strapi3Query = graphql`
  query {
    allStrapiRecipes {
      edges {
        node {
          id
          title
          description
          thumbnail {
            url
          }
        }
      }
    }
  }
`

const renderList = (props) => (
    props.allStrapiRecipes.edges.map(page => {
      const data = page.node;
      return (
        <div key={data.id}>
          <Outlet />
            <Link key={data.id} to={`/recipes/${data.id}`}>{data.title} </Link>
        </div>
      )
    })
)

const RecipeList = () => (
  <StaticQuery
    query={strapi3Query}
    render={ queryData => renderList(queryData)}
  />
);
  


export default RecipeList