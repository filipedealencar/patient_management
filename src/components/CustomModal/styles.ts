import styled from "styled-components";

export const ModalOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  margin: 20px;
`;

export const HeaderModal = styled.header`
  display: flex;
  padding: 0.75rem 1rem;
  background-color: white;
  align-items: center;
  border-bottom: 1px solid;
  border-radius: 10px 10px 0px 0px;
`;

export const ContainerTitleModal = styled.div`
  display: flex;
  flex-flow: row;
  flex: 1 0 auto;
  align-items: center;
  gap: 0.75rem;
`;

export const ContentTitleModal = styled.div`
  display: flex;
  flex-flow: column;
`;

export const ContainerChildren = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid;
`;

export const TitleModal = styled.h1`
  font-size: 0.875rem;
  font-weight: 700;
  color: #000;
`;

export const ContainerIcon = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ContentButtonCloseHeader = styled.div`
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ModalContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 10px 20px 20px;
`;

export const ModalActionButton = styled.button`
  background: #3498db;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
`;
export const ModalCloseButton = styled.button`
  background: #db3434;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
`;
