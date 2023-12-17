import Header from "@/patterns/Header";
import Sidebar from "@/patterns/Sidebar";
import {
  ContainerChildren,
  ContentChildren,
  SidebarWithHeaderWrapper,
} from "./styles";

const SidebarWithHeader: React.FC<ISidebarWithHeader> = ({ children }) => {
  return (
    <SidebarWithHeaderWrapper>
      <Header />
      <ContainerChildren>
        <Sidebar />
        <ContentChildren>{children}</ContentChildren>
      </ContainerChildren>
    </SidebarWithHeaderWrapper>
  );
};

export default SidebarWithHeader;
