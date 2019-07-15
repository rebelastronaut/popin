import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImg from "gatsby-background-image"
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import styled from 'styled-components'

class Groups extends Component {
    constructor(props) {
        super(props);
    }
  backgroundcolors = [
    "#62EDD6",
    "#FE65B7",

  ]

  text = [
    "Saturday Group",
    "Tuesdays Art Group",
  ]
    // use React lifecycle methods as needed

    render() {
        return (
            <StyledWrapper>
                {this.props.data.AllPostImages.edges.map(
                    (image, i) => {
                        return (
                            <StyledSymetryWrapper>
                              {console.log(this.props)}
                            <BackgroundImg key={image.node.name} style={{ height: "100%" }} fadeIn="true" fluid={image.node.childImageSharp.fluid} backgroundColor={`#040e18`} >
                              <Onhover style={{ backgroundColor: this.props.BackgroundColors[i] }}>
                                <Title>{this.props.text[i]}</Title>
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
      query {
        AllPostImages: allFile(
          filter: { relativeDirectory: { regex: "/groups/" } }
          sort: {fields: [name], order: DESC}
        ) {
          edges {
            node {
              name
              childImageSharp {
                fluid(quality: 100, maxWidth: 300, maxHeight: 150) {
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
        render={data => <Groups data={data} {...props} />}
    />

);

const StyledSymetryWrapper = styled.div`
  width: 50vw;
  height: 50vh;
  overflow: hidden;
  padding: 10px;
  text-decoration: none !important;
  transition: 1s;
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
  height: 15vh;
  margin-top: 20vh;
  display: flex;
  overflow: hidden;
  text-align: center;
  text-decoration: none !important;
`
const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 4em;
  margin-top: 5vh;
  color: white;
  text-decoration: none !important;
  font-family: 'Concert One', cursive;
`