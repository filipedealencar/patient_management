import {
  ContainerButtonsAction,
  ContainerIcons,
  ModalSimpleText,
  WrapperOverview,
} from "./styles";
import { IconAlert, IconSearchNotFound, IconSearchTerm } from "@/icons";
import { GlobalContext } from "@/contexts/GlobalContext";
import { useContext, useEffect, useRef, useState } from "react";
import DetailsOverview from "./Details";
import { Button } from "@/components/Buttons";
import CustomModal from "@/components/CustomModal";
import { FormTemplate } from "@/layouts/FormTemplate";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import PatientApi, {
  deletePatientById,
  updatePatient,
} from "@/services/api/patient";
import toast from "react-hot-toast";
import { PatientData } from "@/services/types";

const Overview: React.FC<IOverView> = ({}) => {
  const {
    sizeScreen,
    sizeChildrenContainer,
    currentPatient,
    setCurrentPatient,
  } = useContext(GlobalContext);
  const [isOpenActionsModal, setIsOpenActionModal] = useState({
    update: false,
    delete: false,
  });
  const [customValues, setCustomValues] = useState<
    PatientData | null | undefined
  >();
  const [customSizes, setCustomSizes] = useState({
    header: 0,
  });

  useEffect(() => {
    setCustomValues(currentPatient);
  }, [currentPatient]);

  const refUpdate = useRef<HTMLDivElement>(null);
  const refHeader = useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref: refUpdate,
    callback() {
      setIsOpenActionModal((state) => {
        return { ...state, update: false };
      });
    },
  });

  const ContentModaDeleteUser = (name?: string): JSX.Element => {
    return (
      <ModalSimpleText>
        <strong>Atenção!</strong> Você está prestes a excluir permanentemente o
        usuário{name ? <strong>{` ${name}`}</strong> : ""}. Esta ação não pode
        ser desfeita e resultará na remoção de todos os dados associados a este
        usuário. Por favor, certifique-se de que deseja prosseguir com esta
        exclusão. Deseja continuar?
      </ModalSimpleText>
    );
  };

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    item: string
  ) => {
    return setCustomValues((state) => {
      return { ...state!, [item]: event.target.value };
    });
  };

  useEffect(() => {
    const updateDimensions = () => {
      const heightHeader = refHeader.current?.getBoundingClientRect().height;

      setCustomSizes({
        header: heightHeader || 0,
      });
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [sizeScreen, refHeader]);

  return (
    <>
      <WrapperOverview $customHeight={sizeChildrenContainer.height - 72}>
        {currentPatient === undefined ? (
          <ContainerIcons>
            <IconSearchTerm />
            {/* <IconSearchNotFound /> */}
          </ContainerIcons>
        ) : (
          <>
            <ContainerButtonsAction>
              <Button
                title={"Atualizar dados"}
                onClick={() =>
                  setIsOpenActionModal((state) => {
                    return { ...state, update: true };
                  })
                }
              />
              <Button
                onClick={() =>
                  setIsOpenActionModal((state) => {
                    return { ...state, delete: true };
                  })
                }
                style={{ backgroundColor: "#fd3737" }}
                title={"Excluir dados"}
              />
            </ContainerButtonsAction>
            <DetailsOverview
              options={{
                name: currentPatient?.name ?? "Indisponível",
                detailsContact: {
                  phone: currentPatient?.phone ?? "Indisponível",
                  cellPhone: currentPatient?.cell ?? "Indisponível",
                  email: (currentPatient?.email ?? "Indisponível").replace(
                    "@",
                    " @"
                  ),
                  adress: currentPatient?.adress ?? "Indisponível",
                },
                resumeDetails: {
                  gender: currentPatient?.gender ?? "Indisponível",
                  dateOfBirth: currentPatient?.birthDate ?? "Indisponível",
                  cpf: currentPatient?.cpf ?? "Indisponível",
                  rg: currentPatient?.rg ?? "Indisponível",
                  motherName: currentPatient?.motherName ?? "Indisponível",
                  fatherName: currentPatient?.fatherName ?? "Indisponível",
                },
                medicalDetails: {
                  lastAppointment:
                    currentPatient?.lastAppointment ?? "Indisponível",
                  nextAppointment:
                    currentPatient?.nextAppointment ?? "Indisponível",
                  professional: currentPatient?.professional ?? "Indisponível",
                  specialty: currentPatient?.specialty ?? "Indisponível",
                  healthPlan: currentPatient?.plan ?? "Indisponível",
                  diseases: currentPatient?.diseases ?? "Indisponível",
                },
              }}
            />
          </>
        )}

        <CustomModal
          titleModal="Remover paciente?"
          textOnAction="Continuar"
          onAction={() =>
            toast
              .promise(deletePatientById(currentPatient?.id!), {
                loading: "Excluindo...",
                success: <b>Paciente excluido com sucesso!</b>,
                error: <b>Erro ao excluir.</b>,
              })
              .then(() => setCurrentPatient(undefined))
          }
          icon={<IconAlert />}
          isOpen={isOpenActionsModal.delete}
        >
          {ContentModaDeleteUser(currentPatient?.name)}
        </CustomModal>
      </WrapperOverview>

      <FormTemplate
        actionDismiss={() =>
          setIsOpenActionModal((state) => {
            return { ...state, update: false };
          })
        }
        actionSubmit={(data: any) =>
          toast
            .promise(updatePatient(currentPatient?.id!, data), {
              loading: "Atualizando...",
              success: <b>Atualizado com sucesso!</b>,
              error: <b>Erro ao atualizar.</b>,
            })
            .then(() => {
              setCurrentPatient(customValues);
              setIsOpenActionModal((state) => {
                return { ...state, update: false };
              });
            })
        }
        refFormTemplate={refUpdate}
        isModal={isOpenActionsModal.update}
        height={sizeChildrenContainer.height - 72}
        currentValues={customValues}
        options={[
          {
            titleSection: "Informações de Contato",
            inputs: [
              {
                label: "Nome",
                name: "name",
                placeholder: "Ex: Maria José da Silva",
                value: customValues?.name,
                onChange: (target) => handleOnChange(target, "name"),
              },
              {
                label: "Telefone",
                name: "phone",
                placeholder: "Ex: (81) 9 8888-9999",
                required: true,
                value: customValues?.phone,
                onChange: (target) => handleOnChange(target, "phone"),
              },
              {
                label: "Celular",
                name: "cell",
                placeholder: "Ex: (81) 9 9999-8888",
                value: customValues?.cell,
                onChange: (target) => handleOnChange(target, "cell"),
              },
              {
                label: "Email",
                name: "email",
                placeholder: "Ex: exemplo@exemplo.com ",
                value: customValues?.email,
                onChange: (target) => handleOnChange(target, "email"),
              },
            ],
          },
          {
            titleSection: "Informações Geral",
            inputs: [
              {
                label: "Genero",
                name: "gender",
                placeholder: "Ex: Feminino",
                value: customValues?.gender,
                onChange: (target) => handleOnChange(target, "gender"),
              },
              {
                label: "Data de Nascimento",
                name: "birthDate",
                placeholder: "12/12/2000",
                value: customValues?.birthDate,
                onChange: (target) => handleOnChange(target, "birthDate"),
              },
              {
                label: "CPF",
                name: "cpf",
                placeholder: "Ex: 123.456.789-10",
                value: customValues?.cpf,
                onChange: (target) => handleOnChange(target, "cpf"),
              },
              {
                label: "RG",
                name: "rg",
                placeholder: "Ex: 123.456.78",
                value: customValues?.rg,
                onChange: (target) => handleOnChange(target, "rg"),
              },
              {
                label: "Nome da Mãe",
                name: "motherName",
                placeholder: "Ex: Roberta Alves da Silva",
                value: customValues?.motherName,
                onChange: (target) => handleOnChange(target, "motherName"),
              },
              {
                label: "Nome do Pai",
                name: "fatherName",
                placeholder: "Ex: Carlos Alberto da Silva",
                value: customValues?.fatherName,
                onChange: (target) => handleOnChange(target, "fatherName"),
              },
            ],
          },
          {
            titleSection: "Informações Médica",
            inputs: [
              {
                label: "Ultima Consulta",
                name: "lastAppointment",
                placeholder: "Ex: 22/10/2023",
                value: customValues?.lastAppointment,
                onChange: (target) => handleOnChange(target, "lastAppointment"),
              },
              {
                label: "Próxima Consulta",
                name: "nextAppointment",
                placeholder: "Ex: 22/01/2024",
                value: customValues?.nextAppointment,
                onChange: (target) => handleOnChange(target, "nextAppointment"),
              },
              {
                label: "Profissional",
                name: "professional",
                placeholder: "Ex: Ricardo da Silva Cavalcante",
                value: customValues?.professional,
                onChange: (target) => handleOnChange(target, "professional"),
              },
              {
                label: "Especialidade",
                name: "specialty",
                placeholder: "Ex: Cardiologia",
                value: customValues?.specialty,
                onChange: (target) => handleOnChange(target, "specialty"),
              },
              {
                label: "Plano",
                name: "plan",
                placeholder: "Ex: Amil",
                value: customValues?.plan,
                onChange: (target) => handleOnChange(target, "plan"),
              },
              {
                label: "Doenças",
                name: "diseases",
                placeholder: "Ex: Rinite",
                value: customValues?.diseases,
                onChange: (target) => handleOnChange(target, "diseases"),
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default Overview;
