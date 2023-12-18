import InputSearch from "@/components/InputSearch";
import {
  ContainerHeader,
  ContentIconLoupe,
  ContentMenu,
  ContentSearch,
  HeaderWrapper,
  OpenSearchMobile,
} from "./styles";
import { IconHamburger, IconLogotipo, IconLoupe } from "@/icons";
import { GlobalContext } from "@/contexts/GlobalContext";
import { useContext, useRef, useState } from "react";
import { Backdrop } from "@/components/Backdrop";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import useScreenSize from "@/hooks/useScreenSize";

const Header: React.FC<IHeader> = ({ callBackMenu, refHeaderMenu }) => {
  const { sizeScreen } = useContext(GlobalContext);
  const [isOpenSearchButton, setIsOpenSearchButton] = useState(false);
  const screenSize = useScreenSize();

  const refSearchButtonMobile = useRef<HTMLDivElement>(null);

  useOutsideClick({
    condition: sizeScreen.width < 640,
    ref: refSearchButtonMobile ?? null,
    callback() {
      setIsOpenSearchButton(false);
    },
  });
  return (
    <>
      <HeaderWrapper
        style={{
          display:
            screenSize === "tablet" && sizeScreen.width > sizeScreen.height
              ? "none"
              : "",
        }}
      >
        <ContainerHeader>
          {sizeScreen.width < 640 && (
            <ContentMenu ref={refHeaderMenu} onClick={callBackMenu}>
              <IconHamburger />
            </ContentMenu>
          )}
          <IconLogotipo />

          {sizeScreen.width > 640 ? (
            <InputSearch />
          ) : (
            <ContentSearch>
              <ContentIconLoupe
                onClick={() => setIsOpenSearchButton((state) => !state)}
              >
                <IconLoupe />
              </ContentIconLoupe>
            </ContentSearch>
          )}
        </ContainerHeader>
      </HeaderWrapper>
      {sizeScreen.width <= 640 && (
        <>
          <OpenSearchMobile
            $customWidth={sizeScreen.width - 100}
            ref={refSearchButtonMobile}
            $isOpen={isOpenSearchButton}
          >
            <InputSearch
              styles={{ container: { width: "100%", height: "40px" } }}
            />
          </OpenSearchMobile>
          <Backdrop isOpen={isOpenSearchButton} />
        </>
      )}
    </>
  );
};

export default Header;
