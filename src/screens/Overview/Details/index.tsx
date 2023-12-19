import GridResponsive from "@/components/GridResponsive";
import {
  AvatarContainer,
  CardDetailsOverview,
  ContainerDetailsContact,
  ContainerInfoContact,
  ContainerProfile,
  ContentDetailsContact,
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
  IconPhone,
  IconProfile,
} from "@/icons";

const DetailsOverview: React.FC<IDetailsOverview> = ({ sizeContainer }) => {
  const { sizeScreen } = useContext(GlobalContext);
  const [isMobile, setIsMobile] = useState(sizeScreen.width < 639);

  useEffect(() => {
    setIsMobile(sizeScreen.width < 1080);
  }, [sizeScreen]);
  return (
    <WrapperDetailsOverview>
      <GridResponsive
        width={sizeContainer.width}
        height={sizeContainer.height}
        padding="10px"
        columns={{
          count: 1,
          height: isMobile ? [1] : [1, 1, 1],
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
              <TextInfoEmphasis>
                Luis Filipe Joaquim de Alencar
              </TextInfoEmphasis>
            </ContainerProfile>

            <ContainerDetailsContact>
              <TextInfoEmphasis>Detalhes de Contato</TextInfoEmphasis>
              <ContentDetailsContact>
                <IconCell />
                <TextInfoDetails>{"(81) 9 9999-9999"}</TextInfoDetails>
              </ContentDetailsContact>
              <ContentDetailsContact>
                <IconPhone />
                <TextInfoDetails>{"(81) 9 9999-9999"}</TextInfoDetails>
              </ContentDetailsContact>
              <ContentDetailsContact>
                <IconEmail />
                <TextInfoDetails>{"teste@teste.com"}</TextInfoDetails>
              </ContentDetailsContact>
              <ContentDetailsContact>
                <IconAdress />
                <TextInfoDetails>{"Rua Cipotânia"}</TextInfoDetails>
              </ContentDetailsContact>
            </ContainerDetailsContact>
          </ContainerInfoContact>
        </CardDetailsOverview>
        <CardDetailsOverview>
          <ContainerInfoContact>
            <ContainerProfile>
              <AvatarContainer>
                <IconProfile />
              </AvatarContainer>
              <TextInfoEmphasis>
                Luis Filipe Joaquim de Alencar
              </TextInfoEmphasis>
            </ContainerProfile>

            <ContainerDetailsContact>
              <TextInfoEmphasis>Detalhes de Contato</TextInfoEmphasis>
              <ContentDetailsContact>
                <IconCell />
                <TextInfoDetails>{"(81) 9 9999-9999"}</TextInfoDetails>
              </ContentDetailsContact>
              <ContentDetailsContact>
                <IconPhone />
                <TextInfoDetails>{"(81) 9 9999-9999"}</TextInfoDetails>
              </ContentDetailsContact>
              <ContentDetailsContact>
                <IconEmail />
                <TextInfoDetails>{"teste@teste.com"}</TextInfoDetails>
              </ContentDetailsContact>
              <ContentDetailsContact>
                <IconAdress />
                <TextInfoDetails>{"Rua Cipotânia"}</TextInfoDetails>
              </ContentDetailsContact>
            </ContainerDetailsContact>
          </ContainerInfoContact>
        </CardDetailsOverview>
        <CardDetailsOverview>
          <ContainerInfoContact>
            <ContainerProfile>
              <AvatarContainer>
                <IconProfile />
              </AvatarContainer>
              <TextInfoEmphasis>
                Luis Filipe Joaquim de Alencar
              </TextInfoEmphasis>
            </ContainerProfile>

            <ContainerDetailsContact>
              <TextInfoEmphasis>Detalhes de Contato</TextInfoEmphasis>
              <ContentDetailsContact>
                <IconCell />
                <TextInfoDetails>{"(81) 9 9999-9999"}</TextInfoDetails>
              </ContentDetailsContact>
              <ContentDetailsContact>
                <IconPhone />
                <TextInfoDetails>{"(81) 9 9999-9999"}</TextInfoDetails>
              </ContentDetailsContact>
              <ContentDetailsContact>
                <IconEmail />
                <TextInfoDetails>{"teste@teste.com"}</TextInfoDetails>
              </ContentDetailsContact>
              <ContentDetailsContact>
                <IconAdress />
                <TextInfoDetails>{"Rua Cipotânia"}</TextInfoDetails>
              </ContentDetailsContact>
            </ContainerDetailsContact>
          </ContainerInfoContact>
        </CardDetailsOverview>
      </GridResponsive>
    </WrapperDetailsOverview>
  );
};

export default DetailsOverview;
