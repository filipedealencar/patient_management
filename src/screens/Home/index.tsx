import { HomeWrapper } from "./styles";
import CustomTable from "@/components/CustomTable";
import { BadgeText } from "@/components/CustomTable/Badges/ValueText";
import { PatientData } from "@/services/types";
import { useContext, useEffect, useMemo, useState } from "react";
import { GlobalContext } from "@/contexts/GlobalContext";
import PatientApi, { getPatientById } from "@/services/api/patient";
import { useRouter } from "next/router";

const Home: React.FC = ({}) => {
  const { sizeScreen, setCurrentPatient, currentPatient } =
    useContext(GlobalContext);
  const [patientsData, setPatientsData] = useState<PatientData[]>([]);
  const router = useRouter();

  const patient = new PatientApi();

  const { data: patients } = patient.getAllPatients();

  useEffect(() => {
    setPatientsData(patients || []);
  }, [patients]);

  const getPatientAndNavigate = (id: number) => {
    getPatientById(id).then((res) => {
      setCurrentPatient(res);
      setTimeout(() => {
        router.push("/overview");
      }, 100);
    });
  };

  const dataPatient = useMemo(() => {
    return patientsData.map((item, index) => {
      const itens = {
        nome: (
          <BadgeText
            callBack={() => getPatientAndNavigate(item.id!)}
            name={item.name}
          />
        ),
        cpf: (
          <BadgeText
            callBack={() => getPatientAndNavigate(item.id!)}
            name={item.cpf}
          />
        ),
        plano: (
          <BadgeText
            callBack={() => getPatientAndNavigate(item.id!)}
            name={item.plan}
          />
        ),
        telefone: (
          <BadgeText
            callBack={() => getPatientAndNavigate(item.id!)}
            name={item.phone}
          />
        ),
      };
      const { telefone, plano, ...rest } = itens;
      return sizeScreen.width > 770 && sizeScreen.width < 1012
        ? { ...rest, plano }
        : sizeScreen.width > 640 && sizeScreen.width < 770
        ? rest
        : itens;
    });
  }, [patientsData, sizeScreen.width]);

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
