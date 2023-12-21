import { LegacyRef, ReactNode, useEffect, useRef, useState } from "react";
import {
  ModalOverlay,
  ModalContainer,
  ModalCloseButton,
  ModalContainerButton,
  ModalActionButton,
  TitleModal,
  ContainerTitleModal,
  HeaderModal,
  ContainerIcon,
  ContentTitleModal,
  ContentButtonCloseHeader,
  ContainerChildren,
} from "./styles";
import { Backdrop } from "../Backdrop";
import { IconClose } from "@/icons";

interface ModalProps {
  isOpen: boolean;
  refCustomModal?: LegacyRef<HTMLDivElement> | undefined;
  onClose?: () => void;
  onAction?: () => void;
  children: ReactNode;
  titleModal: string;
  textOnAction?: string;
  textOnClose?: string;
  icon?: ReactNode;
}

const CustomModal: React.FC<ModalProps> = ({
  isOpen,
  refCustomModal,
  onClose,
  onAction,
  textOnAction,
  children,
  titleModal,
  icon,
  textOnClose,
}) => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  useEffect(() => {
    setModalOpen(isOpen);
    console.log(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setModalOpen(false);
    onClose && onClose();
  };
  const handleAction = () => {
    setModalOpen(false);
    onAction && onAction();
  };

  return (
    modalOpen && (
      <>
        <ModalOverlay ref={refCustomModal} $isOpen={modalOpen}>
          <ModalContainer>
            <HeaderModal>
              <ContainerTitleModal>
                <ContainerIcon>{icon}</ContainerIcon>
                <ContentTitleModal>
                  <TitleModal>{titleModal}</TitleModal>
                </ContentTitleModal>
              </ContainerTitleModal>
              <ContentButtonCloseHeader onClick={handleClose}>
                <IconClose />
              </ContentButtonCloseHeader>
            </HeaderModal>
            <ContainerChildren>{children}</ContainerChildren>
            <ModalContainerButton>
              <ModalActionButton onClick={handleAction}>
                {textOnAction ?? "Aprovar"}
              </ModalActionButton>
              <ModalCloseButton onClick={handleClose}>
                {textOnClose ?? "Fechar"}
              </ModalCloseButton>
            </ModalContainerButton>
          </ModalContainer>
        </ModalOverlay>
        <Backdrop isOpen={modalOpen} />
      </>
    )
  );
};

export default CustomModal;
