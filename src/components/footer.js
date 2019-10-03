import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Footer extends React.Component {
    render() {
        return(

            <StyleWrapper>
                <ContentWrapper></ContentWrapper>
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
`
