import Header from "@/patterns/Header";
import Sidebar from "@/patterns/Sidebar";
import {
  ContainerChildren,
  // ContentChildren,
  SidebarWithHeaderWrapper,
} from "./styles";
import { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "@/contexts/GlobalContext";
import { useOutsideClick } from "@/hooks/useOutsideClick";

const SidebarWithHeader: React.FC<ISidebarWithHeader> = ({ children }) => {
  const { sizeScreen, setSizeChildrenContainer, sizeChildrenContainer } =
    useContext(GlobalContext);
  const [isOpenMenu, setIsOpenMenu] = useState(
    sizeScreen.width < 640 ? false : true
  );

  const refSidebar = useRef<HTMLDivElement>(null);
  const refHeader = useRef<HTMLDivElement>(null);
  const refButtonMenu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpenMenu(sizeScreen.width < 640 ? false : true);
    setSizeChildrenContainer({
      width:
        sizeScreen.width -
        (refSidebar.current?.getBoundingClientRect().width ?? 0),
      height:
        sizeScreen.height -
        (refHeader.current?.getBoundingClientRect().height ?? 0),
    });
  }, [sizeScreen.width, sizeScreen.height, refButtonMenu, refSidebar]);

  useOutsideClick({
    condition: sizeScreen.width < 640,
    ref: refSidebar ?? null,
    extraRef: refButtonMenu ?? null,
    callback() {
      setIsOpenMenu(false);
    },
  });

  return (
    <SidebarWithHeaderWrapper>
      <Header
        refMenuButtonHeader={refButtonMenu}
        refHeaderMenu={refHeader}
        callBackMenu={() => {
          setIsOpenMenu((state) => !state);
        }}
      />
      <ContainerChildren>
        <Sidebar refSideBar={refSidebar} isOpen={isOpenMenu} />
        {/* <ContentChildren> */}
        {children}
        {/* </ContentChildren> */}
      </ContainerChildren>
    </SidebarWithHeaderWrapper>
  );
};

export default SidebarWithHeader;
