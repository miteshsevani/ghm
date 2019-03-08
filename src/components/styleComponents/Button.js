import Styled from "styled-components";

const Button = Styled.div`
  padding: 4px 12px;
  background: ${props => props.theme.btnBackground};    ;  
  border-radius: 5px;
  display: inline-block;
  margin: 20px 20px 0 0;
  font-size: 14px;
  cursor: pointer;
  a { 
    color: #fff;
  }
  &:hover {
    background: #262626;
    a {
      font-weight: bolder;
    }
  }
  @media all and (min-width: 768px) {
    padding: 8px 20px;
  }
`;

export default Button;