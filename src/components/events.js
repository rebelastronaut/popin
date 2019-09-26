import React, { Component } from 'react';
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby';
import BackgroundImg from "gatsby-background-image";

class Events extends Component {
    constructor(props) {
        super(props);
    }

    // use React lifecycle methods as needed

    render() {
        return (
            <div>
              <EventsWrapper>
              {console.log(this)}
                {this.props.data.allMarkdownRemark.edges.map(
                    (image, i) => {
                        return (
                          <ContentWrapper>
                            {console.log(this)}
                            <Link to={"/events/" + image.node.frontmatter.title.toLowerCase()}>
                              <BackgroundImg key={image.node.frontmatter.title} style={{ height: "100%", borderRadius: "20px"}} fadeIn={true} fluid={image.node.frontmatter.cover.childImageSharp.fluid}>
                                <Hover>
                                  <TitleWrapper style={{ backgroundColor: this.props.BackgroundColors[i] }}>{image.node.frontmatter.title} ({image.node.frontmatter.date})</TitleWrapper>
                                </Hover>
                              </BackgroundImg>
                            </Link>
                          </ContentWrapper>
                        )
                    }
                )}
              </EventsWrapper>
              <Link to="/events">
                <MoreEventsWrapper>
                  <MoreEvents> More Events</MoreEvents>
                </MoreEventsWrapper>
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

const EventsWrapper = styled.div`
  width: 100%;
  height: 50vh;
  max-height: 50vh;
  overflow-y:hidden;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
`

const ContentWrapper = styled.div`
  overflow: hidden;
  padding: 10px;
  min-width: 300px;
  min-height: 48vh;
  flex-grow: 1;
  flex-shrink: 1;
`
const Hover = styled.div`
  position: absolute;
  width: 100%;
  bottom: 10%;
  height:130px;
`

const TitleWrapper = styled.div`
  text-align: center;
  font-size: 2em;
  color: white;
  height: 100px;
  font-family: 'Concert One', cursive;
`

const MoreEventsWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: block;
  background-color: #FE65B7;
  border-radius: 20px;
`

const MoreEvents = styled.div`
  text-align: center;
  font-size: 2em;
  color: white;
  font-family: 'Concert One', cursive;

`