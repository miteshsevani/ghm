import Styled from "styled-components";

const Card = Styled.div`
  width: 50%;
  text-align: center;
  font-weight: bold;
  @media all and (min-width: 768px) {
    width: 25%;
  }
`;

export default Card;