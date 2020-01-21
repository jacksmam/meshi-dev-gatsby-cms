import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import { GlobalStyle } from '../GlobalStyle';
import { Meta, MetaType } from '../components/Meta';
import { Header } from '../components/Header';
import { LatestBlogRoll } from '../components/LatestBlogRoll'

const indexPageMeta: MetaType = {
  title: '飯を食うデブ',
  description: 'テスト'
}

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}: any) => (
  <div>
    <Meta meta={indexPageMeta}/>
    <GlobalStyle />
    <Header></Header>
    <div className="section is-large">
      <h1 className="title is-1">新着記事</h1>
      <LatestBlogRoll />
    </div>
    
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }: any) => {
  const { frontmatter } = data.markdownRemark

  return (
    <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
      markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        frontmatter {
          title
          heading
          subheading
          mainpitch {
            title
            description
          }
          description
          intro {
            blurbs {
              text
            }
            heading
            description
          }
        }
      }
    }
`
