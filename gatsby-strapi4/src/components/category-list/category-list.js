import { StaticQuery, graphql, Link } from "gatsby"
import * as React from "react"

const categoryQuery = graphql`
  query {
    allStrapiCategory {
      edges {
        node {
          data {
            attributes {
              name
              slug
            }
            id
          }
        }
      }
    }
  }
`

const render = (queryData) => {
  return queryData.allStrapiCategory.edges.map(edge => {
    return edge.node.data.map(data => {
    const { name, slug } = data.attributes;
      return (
        <div key={data.id}>
            <Link key={data.id} to={`/categories/${slug}`}>{name} </Link>
        </div>
      )
    })
  })
};
  
const CategoryList = () => (
  <StaticQuery query={categoryQuery} render={queryData => render(queryData)}/>
)

export default CategoryList