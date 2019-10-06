import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
// import Post from '../components/Post'
import Sidebar from '../components/Sidebar'
import './index.scss'

class IndexRoute extends React.Component {
  render() {
    // const items = []
    const { title, subtitle } = this.props.data.site.siteMetadata
    const page = this.props.data.markdownRemark
    // const posts = this.props.data.allMarkdownRemark.edges
    /* posts.forEach(post => {
      items.push(<Post data={post} key={post.node.fields.slug} />)
    }) */

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={subtitle} />
          </Helmet>
          <Sidebar {...this.props} />
          <div className="content">
            <div className="content__inner">
              <div className="page">
                <h1 className="page__title">{page.frontmatter.title}</h1>
                <div
                  className="page__body"
                /* eslint-disable-next-line react/no-danger */
                  dangerouslySetInnerHTML={{ __html: page.html }}
                />
              </div>

            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexRoute

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          telegram
          twitter
          github
          rss
          vk
        }
      }
    }
    markdownRemark(fileAbsolutePath: { regex: "/index.md/" }) {
      id
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`
