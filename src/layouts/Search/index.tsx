import InputSearch from "@/components/InputSearch";
import {
  ContainerSearch,
  ContainerResultSearch,
  ContentResultSearch,
  OpenSearchMobile,
  ContentSearch,
  ContentIconLoupe,
} from "./styles";
import { GlobalContext } from "@/contexts/GlobalContext";
import { useContext, useRef, useState } from "react";
import { Backdrop } from "@/components/Backdrop";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { IconButtonSearch, IconLoupe } from "@/icons";

export const Search: React.FC = ({}) => {
  const { sizeScreen } = useContext(GlobalContext);
  const [isOpenSearchButton, setIsOpenSearchButton] = useState(false);
  const refSearchButtonMobile = useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref: refSearchButtonMobile ?? null,
    callback() {
      setIsOpenSearchButton(false);
    },
  });
  return (
    <>
      <ContentSearch>
        <ContentIconLoupe
          onClick={() => setIsOpenSearchButton((state) => !state)}
        >
          {/* <IconLoupe /> */}
          <IconButtonSearch />
        </ContentIconLoupe>
      </ContentSearch>

      <OpenSearchMobile
        $customWidth={sizeScreen.width - 100}
        ref={refSearchButtonMobile}
        $isOpen={isOpenSearchButton}
      >
        <ContainerSearch>
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
      </OpenSearchMobile>

      <Backdrop isOpen={isOpenSearchButton} />
    </>
  );
};
