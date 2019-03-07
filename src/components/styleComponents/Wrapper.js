import Styled from "styled-components";

const Wrapper = Styled.div`
  max-width: 1000px;
  margin: 0 auto;  
  padding: ${props => props.theme.marginSmall};      
  background: #fff;
  @media all and (min-width: 768px) {
    padding: ${props => props.theme.marginLarge};      
  }
`;

export default Wrapper;