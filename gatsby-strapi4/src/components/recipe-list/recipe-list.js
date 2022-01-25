import { StaticQuery, graphql, Link } from "gatsby"
import * as React from "react"

const RecipeList = (props) => {
  return props.list.map(data => {
   return data.map(dataObj => { 
     console.log(dataObj)
    const { name, slug, id } = dataObj.attributes;
      return (
        <div key={dataObj.id}>
            <Link key={dataObj.id} to={`/recipes/${slug}`}>{name} </Link>
        </div>
      )
    })
  })
};
  


export default RecipeList