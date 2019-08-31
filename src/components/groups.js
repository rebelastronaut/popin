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
                            <BackgroundImg key={image.node.name} style={{ height: "100%", borderRadius:"20px" }} fadeIn="true" fluid={image.node.childImageSharp.fluid} backgroundColor={`#040e18`} >
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

const StyledWrapper = styled.div`
  width: 100%;
  height: 30vh;
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