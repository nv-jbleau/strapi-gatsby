import { Link } from "gatsby"
import * as React from "react"

const renderListItem = (props) => {
  return props.list.edges.map(edge => {
    return edge.node.data.map(data =>{
      const {name, slug, locale} = data.attributes
      return (
        <div key={data.id}>
            <Link key={data.id} to={`${locale}/${slug}`}>{name} </Link>
        </div>
      )
    })
  })
};


const RecipeList = (props) => {
  return (
    <div>
      <h2>Recipes</h2>
      {renderListItem(props)}
    </div>
  )
}

export default RecipeList