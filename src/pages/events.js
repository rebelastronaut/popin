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
            <Wrapper>
              {console.log(this)}
              {data.allMarkdownRemark.edges.map(
                (post, i) => {
                    return (
                        <ContentWrapper>
                          <Link to={"/events/" + post.node.frontmatter.title.toLowerCase()}>
                              <BackgroundImg fluid={post.node.frontmatter.cover.childImageSharp.fluid} fadeIn={true}>
                                  <ImgWrapper>
                                      <TitleWrapper>
                                        <FontWrapper>{post.node.frontmatter.title} ({post.node.frontmatter.date})</FontWrapper>  
                                      </TitleWrapper>
                                  </ImgWrapper>
                              </BackgroundImg>
                          </Link>
                      </ContentWrapper>
                    )
                  }
              )}
          </Wrapper>
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
          date(formatString: "DD-MM-YYYY")
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ContentWrapper = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  padding-left: 10%;
  width: 80%;
  text-align: centre;
  margin-bottom: 20px;
  margin-top: 20px;
`
const TitleWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 20%;
  height: 23%;
  line-height: 50px;
  background-color: #62EDD6;
`
const FontWrapper = styled.div`
  text-align: center;
  font-size: 3em;
  color: white;
  height: 100px;
  white-space: pre-wrap;
  font-family: 'Concert One', cursive;
`

const ImgWrapper = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 20px;
`