import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImg from "gatsby-background-image"
import styled from 'styled-components'
import { Link } from "gatsby"

class Hero extends Component {
  constructor(props) {
    super(props);
  }
  backgroundcolors = [
    "#E9C904",
    "#8FC33A",
    "#62EDD6"
  ]

  text = [
    "We",
    "Are",
    "Pop In"
  ]
  // use React lifecycle methods as needed

  render() { 
    return (
      <StyledWrapper>
        {this.props.data.AllPostImages.edges.map(
          (image, i ) => {
            return (
              <StyledSymetryWrapper>
                <Link to="/about#Who-We-Are">
                  <BackgroundImg 
                    key={image.node.name} 
                    style={{ height: "100%" }}
                    fadeIn={true} 
                    fluid={image.node.childImageSharp.fluid}>
                    <Onhover>
                      <MenuLink style={{ backgroundColor: this.backgroundcolors[i] }}>{this.text[i]}</MenuLink>
                    </Onhover>
                  </BackgroundImg>
                </Link>
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
      query {
        AllPostImages: allFile(
          filter: { relativeDirectory: { regex: "/hero/" } }
          sort: {fields: [name], order: DESC}
        ) {
          edges {
            node {
              name
              childImageSharp {
                fluid(maxWidth: 300, maxHeight: 150) {
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
      }
    `}
    render={data => <Hero data={data} {...props} />}
  />

);

const StyledSymetryWrapper = styled.div`
  width: 33vw;
  height: 87vh;
  overflow: hidden;
  padding: 10px;
`
const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  text-decoration: none;
`
const Onhover = styled.div`
  width: 100%;
  height: 25vh;
  margin-top: 50vh;
  display: flex;
  overflow: hidden;
  text-align: center;
  text-decoration: none !important;
  color: white
`
const MenuLink = styled.div`
  width: 100%;
  height: 80vh;
  text-align: center;
  font-size: 5em;
  margin-top: 10vh;
  text-decoration: none !important;
  font-family: 'Concert One', cursive;
`