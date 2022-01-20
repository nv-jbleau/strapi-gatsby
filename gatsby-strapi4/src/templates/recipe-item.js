import { StaticQuery, graphql } from "gatsby"

import * as React from "react"


const RecipeDetails = ({pageContext}) => {
  console.log('context', pageContext)

  const {name, description} = pageContext.recipe
    return(
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    )
  };

export default RecipeDetails