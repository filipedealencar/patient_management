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
import { useState, useRef, useContext, useEffect } from "react";
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
  const refContentMobile = useRef<HTMLDivElement>(null);

  const [customSizes, setCustomSizes] = useState({
    contentMobile: {
      height: refContentMobile?.current?.getBoundingClientRect().height ?? 0,
      width: 0,
    },
  });

  useEffect(() => {
    setCustomSizes((state) => {
      return {
        ...state,
        contentMobile: {
          ...state.contentMobile,
          height:
            refContentMobile?.current?.getBoundingClientRect().height ?? 0,
        },
      };
    });
  }, [sizeScreen.width, sizeScreen.height, refContentMobile, screenSize]);

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
          <ContentMobile ref={refContentMobile}>
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
        <ButtonSidebar
          $customHeight={
            sizeScreen.height - customSizes.contentMobile.height - 20
          }
        >
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
