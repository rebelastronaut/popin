import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';

const Header = ({ siteTitle }) => (
  <header>
    <HeaderStyle>
        <Grid
          justify="space-between" // Add it here :)
          container
          spacing={16}
        >
            <TitleStyle>
              <StyledLink>
                <Link to="/about/" style={{color:"white"}}>About Us</Link>
              </StyledLink> 
              <StyledLink>            
                <Link to="/events/" style={{ color: "white" }}>Events</Link>
              </StyledLink>
              <StyledLink>Join Us</StyledLink>
            </TitleStyle>
              pop in
            <TitleStyle>
              <StyledLink>Volunteer</StyledLink>
              <StyledLink>Donate</StyledLink>
          </TitleStyle>
        </Grid>
    </HeaderStyle>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const HeaderStyle = styled.div`
  height: 100px;
  display: flex;
  overflow: hidden;
  background: #FE65B7;

`

const StyledLink = styled(props => <Link {...props} />)`
  color: white;
  font-family: 'Concert One', cursive;
  padding: 10px;
  font-size: 1.5em;
    &:hover {
      color: black;
    }
`;

const TitleStyle = styled.div`
  width: calc(100% / 3);  
  display: inline-block;
  vertical-align: top;   
  text-align:center;
  margin:20px;    
  padding:10px;
  `