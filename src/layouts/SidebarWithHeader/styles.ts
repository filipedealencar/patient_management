import styled from "styled-components";

export const SidebarWithHeaderWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const ContainerChildren = styled.div`
  display: flex;
`;

export const ContentChildren = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  box-sizing: border-box;
`;
