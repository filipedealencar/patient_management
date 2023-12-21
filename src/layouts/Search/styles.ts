import styled from "styled-components";

export const ContainerSearch = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: relative;
`;

export const ContainerResultSearch = styled.div`
  width: 50%;
  max-height: 200px;
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

export const ContentSearch = styled.div`
  /* padding: 20px; */
  position: absolute;
  left: 90%;
  cursor: pointer;
  ${({ theme }) => theme.media.max.mobileXL`  
   left: 82%;

   `}
`;

export const ContentIconLoupe = styled.div`
  padding: 10px;
  background: #0144dd;
  border-radius: 10px;

  svg {
    width: 2rem;
    height: 1.5rem;
  }
`;
