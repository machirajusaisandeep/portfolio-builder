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

export { Stack, TwoColumnGrid };
