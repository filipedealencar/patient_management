import styled from "styled-components";

export const SidebarWrapper = styled.div<{ $isOpen: boolean }>`
  padding: 20px;
  height: 100vh;
  background-color: #0144dd;
  box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.1);
  min-width: 100px;

  z-index: 9999;
  /* transform: translateX(${({ $isOpen }) => ($isOpen ? 100 : 0)}%); */
  right: 100%;
  transition: transform 0.5s ease-out 0s;

  ${({ theme, $isOpen }) => theme.media.max.mobileXL`  
 ${$isOpen ? "transform: translateX(100%)" : "transform: translateX(0%)"} ;
 position: fixed;
   `}
`;

export const ButtonSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;

export const ContentIcon = styled.div<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }

  svg {
    width: 30px;
    height: 30px;

    path {
      fill: ${({ $isActive }) => ($isActive ? "#fff" : "#b3b3b3")};
    }
  }
`;

export const TextIcon = styled.span<{ $isActive: boolean }>`
  color: ${({ $isActive }) => ($isActive ? "#fff" : "#b3b3b3")};
  font-size: 12px;
  font-family: Montserrat;
  font-weight: 400;
  text-align: center;
`;

export const ContentMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg {
    width: 100px;
    height: 50px;

    path {
      fill: #fff;
    }
  }
`;

export const ContentIconLoupeSidebar = styled.div`
  position: relative;
  padding: 0px 20px 20px 20px;
  svg {
    width: 50px;
    height: 30px;

    path {
      fill: #fff;
    }
  }
`;

export const OpenSearchMobileSidebar = styled.div<{
  $isOpen: boolean;
  $customWidth: number;
}>`
  position: absolute;
  z-index: 999;
  width: ${({ $customWidth }) => $customWidth}px;
  margin-left: auto;
  margin-right: auto;
  left: 140px;
  text-align: center;
  top: ${({ $isOpen }) => ($isOpen ? "-50%" : "-500%")};
  transition: all 0.5s ease-out 0s;
`;
