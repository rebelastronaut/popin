import React, { Component } from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';
import BackgroundImg from "gatsby-background-image";

class Events extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    const isEvents = this.props.path === "/events/";
    const isStatic = this.props.path === "/static_pages/";

    return (
        <div>
          <EventsWrapper>
            {this.props.data.allMarkdownRemark.edges.map(
                (image, i) => {
                  if (image.node.fileAbsolutePath.includes(this.props.path))
                    return (
                      <ContentWrapper>
                        {isStatic ? (
                          <Link to={image.node.frontmatter.title.toLowerCase().split(" ").join("_")}>
                            <BackgroundImg key={image.node.frontmatter.title} style={{ height: "100%", borderRadius: "20px"}} fadeIn={true} fluid={image.node.frontmatter.cover.childImageSharp.fluid}>
                              <Hover>
                                <TitleWrapper style={{ backgroundColor: this.props.BackgroundColors[i % this.props.BackgroundColors.length] }}>{image.node.frontmatter.title} </TitleWrapper>
                              </Hover>
                            </BackgroundImg>
                          </Link>):(
                          <Link to={this.props.path + image.node.frontmatter.title.toLowerCase().split(" ").join("_")}>
                            <BackgroundImg key={image.node.frontmatter.title} style={{ height: "100%", borderRadius: "20px" }} fadeIn={true} fluid={image.node.frontmatter.cover.childImageSharp.fluid}>
                              <Hover>
                                <TitleWrapper style={{ backgroundColor: this.props.BackgroundColors[i % this.props.BackgroundColors.length] }}>{image.node.frontmatter.title}  {isEvents ? ((image.node.frontmatter.date)) : (<div />)}</TitleWrapper>
                              </Hover>
                            </BackgroundImg>
                          </Link>
                        )}
                      </ContentWrapper>
                    )
                }
            )}
          </EventsWrapper>
          {isEvents ? (
            <Link to={this.props.path}>
              <MoreEventsWrapper>
                <MoreEvents> More Events</MoreEvents>
              </MoreEventsWrapper>
            </Link>
            ):(<div/>)
          }
        </div>
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
  // overflow: hidden;
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