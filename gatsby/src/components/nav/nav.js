import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

const Nav = () => (
  <StaticQuery
    query={graphql`
      query {
        allStrapiRecipes {
          edges {
            node {
              slug
              title
            }
          }
        }
      }
    `}
    render={(data) => (
      render(data)
    )}
  />
);

const render = (data) => {
  console.log('data', data)
  return (
    <nav>
      <div>
        <h2>
          Recipes
        </h2>
        <div>
          <ul>
            {data.allStrapiRecipes.edges.map((category, i) => (
              <li key={`recipe__${category.node.slug}`}>
                <Link to={`/recipe/${category.node.slug}`}>
                  {category.node.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;