import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  ${({ theme }) => theme.media.max.mobileXL`  
 padding: 10px;
 z-index: 9999;
   `}
  position: relative;
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  ${({ theme }) => theme.media.max.mobileXL`  
 justify-content:center;

   `}
`;

export const ContentMenu = styled.div`
  padding: 20px;
  position: absolute;
  right: 80%;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
`;
export const ContentSearch = styled.div`
  /* padding: 20px; */
  position: absolute;
  left: 80%;
  cursor: pointer;
`;

export const ContentIconLoupe = styled.div`
  padding: 20px;
`;

export const OpenSearchMobile = styled.div<{
  $isOpen: boolean;
  $customWidth: number;
}>`
  position: absolute;
  z-index: 999;
  width: ${({ $customWidth }) => $customWidth}px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;

  top: ${({ $isOpen }) => ($isOpen ? "100px" : "-100px")};

  transition: all 0.5s ease-out 0s;
`;
