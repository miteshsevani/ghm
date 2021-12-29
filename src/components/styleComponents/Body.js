import Styled from "styled-components";

const Body = Styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize};  
  color: ${props => props.theme.color};  
  line-height: ${props => props.theme.lineHeight};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export default Body;