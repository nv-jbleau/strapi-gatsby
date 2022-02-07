import * as React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import '../components/i18n/i18n'

import Layout from "../components/layout"
import Seo from "../components/seo"
import RecipeList from "../components/recipe-list/recipe-list"
import CategoryList from "../components/category-list/category-list"
import SearchTabs from "../components/search-tabs/search-tabs"
import MultiSelect from "../components/multiselect/multiselect";



const IndexPage = (props) => {

  console.log('home', props)
  return (
    <Layout>
      <Seo title="Home" />
      <MultiSelect/>
      <SearchTabs/>
      <RecipeList list={props.pageContext.allStrapiRecipe}/>
      <h2 style={{paddingTop: 25 + 'px'}}>Category</h2>
      <CategoryList/>
    </Layout>
  )
}

// export default withTranslation()(IndexPage)
export default IndexPage
