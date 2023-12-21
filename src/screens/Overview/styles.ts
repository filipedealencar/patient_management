import styled from "styled-components";

export const WrapperOverview = styled.div<{ $customHeight: number }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  position: relative;
  height: ${({ $customHeight }) => $customHeight}px;
  gap: 4px;
  overflow: auto;
`;

export const ContainerIcons = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  top: 35%;

  ${({ theme }) => theme.media.max.mobileXL`
   svg {
  width: 300px;
   }
  `}
`;

export const ContainerButtonsAction = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-left: 10px;
`;

export const ModalSimpleText = styled.p`
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 150%;
  color: #000;
`;
