import GridResponsive from "@/components/GridResponsive";
import {
  AvatarContainer,
  CardDetailsOverview,
  ContainerDetailsContact,
  ContainerInfoContact,
  ContainerProfile,
  ContentDetailsContact,
  ContentResumeInfo,
  TextDescritionResume,
  TextInfoDetails,
  TextInfoEmphasis,
  WrapperDetailsOverview,
} from "./styles";
import { GlobalContext } from "@/contexts/GlobalContext";
import { useContext, useState, useEffect } from "react";
import {
  IconAdress,
  IconCell,
  IconEmail,
  IconGender,
  IconHeartbeat,
  IconOverViewAvatar,
  IconPhone,
  IconProfile,
} from "@/icons";

const DetailsOverview: React.FC<IDetailsOverview> = ({
  sizeContainer,
  options,
}) => {
  const { sizeScreen } = useContext(GlobalContext);
  const [isMobile, setIsMobile] = useState(sizeScreen.width < 639);

  useEffect(() => {
    setIsMobile(sizeScreen.width < 1080);
  }, [sizeScreen]);
  return (
    <WrapperDetailsOverview>
      <GridResponsive
        width={sizeContainer?.width}
        height={sizeContainer?.height}
        padding="10px"
        columns={{
          count: 1,
          height: isMobile ? [1] : [0.8, 1.2, 1.2],
        }}
        rows={{
          count: isMobile ? 3 : 1,
        }}
        spaceColumns={8}
        spaceRows={8}
      >
        <CardDetailsOverview>
          <ContainerInfoContact>
            <ContainerProfile>
              <AvatarContainer>
                <IconProfile />
              </AvatarContainer>
              <TextInfoEmphasis>{options.name}</TextInfoEmphasis>
            </ContainerProfile>

            <ContainerDetailsContact>
              <TextInfoEmphasis>Detalhes de Contato</TextInfoEmphasis>
              <ContentDetailsContact>
                <IconCell />
                <TextInfoDetails>
                  {options.detailsContact.cellPhone}
                </TextInfoDetails>
              </ContentDetailsContact>
              <ContentDetailsContact>
                <IconPhone />
                <TextInfoDetails>
                  {options.detailsContact.phone}
                </TextInfoDetails>
              </ContentDetailsContact>
              <ContentDetailsContact>
                <IconEmail />
                <TextInfoDetails>
                  {options.detailsContact.email}
                </TextInfoDetails>
              </ContentDetailsContact>
              <ContentDetailsContact>
                <IconAdress />
                <TextInfoDetails>
                  {options.detailsContact.adress}
                </TextInfoDetails>
              </ContentDetailsContact>
            </ContainerDetailsContact>
          </ContainerInfoContact>
        </CardDetailsOverview>
        <CardDetailsOverview>
          <ContainerInfoContact style={{ gap: "24px" }}>
            <ContainerProfile>
              <AvatarContainer>
                <IconOverViewAvatar />
              </AvatarContainer>
              <TextInfoEmphasis>Resumo</TextInfoEmphasis>
            </ContainerProfile>

            <ContainerDetailsContact>
              <TextInfoEmphasis>Visão Geral</TextInfoEmphasis>

              <GridResponsive
                columns={{
                  count: 1,
                  height: isMobile ? [1] : [1, 1],
                }}
                rows={{
                  count: isMobile ? 3 : 2,
                }}
                spaceColumns={8}
                spaceRows={24}
              >
                <ContentResumeInfo>
                  <TextDescritionResume>Genero:</TextDescritionResume>
                  <TextInfoDetails>
                    {options.resumeDetails.gender}
                  </TextInfoDetails>
                </ContentResumeInfo>
                <ContentResumeInfo>
                  <TextDescritionResume>
                    Data de Nascimento:
                  </TextDescritionResume>
                  <TextInfoDetails>
                    {options.resumeDetails.dateOfBirth}
                  </TextInfoDetails>
                </ContentResumeInfo>
                <ContentResumeInfo>
                  <TextDescritionResume>CPF</TextDescritionResume>
                  <TextInfoDetails>{options.resumeDetails.cpf}</TextInfoDetails>
                </ContentResumeInfo>

                <ContentResumeInfo>
                  <TextDescritionResume>RG</TextDescritionResume>
                  <TextInfoDetails>{options.resumeDetails.rg}</TextInfoDetails>
                </ContentResumeInfo>
                <ContentResumeInfo>
                  <TextDescritionResume>Nome da Mãe</TextDescritionResume>
                  <TextInfoDetails>
                    {options.resumeDetails.motherName}
                  </TextInfoDetails>
                </ContentResumeInfo>
                <ContentResumeInfo>
                  <TextDescritionResume>Nome do pai</TextDescritionResume>
                  <TextInfoDetails>
                    {options.resumeDetails.fatherName}
                  </TextInfoDetails>
                </ContentResumeInfo>
              </GridResponsive>
            </ContainerDetailsContact>
          </ContainerInfoContact>
        </CardDetailsOverview>

        <CardDetailsOverview>
          <ContainerInfoContact style={{ gap: "24px" }}>
            <ContainerProfile>
              <AvatarContainer>
                <IconHeartbeat />
              </AvatarContainer>
              <TextInfoEmphasis>Resumo Médico</TextInfoEmphasis>
            </ContainerProfile>

            <ContainerDetailsContact>
              <TextInfoEmphasis>Detalhamento</TextInfoEmphasis>

              <GridResponsive
                columns={{
                  count: 1,
                  height: isMobile ? [1] : [1, 1],
                }}
                rows={{
                  count: isMobile ? 3 : 2,
                }}
                spaceColumns={8}
                spaceRows={24}
              >
                <ContentResumeInfo>
                  <TextDescritionResume>Ultima Consulta</TextDescritionResume>
                  <TextInfoDetails>
                    {options.medicalDetails.lastAppointment}
                  </TextInfoDetails>
                </ContentResumeInfo>
                <ContentResumeInfo>
                  <TextDescritionResume>Próxima consulta</TextDescritionResume>
                  <TextInfoDetails>
                    {options.medicalDetails.nextAppointment}
                  </TextInfoDetails>
                </ContentResumeInfo>
                <ContentResumeInfo>
                  <TextDescritionResume>Profissional</TextDescritionResume>
                  <TextInfoDetails>
                    {" "}
                    {options.medicalDetails.professional}
                  </TextInfoDetails>
                </ContentResumeInfo>
                <ContentResumeInfo>
                  <TextDescritionResume>Especialidade</TextDescritionResume>
                  <TextInfoDetails>
                    {options.medicalDetails.specialty}
                  </TextInfoDetails>
                </ContentResumeInfo>

                <ContentResumeInfo>
                  <TextDescritionResume>Plano médico</TextDescritionResume>
                  <TextInfoDetails>
                    {options.medicalDetails.healthPlan}
                  </TextInfoDetails>
                </ContentResumeInfo>

                <ContentResumeInfo>
                  <TextDescritionResume>Doenças</TextDescritionResume>
                  <TextInfoDetails>
                    {options.medicalDetails.diseases}
                  </TextInfoDetails>
                </ContentResumeInfo>
              </GridResponsive>
            </ContainerDetailsContact>
          </ContainerInfoContact>
        </CardDetailsOverview>
      </GridResponsive>
    </WrapperDetailsOverview>
  );
};

export default DetailsOverview;
