import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import BackgroundImg from "gatsby-background-image"
import "../components/layout.css"

const Events = ({ data }) => (
    <div>
        <Layout>
            <SEO title="Home" />
            {data.allMarkdownRemark.edges.map(
                (post, i) => {
                    return (
                        <ContentWrapper>
                            <Link to={post.node.frontmatter.path}>
                                <BackgroundImg fluid={post.node.frontmatter.cover.childImageSharp.fluid} fadeIn={true}>
                                    <Hover>
                                        <TitleWrapper>{post.node.frontmatter.title} ({post.node.frontmatter.date})</TitleWrapper>
                                    </Hover>
                                </BackgroundImg>
                            </Link>
                        </ContentWrapper>
                    )
                }
            )}
        </Layout>
    </div>
)

export default Events


export const pageQuery = graphql`
{
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "/events/"}}) {
    edges {
      node {
        id
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          path
          title
          cover {
            childImageSharp {
              fluid {
                base64
                tracedSVG
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                originalImg
                originalName
                presentationWidth
                presentationHeight
              }
            }
          }
        }
      }
    }
  }
}
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 19%;
  width: 60%;
  text-align: left;
  height: 50vh;
  font-size: 2em;
  margin: 20px;
  font-family: 'Open Sans', sans-serif;
`
const TitleWrapper = styled.div`
  margin: 20px;
  text-align: left;
  height: 10vh;
  font-size: 1.5em;
  text-align: center;
  margin-top: 39vh;
  color: white;
  width: 100%;
  background-color: #62EDD6;
  font-family: 'Concert One', cursive;
  text-decoration: none !important;
`
const Hover = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  overflow: hidden;
  text-align: center;
  text-decoration: none !important;
  color: white
`