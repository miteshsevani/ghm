import React, { Component } from 'react';
import styled from 'styled-components';

const StyledMap = styled.div`
  width: 100%;
  iframe {
    width: 100%;
    height: 100%;
  }

  @media all and (min-width: 768px) {
    width: 50%;
  }
`;
export default class Map extends Component {
  render() {
    return(
      <StyledMap>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.319683802944!2d0.09209161600972171!3d51.48900077963211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8af3351471dff%3A0xc115d86e5eabb446!2sGreenwich+Hindu+Temple!5e0!3m2!1sen!2suk!4v1551871774178" frameBorder="0" allowFullScreen></iframe>
      </StyledMap>
    )
  }
}
