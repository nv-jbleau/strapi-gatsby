import { Link } from "gatsby"
import * as React from "react"
import { useI18n } from "../i18n/i18n";

const renderListItem = ({list}) => {
  return list.edges.map(edge => {
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
  const {list} = props; 
  const i18n = useI18n(list);

  
  return (
    <div>
      <h2>Recipes</h2>
      {renderListItem(props)}
    </div>
  )
}

export default RecipeList