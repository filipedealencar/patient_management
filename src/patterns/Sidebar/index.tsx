import { Button } from "@/components/Buttons";
import {
  ButtonSidebar,
  ContentIcon,
  ContentIconLoupeSidebar,
  ContentMobile,
  OpenSearchMobileSidebar,
  SidebarWrapper,
  TextIcon,
} from "./styles";
import {
  IconAdd,
  IconList,
  IconLogotipo,
  IconLoupe,
  IconOverview,
} from "@/icons";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useState, useRef, useContext } from "react";
import { GlobalContext } from "@/contexts/GlobalContext";
import useScreenSize from "@/hooks/useScreenSize";
import { Backdrop } from "@/components/Backdrop";
import InputSearch from "@/components/InputSearch";
import { useRouter } from "next/router";

const Sidebar: React.FC<ISidebar> = ({ isOpen, refSideBar }) => {
  const [isOpenSearchButton, setIsOpenSearchButton] = useState(false);
  const { sizeScreen } = useContext(GlobalContext);
  const router = useRouter();
  const pathname = router.pathname;
  const screenSize = useScreenSize();

  const refContainerButtonSearch = useRef<HTMLDivElement>(null);
  const refSearchButtonMobile = useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref: refSearchButtonMobile ?? null,
    extraRef: refContainerButtonSearch ?? null,
    callback() {
      setIsOpenSearchButton(false);
    },
  });

  return (
    <>
      <SidebarWrapper ref={refSideBar} $isOpen={isOpen}>
        {screenSize === "tablet" && sizeScreen.width > sizeScreen.height && (
          <ContentMobile>
            <IconLogotipo />
            <ContentIconLoupeSidebar>
              <div
                ref={refContainerButtonSearch}
                onClick={() => {
                  setIsOpenSearchButton((state) => !state);
                }}
              >
                <IconLoupe />
              </div>
              <OpenSearchMobileSidebar
                $customWidth={sizeScreen.width - 100}
                $isOpen={isOpenSearchButton}
                ref={refSearchButtonMobile}
              >
                <InputSearch
                  styles={{
                    container: { width: "50%", height: "40px" },
                  }}
                />
              </OpenSearchMobileSidebar>
            </ContentIconLoupeSidebar>
          </ContentMobile>
        )}
        <ButtonSidebar>
          <ContentIcon
            onClick={() => router.push("/")}
            $isActive={pathname === "/"}
          >
            <IconList />
            <TextIcon $isActive={pathname === "/"}>Lista</TextIcon>
          </ContentIcon>
          <ContentIcon
            onClick={() => router.push("/overview")}
            $isActive={pathname === "/overview"}
          >
            <IconOverview />
            <TextIcon $isActive={pathname === "/overview"}>
              Visão Geral
            </TextIcon>
          </ContentIcon>
          <ContentIcon $isActive={pathname === "/register"}>
            <IconAdd />
            <TextIcon $isActive={pathname === "/register"}>Cadastrar</TextIcon>
          </ContentIcon>
        </ButtonSidebar>
      </SidebarWrapper>

      <Backdrop isOpen={isOpenSearchButton} />
    </>
  );
};

export default Sidebar;
