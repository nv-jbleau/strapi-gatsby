import * as React from "react"
import Layout from "../components/layout";
import { Link } from "gatsby";


const renderList = (recipes) => {
  return recipes.data.map(recipe => {
    const {slug, name} = recipe.attributes
    return (
      <div id={name}>
        <Link to={`/recipes/${slug}`}>{name}</Link>
      </div>
    )
  })
}

const CategoryItem = ({pageContext}) => {
  console.log('context', pageContext)

  const {name, recipes} = pageContext.category;

  // const image = getImage(thumbnail.data.attributes.localFile);
    return(
      <Layout>
        <div>
          <h1>{name}</h1>
            {renderList(recipes)}
        </div>
      </Layout>
    )
  };

export default CategoryItem