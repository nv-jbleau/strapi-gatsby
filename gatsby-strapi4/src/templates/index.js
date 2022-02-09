import * as React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import '../components/i18n/i18n'

import Layout from "../components/layout"
import Seo from "../components/seo"
import RecipeList from "../components/recipe-list/recipe-list"
import CategoryList from "../components/category-list/category-list"
import SearchTabs from "../components/search-tabs/search-tabs"
import MultiSelect from "../components/multiselect/multiselect";
import { useI18n } from "../components/i18n/i18n";
import GlobalContext from "../context/global-context";



const IndexPage = ({pageContext}) => {
  const {allStrapiRecipe: recipes} = pageContext

 

  console.log('home', recipes)
  return (
    <GlobalContext.Provider value= {{instance: recipes}}>
      <Layout>
        <Seo title="Home" />
        <MultiSelect/>
        <SearchTabs/>
        <RecipeList list={recipes}/>
        <h2 style={{paddingTop: 25 + 'px'}}>Category</h2>
        <CategoryList/>
      </Layout>
    </GlobalContext.Provider>
  )
}

export default IndexPage
