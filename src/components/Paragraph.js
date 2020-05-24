import styled from "styled-components";

export const Paragraph = styled.p`
  margin-bottom: 20px;
  line-height: 28px;
  text-align: justify;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const LargerParagraph = styled(Paragraph)`
  font-family: "Quando", serif;
  font-size: 20px;
  line-height: 35px;
  padding: 20px;
  margin: 0 0 50px 0;
  text-align: center;
  border: 1px dashed ${props => props.theme.color.main};
`;
