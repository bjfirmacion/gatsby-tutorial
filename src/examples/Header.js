import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
  {
  site {
    info:siteMetadata {
      author
      description
      title
    }
}
}
`

function Header() {
  const { site: { info: { title} } } = useStaticQuery(getData);

  return (
    <div>
      {/* <h1>title: {data.site.info.title}</h1> */}
      {/* <h1>name: {data.site.info.person.name}</h1> */}
      <h1>title: {title}</h1>
    </div>
  )
}

export default Header
