import React, { Component } from 'react';
import { StaticQuery, graphql, Link} from 'gatsby';
import BackgroundImg from "gatsby-background-image"
import styled from 'styled-components'

class Groups extends Component {
  constructor(props) {
    super(props);
    this.path = "";
    if (this.props.path !== "/static_pages/") {
      this.path = this.props.path;
    }
  }

    render() {
        return (
          <StyledWrapper>
            {this.props.data.allMarkdownRemark.edges.map(
                  (image, i) => {
                  if (image.node.fileAbsolutePath.includes(this.props.path))
                      return (
                      <StyledSymetryWrapper to={this.path + image.node.frontmatter.title.toLowerCase().split(" ").join("_")}>
                        <BackgroundImg key={image.node.name} style={{ height: "100%", borderRadius:"20px" }} fadeIn="true" fluid={image.node.frontmatter.cover.childImageSharp.fluid} >
                          <Onhover style={{ backgroundColor: this.props.BackgroundColors[i % this.props.BackgroundColors.length]}}>
                            <Title>{image.node.frontmatter.title}</Title>
                          </Onhover>
                        </BackgroundImg>
                      </StyledSymetryWrapper>
                      )
                  }
              )}
          </StyledWrapper>
        );

    }

}
export default props => (

    <StaticQuery
        query={graphql`
        {
          allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
            edges {
              node {
                id
                fileAbsolutePath
                frontmatter {
                  date
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
    `}
        render={data => <Groups data={data} {...props} />}
    />

);

const StyledWrapper = styled.div`
  width: 100%;
  height: 30vh;
  min-height: 600px;
  border-radius: 20;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const StyledSymetryWrapper = styled(props => <Link {...props} />)`
  overflow: hidden;
  padding: 10px;
  min-width: 300px;
  flex-grow: 1;
  flex-shrink: 1;
`

const Onhover = styled.div`
  position: absolute;
  width: 100%;
  bottom: 10%;
  height:130px;
`
const Title = styled.div`
  font-size: 4em;
  color: white;
  position: relative;
  text-align: center;
  margin: 10px;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Concert One', cursive;
`