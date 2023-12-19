import InputSearch from "@/components/InputSearch";
import {
  ContainerButtonsAction,
  ContainerIcons,
  ModalSimpleText,
  WrapperOverview,
} from "./styles";
import {
  IconAdress,
  IconAlert,
  IconCell,
  IconEmail,
  IconPhone,
  IconSearchNotFound,
  IconSearchTerm,
} from "@/icons";
import { GlobalContext } from "@/contexts/GlobalContext";
import { useContext, useEffect, useState } from "react";
import DetailsOverview from "./Details";
import { Button } from "@/components/Buttons";
import CustomModal from "@/components/CustomModal";

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

const Overview: React.FC<IOverView> = ({}) => {
  const heightHeader = document
    .getElementById("header-wrapper")
    ?.getBoundingClientRect().height;
  const heightSearchOverview = document
    .getElementById("container-search-overview")
    ?.getBoundingClientRect().height;
  const widthWrapperOverview = document
    .getElementById("container-search-overview")
    ?.getBoundingClientRect().width;
  const heightWrapperOverview = document
    .getElementById("container-search-overview")
    ?.getBoundingClientRect().height;

  const { sizeScreen } = useContext(GlobalContext);
  const [isMobile, setIsMobile] = useState(sizeScreen.width < 639);
  const [customSizes, setCustomSizes] = useState({
    header: heightHeader ?? 0,
    search: heightSearchOverview ?? 0,
    container: {
      width: widthWrapperOverview ?? 0,
      height: heightWrapperOverview ?? 0,
    },
  });

  useEffect(() => {
    setCustomSizes({
      header: heightHeader ?? 0,
      search: heightSearchOverview ?? 0,
      container: {
        width: widthWrapperOverview ?? 0,
        height: heightWrapperOverview ?? 0,
      },
    });
  }, [
    sizeScreen.width,
    sizeScreen.height,
    widthWrapperOverview,
    heightHeader,
    heightSearchOverview,
  ]);

  return (
    <WrapperOverview
      id="wrapper-overview"
      $customHeight={sizeScreen.height - 60 - customSizes.header}
    >
      <ContainerButtonsAction>
        <Button title={"Atualizar dados"} />
        <Button
          style={{ backgroundColor: "#fd3737" }}
          title={"Excluir dados"}
        />
      </ContainerButtonsAction>
      <DetailsOverview
        sizeContainer={{
          height:
            sizeScreen.height -
            (customSizes.container.height +
              customSizes.header +
              customSizes.search),
        }}
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
        isOpen={true}
      >
        {ContentModaDeleteUser("Oliver Hugo Joaquim Gonçalves")}
      </CustomModal>
    </WrapperOverview>
  );
};

export default Overview;
