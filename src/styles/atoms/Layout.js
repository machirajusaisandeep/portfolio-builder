import styled from "styled-components";

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const SectionSpacer = styled.div`
  padding: 90px 0;
`;

export { Stack, TwoColumnGrid, SectionSpacer };
