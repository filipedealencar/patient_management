import styled from "styled-components";

export const WrapperFormTemplate = styled.div<{
  $isModal?: boolean;
  $customHeight: number;
}>`
  flex-direction: column;
  /* width: 100%; */
  height: ${({ $customHeight }) => $customHeight}px;
  gap: 4px;
  overflow: auto;

  padding: ${({ $isModal }) => ($isModal ? "20px" : "0px")};
  z-index: ${({ $isModal }) => $isModal && "999"};
  transition: transform 0.5s ease-out 0s;
  position: ${({ $isModal }) => ($isModal ? "fixed" : "relative")};
  width: ${({ $isModal }) => ($isModal ? "-webkit-fill-available" : "0")};
  transform: ${({ $isModal }) =>
    $isModal ? "translateY(0%)" : "translateY(200%)"};
`;
