import styled from "styled-components";
import BreakPoints from "./BreakPoints";

const Heading1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  @media (min-width: ${BreakPoints.mac}) {
    font-size: 4rem;
  }
`;
const Heading2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  @media (min-width: ${BreakPoints.mac}) {
    font-size: 2rem;
  }
`;
const Heading3 = styled.h3``;
const Heading4 = styled.h4``;
const Heading5 = styled.h5``;

const Paragraph = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  @media (min-width: ${BreakPoints.mac}) {
    font-size: 1rem;
  }
`;

const Item = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  @media (min-width: ${BreakPoints.mac}) {
    font-size: 1rem;
  }
`;

const Caption = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
  @media (min-width: ${BreakPoints.mac}) {
    font-size: 0.9rem;
  }
`;

const Small = styled.span`
  font-size: 0.6rem;
  font-weight: 500;
  @media (min-width: ${BreakPoints.mac}) {
    font-size: 0.8rem;
  }
`;

export {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Paragraph,
  Item,
  Caption,
  Small,
};
