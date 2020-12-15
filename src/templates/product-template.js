import React from "react";
import { graphql, Link } from "gatsby";
import Layout from '../components/Layout';
import Image from 'gatsby-image';

const ComponentName = ({ data: { product } }) => {
  const { title, price, image: { fixed }, info: { info } } = product;

  return (
    <Layout>
      <div styles={{ textAlign: "center" }}>
        <Link to="/products">Back to products</Link>
        <h1>single product: {title}</h1>
      </div>
      <section className="single-product">
        <article>
          <Image fixed={fixed} alt={title} />
        </article>
        <article>
          <h1>{title}</h1>
          <h3>${price}</h3>
          <p>{info}</p>
          <button>add to cart</button>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug:String) {
    product: contentfulProduct(slug: {eq: $slug}) {
      title
      price
      info {
        info
      }
      image {
        fixed (width: 300) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`

export default ComponentName
