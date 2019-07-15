import React, { Component } from 'react';
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby';
import { Link } from "gatsby"
import BackgroundImg from "gatsby-background-image";
import { NavigateNextRounded } from '@material-ui/icons';

class Events extends Component {
    constructor(props) {
        super(props);
    }

    // use React lifecycle methods as needed

    render() {
        const { data } = this.props; // add more props here as needed
        return (
            <div style={{
                display: "block", height: "90%"
            }}>
              <div style={{
                display: "flex", height: "90%"
              }}>
                  {console.log(data)}
                    {this.props.data.allMarkdownRemark.edges.map(
                        (image, i) => {
                            return (
                              <Link to={image.node.frontmatter.path}>
                              <ContentWrapper>
                                  <BackgroundImg key={image.node.frontmatter.title} fadeIn={true} fluid={image.node.frontmatter.cover.childImageSharp.fluid}>
                                    <Hover>
                                      <TitleWrapper style={{ backgroundColor: this.props.BackgroundColors[i] }}>{image.node.frontmatter.title} ({image.node.frontmatter.date})</TitleWrapper>
                                    </Hover>
                                  </BackgroundImg>
                              </ContentWrapper>
                              </Link>
                            )
                        }
                    )}
                  </div>
                  <Link to="/events">
              <EventsWrapper> More Events<NavigateNextRounded style={{fontSize: "1em", top: "20px"}}/> </EventsWrapper>
            </Link>
            </div>
        );

    }

}
export default props => (

    <StaticQuery
        query={graphql`
        {
          allMarkdownRemark(limit: 3, sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "/events/"}}) {
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
    `}
        render={data => <Events data={data} {...props} />}
    />
);
const ContentWrapper = styled.div`
  width: 32vw;
  height: 50vh;
  overflow: hidden;
  padding: 10px;
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

const TitleWrapper = styled.div`
  text-align: left;
  height: 10vh;
  font-size: 2em;
  text-align: center;
  margin-top: 39vh;
  color: white;
  width: 100%;
  background-color: #62EDD6;
  font-family: 'Concert One', cursive;
  text-decoration: none !important;
`
const EventsWrapper = styled.div`
  display: block;
  text-align: center;
  height: 5vh;
  font-size: 2em;
  color: white;
  width: 100%;
  background-color: #FE65B7;
  font-family: 'Concert One', cursive;
`