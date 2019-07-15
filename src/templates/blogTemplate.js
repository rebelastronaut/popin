import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from 'styled-components'
import Img from "gatsby-image"
import Carousel from "nuka-carousel"
import { ExpandMoreRounded } from '@material-ui/icons';

export default function Template({data}) {
  return (
    <Layout>
      <div className="about-container">
        <div className="about">
          <Carousel autoplay wrapAround >
            {data.images.edges.map(
              (image, i) => {
                return (
                  <Gallery>
                    <div>
                      <Img key={image.node.name} fadeIn fluid={image.node.childImageSharp.fluid} />
                    </div>
                  </Gallery>
                )
              }
            )}
          </Carousel>
            {console.log(data.images)}
          <TitleWrapper>
              {data.project.frontmatter.title}
            <ExpandMoreRounded style={{ display: "block", padding: "10px", fontSize:"1em", textAlign:"center", width: "98%"  }}/>
            </TitleWrapper>
          <ContentWrapper>
            <div
              className="about"
              dangerouslySetInnerHTML={{ __html: data.project.html }}
            />
          </ContentWrapper>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
query($path: String!, $absolutePathRegex: String!) {
  images: allFile(
    filter: {
      absolutePath: { regex: $absolutePathRegex }
      extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
    }
    sort: { fields: name, order: ASC }
  ) {
    edges {
      node {
        name
        childImageSharp {
          fluid {
            originalName
            src
            srcSet
            aspectRatio
            sizes
          }
        }
      }
    }
  }
  project: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
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