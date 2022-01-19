import { StaticQuery, graphql } from "gatsby"

import * as React from "react"
import { useParams } from "react-router-dom"

const query = graphql`
query {
    allStrapiRecipes(filter: {id: {eq: "Recipes_1"}}) {
        nodes {
          id
          title
          description
          thumbnail {
            url
          }
        }
    }
}
`

const render = (props) => {
    console.log('hi', props)
    return (
      props.allStrapiRecipes.edges.map(node => {
        console.log('node', node.node)
        const data = node.node;
        const imgUrl = data.thumbnail.map(details => details.url);
        return (
          <div key={data.id}>
            <h2>{data.title}</h2>
            <img src={`http://localhost:1337${imgUrl}`}/>
            <div>{data.description}</div>
          </div>
        )
      })
    )
}

const RecipeDetails = () => {
    // <StaticQuery
    //   query={strapi3Query}
    //   render={ queryData => renderList(queryData)}
    // />
    let params = useParams();
    console.log('params', params)
    return(
        <h1>Recipe Details {params.recipesId}</h1>
    )
  };

export default RecipeDetails