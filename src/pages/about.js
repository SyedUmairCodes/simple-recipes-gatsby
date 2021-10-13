import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="About page" description="This is the about page." />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>The best collection of recipes online!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tincidunt egestas lectus vel molestie. Fusce faucibus pellentesque
              dolor, at semper erat suscipit at. Cras volutpat tortor at risus
            </p>
            <p>
              Duis accumsan condimentum est, id cursus libero posuere sed. Nam
              sed urna sodales,lacinia vitae quam.
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="pouring salt"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at our featured recipes</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
