import * as React from "react"
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const RecipeDetails = ({pageContext}) => {
  console.log('context', pageContext)

  const {name, description, thumbnail} = pageContext.recipe;
  console.log('pageContext', pageContext)

  const image = getImage(thumbnail.data.attributes.localFile);
  console.log('image', image)
    return(
      <Layout>
        <div>
          <h1>{name}</h1>
          <GatsbyImage image={image} alt={name}/>
          <p>{description}</p>
        </div>
      </Layout>
    )
  };

export default RecipeDetails