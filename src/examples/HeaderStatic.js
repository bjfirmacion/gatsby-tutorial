import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          info: siteMetadata {
            author
            description
            title
          }
        }
      }
    `}
    render={apple => <h4>{apple.site.info.description}</h4>}
  ></StaticQuery>
)

export default ComponentName
