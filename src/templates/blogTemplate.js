import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from 'styled-components';
import Img from "gatsby-image";
import Carousel from "nuka-carousel";
import { ExpandMoreRounded } from '@material-ui/icons';

export default function Template({data}) {
  return (
    <Layout>
      <div className="blog-container">
        <div className="blog">
          {data.allMarkdownRemark.edges.map(
            (post, i) => {
              return (
                <div>
                  <Carousel autoplay wrapAround >
                    { post.node.frontmatter.gallery_image.map(
                      (image, i) => {
                        return (
                          <div>
                            <Gallery>
                              <Img key={image.id} fadeIn fluid={image.childImageSharp.fluid} />
                            </Gallery>
                          </div>
                        )
                      }
                    )
                  }
                </Carousel>
                <TitleWrapper>
                    {post.node.frontmatter.title}
                <ExpandMoreRounded style={{ display: "block", padding: "10px", fontSize:"1em", textAlign:"center", width: "98%"  }}/>
                </TitleWrapper>
                <ContentWrapper>
                  <div
                    className="about"
                    dangerouslySetInnerHTML={{ __html: post.node.html }}
                  />
                </ContentWrapper>
              </div>
            )
          }
        )}
      </div>
    </div>
  </Layout>
  )
}

export const pageQuery = graphql`
{
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/events/"}}) {
    edges {
      node {
        id
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          path
          title
          gallery_image {
            id
            name
            absolutePath
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
          cover {
            id
            name
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

const TitleWrapper = styled.div`
  width: 97.5vw;
  height: 15vh;
  text-align: center;
  color: white;
  font-family: 'Concert One', cursive;
  font-size: 5em;
  background-color: #62EDD6;
  margin: 10px;
  right: 5vw;
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 19%;
  width: 60%;
  text-align: left;
  min-height: 200px;
  top: -100%;
  font-size: 2em;
  font-family: 'Open Sans', sans-serif;
`

const Gallery = styled.div`
  display: block;
  height: 70vh;
  padding 10px;
`

const Scroll = styled.div`
  display: block;
  font-size: .5em;
  padding: 20px;
`