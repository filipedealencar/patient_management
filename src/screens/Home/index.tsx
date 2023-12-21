import { Button } from "@/components/Buttons";
import { ContainerHeaderHome, HomeContentButtons, HomeWrapper } from "./styles";
import InputSearch from "@/components/InputSearch";
import CustomTable from "@/components/CustomTable";
import { BadgeText } from "@/components/CustomTable/Badges/ValueText";
import { PatientData } from "@/services/types";
import { useContext, useEffect, useMemo, useState } from "react";
import { GlobalContext } from "@/contexts/GlobalContext";
import PatientApi from "@/services/api/patient";

const Home: React.FC = ({}) => {
  const { sizeScreen } = useContext(GlobalContext);
  const [patientData, setPatientData] = useState<PatientData[]>([]);

  const patient = new PatientApi();

  const { data } = patient.getAllPatients();

  useEffect(() => {
    setPatientData(data ?? []);
  }, [data]);

  const dataPatient = useMemo(() => {
    return patientData.map((item, index) => {
      const itens = {
        nome: <BadgeText name={item.name} />,
        cpf: <BadgeText name={item.cpf} />,
        plano: <BadgeText name={item.plan} />,
        telefone: <BadgeText name={item.phone} />,
      };
      const { telefone, plano, ...rest } = itens;
      return sizeScreen.width > 770 && sizeScreen.width < 1012
        ? { ...rest, plano }
        : sizeScreen.width > 640 && sizeScreen.width < 770
        ? rest
        : itens;
    });
  }, [patientData, sizeScreen.width]);

  return (
    <HomeWrapper>
      {/* <ContainerHeaderHome> */}
      {/* {sizeScreen.width <= 640 && (
          <HomeContentButtons>
            <Button
              style={{
                borderColor: "#c9c9c9",
                color: "#959595",
                height: 45,
                width: 180,
                background: "none",
              }}
              buttonType="invert"
              title="teste"
            />
            <Button
              style={{ width: 180, height: 45 }}
              title="Lista de Pacientes"
            />
            <Button
              style={{
                borderColor: "#c9c9c9",
                color: "#959595",
                width: 180,
                height: 45,
                background: "none",
              }}
              buttonType="invert"
              title="teste"
            />
          </HomeContentButtons>
        )} */}
      {/* </ContainerHeaderHome> */}
      <CustomTable responsive={sizeScreen.width < 640} data={dataPatient} />
    </HomeWrapper>
  );
};

export default Home;
