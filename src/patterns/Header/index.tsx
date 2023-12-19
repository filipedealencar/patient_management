import InputSearch from "@/components/InputSearch";
import { ContainerHeader, ContentMenu, HeaderWrapper } from "./styles";
import { IconHamburger, IconLogotipo, IconLoupe } from "@/icons";
import { GlobalContext } from "@/contexts/GlobalContext";
import { useContext, useRef, useState } from "react";
import { Backdrop } from "@/components/Backdrop";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import useScreenSize from "@/hooks/useScreenSize";
import { Search } from "@/layouts/Search";

const Header: React.FC<IHeader> = ({ callBackMenu, refHeaderMenu }) => {
  const { sizeScreen } = useContext(GlobalContext);
  const [isOpenSearchButton, setIsOpenSearchButton] = useState(false);
  const screenSize = useScreenSize();

  return (
    <HeaderWrapper
      id={"header-wrapper"}
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

        {/* {sizeScreen.width > 640 ? (
            <InputSearch />
          ) : ( */}
        <Search />
        {/* )} */}
      </ContainerHeader>
    </HeaderWrapper>
  );
};

export default Header;
