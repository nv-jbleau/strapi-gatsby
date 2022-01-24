import * as React from "react"
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const CategoryItem = ({pageContext}) => {
  console.log('context', pageContext)

  // const {name, description, thumbnail} = pageContext.recipe;

  // const image = getImage(thumbnail.data.attributes.localFile);
    return(
      <Layout>
        <div>
          Hi
          {/* <h1>{name}</h1>
          <GatsbyImage image={image} alt={name}/>
          <p>{description}</p> */}
        </div>
      </Layout>
    )
  };

export default CategoryItem