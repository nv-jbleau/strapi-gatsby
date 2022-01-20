import { StaticQuery, graphql, Link } from "gatsby"
import * as React from "react"

const RecipeList = (props) => (
  props.queryData.allStrapiRecipe.nodes.map(node => {
    return node.data.map(data => {
    console.log('data', data)
    const { name, slug } = data.attributes;
      return (
        <div key={data.id}>
            <Link key={data.id} to={`/recipes/${slug}`}>{name} </Link>
        </div>
      )
    })
  })
);
  


export default RecipeList