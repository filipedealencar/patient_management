import InputSearch from "@/components/InputSearch";
import {
  ContainerIcons,
  ContainerResultSearch,
  ContainerSearch,
  ContentResultSearch,
  WrapperOverview,
} from "./styles";
import { IconSearchNotFound, IconSearchTerm } from "@/icons";
import { GlobalContext } from "@/contexts/GlobalContext";
import { useContext, useEffect, useState } from "react";
import DetailsOverview from "./Details";

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
      $customHeight={
        sizeScreen.height -
        (customSizes.header ?? 0) -
        (customSizes.search ?? 0) -
        (isMobile ? 40 : 0)
      }
    >
      <ContainerSearch id="container-search-overview">
        <InputSearch
          styles={{
            wrapper: {
              width: "100%",
              display: "flex",
              justifyContent: "center",
            },
            container: {
              width:
                sizeScreen.width < 640
                  ? `calc(${sizeScreen.width}px - 100px)`
                  : "50%",
            },
          }}
        />
        {/* <ContainerResultSearch
          style={{
            width:
              sizeScreen.width < 640
                ? `calc(${sizeScreen.width}px - 100px)`
                : "50%",
          }}
        >
          <ContentResultSearch>Teste</ContentResultSearch>
        </ContainerResultSearch> */}
      </ContainerSearch>
      <DetailsOverview
        sizeContainer={{
          height:
            sizeScreen.height -
            (customSizes.container.height +
              customSizes.header +
              customSizes.search) -
            40,
          width: customSizes.container.width - 20,
        }}
      />
      {/* <ContainerIcons>
        <IconSearchTerm />
        <IconSearchNotFound />
      </ContainerIcons> */}
    </WrapperOverview>
  );
};

export default Overview;
