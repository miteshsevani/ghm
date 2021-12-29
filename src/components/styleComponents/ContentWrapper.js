import Styled from "styled-components";

const ContentWrapper = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;  
  width: 100%;
  margin-bottom: 18px;
  @media all and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export default ContentWrapper;