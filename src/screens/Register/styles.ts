import styled from "styled-components";

export const WrapperRegister = styled.div<{ $customHeight: number }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ $customHeight }) => $customHeight}px;
  padding: 20px;
  overflow: auto;
`;
