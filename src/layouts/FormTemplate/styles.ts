import styled from "styled-components";

export const WrapperFormTemplate = styled.div<{ $customHeight: number }>`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  padding: 20px;
  position: relative;
  height: ${({ $customHeight }) => $customHeight}px;
  gap: 4px;
  overflow: auto;
`;
