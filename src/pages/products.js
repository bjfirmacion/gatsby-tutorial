import React from "react";
import { graphql, Link } from "gatsby";
import Layout from '../components/Layout';
import styles from '../components/products.module.css';
import Image from 'gatsby-image';

const ComponentName = ({ data }) => {
  const { allContentfulProduct: { nodes: products } } = data;

  return (
    <Layout>
      <section className={styles.page}>
        {products.map((product) => {
          console.log(product)
          return (
            <article key={product.id}>
              <Image fluid={product.image.fluid} alt={product.title}/>
              <h3>{product.title} <span>${product.price}</span></h3>
              <Link to={`/products/${product.slug}`}>more details</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        slug
      }
    }
  }
`

export default ComponentName
