import { WrapperRegister } from "./styles";
import { FormTemplate } from "@/layouts/FormTemplate";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/contexts/GlobalContext";
import { CustomForm } from "@/components/CustomForm";
import toast from "react-hot-toast";
import { insertPatient } from "@/services/api/patient";
import { PatientData } from "@/services/types";

const Register: React.FC = ({}) => {
  const heightHeader = document
    .getElementById("header-wrapper")
    ?.getBoundingClientRect().height;

  const { sizeScreen, sizeChildrenContainer } = useContext(GlobalContext);
  const [customSizes, setCustomSizes] = useState({
    header: heightHeader ?? 0,
  });

  const [customValues, setCustomValues] = useState<
    PatientData | null | undefined
  >();

  useEffect(() => {
    setCustomSizes({
      header: heightHeader ?? 0,
    });
  }, [sizeScreen.width, sizeScreen.height, heightHeader]);

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    item: string
  ) => {
    return setCustomValues((state) => {
      return { ...state!, [item]: event.target.value };
    });
  };
  return (
    <WrapperRegister $customHeight={sizeChildrenContainer.height - 50}>
      <CustomForm
        actionSubmit={(data: any) =>
          toast.promise(insertPatient(data), {
            loading: "Criando...",
            success: <b>Paciente criado com sucesso!</b>,
            error: <b>Erro ao criar usuário.</b>,
          })
        }
        options={[
          {
            titleSection: "Informações de Contato",
            inputs: [
              {
                label: "Nome",
                name: "name",
                placeholder: "Ex: Maria José da Silva",
                value: customValues?.name,
                required: true,
                onChange: (target) => handleOnChange(target, "name"),
              },
              {
                label: "Telefone",
                name: "phone",
                placeholder: "Ex: (81) 9 8888-9999",
                required: true,
                value: customValues?.phone,
                onChange: (target) => handleOnChange(target, "phone"),
              },
              {
                label: "Celular",
                name: "cell",
                placeholder: "Ex: (81) 9 9999-8888",
                value: customValues?.cell,
                onChange: (target) => handleOnChange(target, "cell"),
              },
              {
                label: "Email",
                name: "email",
                placeholder: "Ex: exemplo@exemplo.com ",
                value: customValues?.email,
                onChange: (target) => handleOnChange(target, "email"),
              },
            ],
          },
          {
            titleSection: "Informações Geral",
            inputs: [
              {
                label: "Genero",
                name: "gender",
                placeholder: "Ex: Feminino",
                value: customValues?.gender,
                onChange: (target) => handleOnChange(target, "gender"),
              },
              {
                label: "Data de Nascimento",
                name: "birthDate",
                placeholder: "12/12/2000",
                value: customValues?.birthDate,
                onChange: (target) => handleOnChange(target, "birthDate"),
              },
              {
                label: "CPF",
                name: "cpf",
                placeholder: "Ex: 123.456.789-10",
                value: customValues?.cpf,
                onChange: (target) => handleOnChange(target, "cpf"),
              },
              {
                label: "RG",
                name: "rg",
                placeholder: "Ex: 123.456.78",
                value: customValues?.rg,
                onChange: (target) => handleOnChange(target, "rg"),
              },
              {
                label: "Nome da Mãe",
                name: "motherName",
                placeholder: "Ex: Roberta Alves da Silva",
                value: customValues?.motherName,
                onChange: (target) => handleOnChange(target, "motherName"),
              },
              {
                label: "Nome do Pai",
                name: "fatherName",
                placeholder: "Ex: Carlos Alberto da Silva",
                value: customValues?.fatherName,
                onChange: (target) => handleOnChange(target, "fatherName"),
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
                value: customValues?.lastAppointment,
                onChange: (target) => handleOnChange(target, "lastAppointment"),
              },
              {
                label: "Próxima Consulta",
                name: "nextAppointment",
                placeholder: "Ex: 22/01/2024",
                value: customValues?.nextAppointment,
                onChange: (target) => handleOnChange(target, "nextAppointment"),
              },
              {
                label: "Profissional",
                name: "professional",
                placeholder: "Ex: Ricardo da Silva Cavalcante",
                value: customValues?.professional,
                onChange: (target) => handleOnChange(target, "professional"),
              },
              {
                label: "Especialidade",
                name: "specialty",
                placeholder: "Ex: Cardiologia",
                value: customValues?.specialty,
                onChange: (target) => handleOnChange(target, "specialty"),
              },
              {
                label: "Plano",
                name: "plan",
                placeholder: "Ex: Amil",
                value: customValues?.plan,
                onChange: (target) => handleOnChange(target, "plan"),
              },
              {
                label: "Doenças",
                name: "diseases",
                placeholder: "Ex: Rinite",
                value: customValues?.diseases,
                onChange: (target) => handleOnChange(target, "diseases"),
              },
            ],
          },
        ]}
      />
    </WrapperRegister>
  );
};

export default Register;
