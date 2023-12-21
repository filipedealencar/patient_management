import {
  ContainerButtonsAction,
  ModalSimpleText,
  WrapperOverview,
} from "./styles";
import { IconAlert } from "@/icons";
import { GlobalContext } from "@/contexts/GlobalContext";
import { useContext, useEffect, useRef, useState } from "react";
import DetailsOverview from "./Details";
import { Button } from "@/components/Buttons";
import CustomModal from "@/components/CustomModal";
import { FormTemplate } from "@/layouts/FormTemplate";
import { useOutsideClick } from "@/hooks/useOutsideClick";

const Overview: React.FC<IOverView> = ({}) => {
  const { sizeScreen, sizeChildrenContainer } = useContext(GlobalContext);
  const [isOpenActionsModal, setIsOpenActionModal] = useState({
    update: false,
    delete: false,
  });
  const [customSizes, setCustomSizes] = useState({
    header: 0,
  });

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

  const ContentModaDeleteUser = (name: string): JSX.Element => {
    return (
      <ModalSimpleText>
        <strong>Atenção!</strong> Você está prestes a excluir permanentemente o
        usuário <strong>{name}</strong>. Esta ação não pode ser desfeita e
        resultará na remoção de todos os dados associados a este usuário. Por
        favor, certifique-se de que deseja prosseguir com esta exclusão. Deseja
        continuar?
      </ModalSimpleText>
    );
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
            name: "Oliver Hugo Joaquim Gonçalves",
            detailsContact: {
              phone: "99999999999",
              cellPhone: "99999999999",
              email: "oliver.hugo.goncalves@recnev.com.br".replace("@", " @"),
              adress: "Rua Cipotânia",
            },
            resumeDetails: {
              gender: "Masculino",
              dateOfBirth: "27/11/1990",
              cpf: "940.297.724-47",
              rg: "20.893.581-2",
              motherName: "Maya Juliana Lara",
              fatherName: "Paulo Kauê Lorenzo Gonçalves",
            },
            medicalDetails: {
              lastAppointment: "22/10/2023",
              nextAppointment: "22/01/2024",
              professional: "João Calebe",
              specialty: "Cardiologia",
              healthPlan: "Central Nacional Unimed",
              diseases: ["Rinite", "Bronquite", "Enxaqueca"].join(" / "),
            },
          }}
        />
        {/* <ContainerIcons>
    <IconSearchTerm />
    <IconSearchNotFound />
  </ContainerIcons> */}

        <CustomModal
          titleModal="Remover paciente?"
          textOnAction="Continuar"
          icon={<IconAlert />}
          isOpen={isOpenActionsModal.delete}
        >
          {ContentModaDeleteUser("Oliver Hugo Joaquim Gonçalves")}
        </CustomModal>
      </WrapperOverview>

      <FormTemplate
        actionDismiss={() =>
          setIsOpenActionModal((state) => {
            return { ...state, update: false };
          })
        }
        refFormTemplate={refUpdate}
        isModal={isOpenActionsModal.update}
        height={sizeChildrenContainer.height - 72}
        options={[
          {
            titleSection: "Informações de Contato",
            inputs: [
              {
                label: "Nome",
                name: "name",
                placeholder: "Ex: Maria José da Silva",
              },
              {
                label: "Telefone",
                name: "phone",
                placeholder: "Ex: (81) 9 8888-9999",
                required: true,
              },
              {
                label: "Celular",
                name: "cell",
                placeholder: "Ex: (81) 9 9999-8888",
              },
              {
                label: "Email",
                name: "email",
                placeholder: "Ex: exemplo@exemplo.com ",
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
              },
              {
                label: "Data de Nascimento",
                name: "birthDate",
                placeholder: "12/12/2000",
              },
              {
                label: "CPF",
                name: "cpf",
                placeholder: "Ex: 123.456.789-10",
              },
              { label: "RG", name: "rg", placeholder: "Ex: 123.456.78" },
              {
                label: "Nome da Mãe",
                name: "motherName",
                placeholder: "Ex: Roberta Alves da Silva",
              },
              {
                label: "Nome do Pai",
                name: "fatherName",
                placeholder: "Ex: Carlos Alberto da Silva",
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
              },
              {
                label: "Próxima Consulta",
                name: "nextAppointment",
                placeholder: "Ex: 22/01/2024",
              },
              {
                label: "Profissional",
                name: "professional",
                placeholder: "Ex: Ricardo da Silva Cavalcante",
              },
              {
                label: "Especialidade",
                name: "specialty",
                placeholder: "Ex: Cardiologia",
              },
              { label: "Plano", name: "healthPlan", placeholder: "Ex: Amil" },
              {
                label: "Doenças",
                name: "diseases",
                placeholder: "Ex: Rinite",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default Overview;
