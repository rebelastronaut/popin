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
                <Link to="/about">
                  <BackgroundImg 
                    key={image.node.name} 
                    style={{ height: "100%", borderRadius: "20px" }}
                    fadeIn={true} 
                    fluid={image.node.childImageSharp.fluid}>
                    <Onhover>
                      <Title style={{ backgroundColor: this.backgroundcolors[i] }}>{this.text[i]}</Title>
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

const StyledWrapper = styled.div`
  width: 100%;
  height: 87vh;
  min-height: 600px;
  border-radius: 20;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const StyledSymetryWrapper = styled.div`
  overflow: hidden;
  padding: 10px;
  min-width: 300px;
  flex-grow: 1;
  flex-shrink: 1;
  border-radius: 20;
`

const Onhover = styled.div`
  position: absolute;
  width: 100%;
  bottom: 20%;
`
const Title = styled.div`
  text-align: center;
  font-size: 5em;
  color: white;
  height: 100px;
  font-family: 'Concert One', cursive;
`