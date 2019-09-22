import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'

const Header = ({ siteTitle }) => (
  <header>
    <HeaderStyle>
      <MobileStyle>
        <FaBars style={{position: "absolute", top:"10px", left: "12px"}}/>
        <Menu>
          <Link>Home</Link>
          <Link>About</Link>
        </Menu>
        <DropdownMenu>

        </DropdownMenu>
      </MobileStyle>
      <TitleStyle>
        <StyledLink to="/about/">
          About Us
        </StyledLink>   
        <StyledLink to="/events/">
            Events
        </StyledLink> 
        <StyledLink>
          Join Us
        </StyledLink>
      </TitleStyle>
      <StyledLink>
        <Link to="/" style={{ color: "white", fontSize:"2em"  }}>pop in </Link>
      </StyledLink>
      <TitleStyle>
        <StyledLink>Volunteer</StyledLink>
        <StyledLink>Donate</StyledLink>
      </TitleStyle>
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
  flex-direction: row;
`

const StyledLink = styled(props => <Link {...props} />)`
  color: white;
  font-family: 'Concert One', cursive;
  padding: 10px;
  text-align: center;
  flex-grow: 1;
  flex-shrink: 1;
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
  @media (max-width: 950px) {
    display: none;
  }
  `

const MobileStyle = styled.div`
  font-size: 3em;
  color: white;
  position: absolute;
  text-align: center;
  margin: 10px;
  border-radius: 20px;
  width 70px;
  height: 70px;
  left: 30px;
  @media (min-width: 950px) {
    display: none;
  }
  `
const DropdownMenu = styled.div`

`
const Menu = styled.div`
  display: none;
  &:checked { 
    display: block
  }
`