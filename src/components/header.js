import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import { FaBars, FaTimes } from 'react-icons/fa'
import { disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';

export default class Header extends React.Component {
  state = {
    showMenu: false,
  }

  componentDidMount = () => {
    this.setState({ showMenu: false });
  }

  handleClick = (e, index) => {
    e.preventDefault()
    this.setState({ showMenu: !this.state.showMenu });
    disableBodyScroll(this.targetElement);
  };

  closeModal = () => {
    this.setState({ showMenu: false })
    enableBodyScroll(this.targetElement);
  }

  render() {
    return(
      <header>
        <HeaderStyle>
          <MobileStyle>
            <FaBars onClick={this.handleClick} style={{position: "absolute", top:"10px", left: "0px"}}/>
            <DropdownMenu visible={this.state.showMenu}>
              <StyledLink onClick={this.closeModal} to="/about_us"> About Us</StyledLink>
              <StyledLink onClick={this.closeModal} to="/events"> Events</StyledLink>
              <StyledLink onClick={this.closeModal} to="/find_us"> Find US</StyledLink>
              <StyledLink onClick={this.closeModal} to="/groups"> Join Us</StyledLink>
              <StyledLink onClick={this.closeModal} to="volunteer_with_us"> Volunteer</StyledLink>
              <StyledLink onClick={this.closeModal} to="/donate"> Donate</StyledLink>

              <FaTimes onClick={this.closeModal} style={{ fontSize: "1.5em" }} />
            </DropdownMenu>
          </MobileStyle>
          <TitleStyle>
            <StyledLink to="/about_us/">
              About Us
            </StyledLink>   
            <StyledLink to="/events/">
                Events
            </StyledLink> 
            <StyledLink to="/groups">
              Join Us 
            </StyledLink>
          </TitleStyle>
          <StyledLink>
            <Link to="/" style={{ color: "white", fontSize:"2em"  }}>pop in </Link>
          </StyledLink>
          <TitleStyle>
            <StyledLink to="/find_us/">Find Us</StyledLink>
            <StyledLink to="volunteer_with_us">Volunteer</StyledLink>
            <StyledLink to="/donate/">Donate</StyledLink>
          </TitleStyle>
        </HeaderStyle>
      </header>
    )
  }
}

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
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  font-size: 1em;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #FE65B7;
  z-index: 1000;
  height: auto;
  transition: height 2s ease;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`