import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Moment from "react-moment"
import Layout from "../../components/layout"
import Markdown from "react-markdown"

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiRecipes(slug: { eq: $slug }) {
      strapiId
      title
      description
      published_at
      thumbnail {
        localFile {
          publicURL
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Article = ({ data }) => {
  const recipe = data.strapiRecipes
  console.log('recipe', recipe)
  const seo = {
    metaTitle: recipe.title,
    metaDescription: recipe.description,
    shareImage: recipe.thumbnail,
    article: true,
  }
  // return null
  return (
    <Layout seo={seo}>
      <div>
        <div style={{ display: "grid" }}>
          <GatsbyImage
            style={{
              gridArea: "1/1",
            }}
            alt={`Picture for ${recipe.title} recipe`}
            image={recipe.thumbnail[0].localFile.childImageSharp.gatsbyImageData}
            layout="fullWidth"
          />
          <div          >
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
          </div>
        </div>
        <div>
          <div>
            {/* <Markdown children={recipe.content} escapeHtml={false} /> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Article