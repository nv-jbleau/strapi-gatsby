import * as React from "react"
import {HashRouter, Route, Routes,} from 'react-router-dom'
import Layout from "../components/layout"
import RecipeList from "../components/recipe-list/recipe-list";
import RecipeDetails from "../components/recipe-list/recipe-item";


// const client = new ApolloClient({
//   uri: 'http://localhost:8000/',
//   cache: new InMemoryCache(),
//   fetchOptions: {
//     mode:'no-cors'
//   }
// })

// client.query({
//   query: gql`
//     query {
//       allStrapiRecipes {
//         edges {
//           node {
//             id
//             title
//             description
//             thumbnail {
//               url
//             }
//           }
//         }
//       }
//     }
//   `
// }).then(result => console.log('results', result))

// client.query({
//   query: gql`
//     query GetRates {
//       rates(currency: "USD") {
//         currency
//       }
//     }
//   `
// }).then(result => console.log('results', result))

const IndexPage = () => (
    <Layout>
      <HashRouter>
        <Routes>
          <Route path='/' element={<RecipeList/>}/>
          <Route path='recipes' element={<RecipeDetails/>}>
            <Route path=':recipesId' element={<RecipeDetails/>}/>
          </Route>
          <Route
            path="*"
            element={
              <main style={{padding: "1rem"}}>
                <p>Nothing here</p>
              </main>
            }
          />
        </Routes>
      </HashRouter>
    </Layout>


)

export default IndexPage
