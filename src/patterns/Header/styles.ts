import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  ${({ theme }) => theme.media.max.mobileXL`  
 padding: 10px;
 z-index: 9999;
 border-bottom: 4px solid #0144dd;
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
