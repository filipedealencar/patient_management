import { WrapperRegister } from "./styles";
import { FormTemplate } from "@/layouts/FormTemplate";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/contexts/GlobalContext";
import { CustomForm } from "@/components/CustomForm";

const Register: React.FC = ({}) => {
  const heightHeader = document
    .getElementById("header-wrapper")
    ?.getBoundingClientRect().height;

  const { sizeScreen, sizeChildrenContainer } = useContext(GlobalContext);
  const [customSizes, setCustomSizes] = useState({
    header: heightHeader ?? 0,
  });

  useEffect(() => {
    setCustomSizes({
      header: heightHeader ?? 0,
    });
  }, [sizeScreen.width, sizeScreen.height, heightHeader]);
  return (
    <WrapperRegister $customHeight={sizeChildrenContainer.height - 50}>
      <CustomForm
        // isModal={false}
        // height={sizeScreen.height - 80 - customSizes.header}
        options={[
          {
            titleSection: "Informações de Contato",
            inputs: [
              {
                label: "Nome",
                name: "name",
                placeholder: "Ex: Maria José da Silva",
              },
              {
                label: "Telefone",
                name: "phone",
                placeholder: "Ex: (81) 9 8888-9999",
                required: true,
              },
              {
                label: "Celular",
                name: "cell",
                placeholder: "Ex: (81) 9 9999-8888",
              },
              {
                label: "Email",
                name: "email",
                placeholder: "Ex: exemplo@exemplo.com ",
              },
            ],
          },
          {
            titleSection: "Informações Geral",
            inputs: [
              { label: "Genero", name: "gender", placeholder: "Ex: Feminino" },
              {
                label: "Data de Nascimento",
                name: "birthDate",
                placeholder: "12/12/2000",
              },
              { label: "CPF", name: "cpf", placeholder: "Ex: 123.456.789-10" },
              { label: "RG", name: "rg", placeholder: "Ex: 123.456.78" },
              {
                label: "Nome da Mãe",
                name: "motherName",
                placeholder: "Ex: Roberta Alves da Silva",
              },
              {
                label: "Nome do Pai",
                name: "fatherName",
                placeholder: "Ex: Carlos Alberto da Silva",
              },
            ],
          },
          {
            titleSection: "Informações Médica",
            inputs: [
              {
                label: "Ultima Consulta",
                name: "lastAppointment",
                placeholder: "Ex: 22/10/2023",
              },
              {
                label: "Próxima Consulta",
                name: "nextAppointment",
                placeholder: "Ex: 22/01/2024",
              },
              {
                label: "Profissional",
                name: "professional",
                placeholder: "Ex: Ricardo da Silva Cavalcante",
              },
              {
                label: "Especialidade",
                name: "specialty",
                placeholder: "Ex: Cardiologia",
              },
              { label: "Plano", name: "healthPlan", placeholder: "Ex: Amil" },
              { label: "Doenças", name: "diseases", placeholder: "Ex: Rinite" },
            ],
          },
        ]}
      />
    </WrapperRegister>
  );
};

export default Register;
