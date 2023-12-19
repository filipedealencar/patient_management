import styled from "styled-components";

export const WrapperOverview = styled.div<{ $customHeight: number }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  position: relative;
  height: ${({ $customHeight }) => $customHeight}px;
  gap: 24px;
  ${({ theme }) => theme.media.max.mobileXL`
  overflow: auto;
  `}
`;

export const ContainerSearch = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: relative;
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

export const ContainerResultSearch = styled.div`
  width: 50%;
  height: 200px;
  background: #fff;
  position: absolute;
  top: 50px;
  z-index: 99;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  overflow: auto;
`;

export const ContentResultSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #f7f7f7;
  color: #737373;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
    background: #ebebeb;
  }
`;
