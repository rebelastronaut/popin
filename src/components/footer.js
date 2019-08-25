import React from 'react';
import styled from 'styled-components';

class Footer extends React.Component {
    render() {
        return(

            <StyleWrapper>
                <ContentWrapper> Copyright Rebel Astronaut 2019 </ContentWrapper>
            </StyleWrapper>   
        );
    }

}


export default Footer;

const StyleWrapper = styled.div`
  height: 100px;
  width: 100%;
  overflow: hidden;

`
const ContentWrapper = styled.div`
  height: 100px;
  width: 100%;
  overflow: hidden;
  background: #FE65B7;
  color: white;
  font-family: 'Concert One', cursive;
  padding: 30px;
  text-align: center;
`
