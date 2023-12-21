import { CustomForm } from "@/components/CustomForm";
import { WrapperFormTemplate } from "./styles";
import { IFormTemplate } from "./types";
import { Backdrop } from "@/components/Backdrop";
import { useEffect, useState } from "react";

export const FormTemplate: React.FC<IFormTemplate> = ({
  height,
  options,
  isModal,
  actionDismiss,
  refFormTemplate,
}) => {
  const [modalOpen, setModalOpen] = useState(isModal);

  useEffect(() => {
    setModalOpen(isModal);
  }, [isModal]);
  return (
    <>
      <WrapperFormTemplate
        ref={refFormTemplate}
        $isModal={modalOpen}
        $customHeight={height}
      >
        <CustomForm actionDismiss={actionDismiss} options={options} />
      </WrapperFormTemplate>
      {modalOpen && <Backdrop isOpen={modalOpen} />}
    </>
  );
};
