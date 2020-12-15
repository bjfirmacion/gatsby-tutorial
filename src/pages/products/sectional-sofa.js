import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => {
  const {title, price} = data.product;

  return (
    <div>
      <h2>{title}</h2>
      <h2>${price}</h2>
    </div>
  )
}

export const query = graphql`
  {
    product: contentfulProduct(slug: {eq: "sectional-sofa"}) {
      title
      price
    }
  }
`

export default ComponentName
