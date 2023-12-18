import { Button } from "@/components/Buttons";
import { ContainerHeaderHome, HomeContentButtons, HomeWrapper } from "./styles";
import InputSearch from "@/components/InputSearch";
import CustomTable from "@/components/CustomTable";
import { BadgeText } from "@/components/CustomTable/Badges/ValueText";
import { Patient } from "@/services/types";
import { useContext, useMemo, useState } from "react";
import { GlobalContext } from "@/contexts/GlobalContext";

const Home: React.FC = ({}) => {
  const { sizeScreen } = useContext(GlobalContext);
  const [patientData, setPatientData] = useState<Patient[]>([
    {
      id: 1,
      name: "Agatha Cecília Farias",
      age: 39,
      cpf: "911.724.014-03",
      rg: "22.435.980-0",
      dateOfBirth: "26/07/1984",
      gender: "Feminino",
      motherName: "Jéssica Benedita Sophia",
      fatherName: "Raul Felipe Farias",
      email: "agatha_cecilia_farias@ci.com.br",
      zipCode: "52150-241",
      address: "Rua Piratini",
      number: 152,
      neighborhood: "Dois Unidos",
      city: "Recife",
      state: "PE",
      landline: "(81) 2930-7258",
      cellphone: "(81) 98266-5495",
      height: "1.64",
      weight: 65,
      bloodType: "O+",
      eyeColor: "yellow",
      provider: "Allianz Saúde",
      medicalConditions: ["Diabete", "Depressão", "Asma"],
    },
    {
      id: 2,
      name: "Otávio Severino Enrico de Paula",
      age: 56,
      cpf: "307.591.654-40",
      rg: "42.105.504-2",
      dateOfBirth: "03/06/1967",
      gender: "Masculino",
      motherName: "Giovanna Silvana Isabelly",
      fatherName: "Eduardo Lorenzo de Paula",
      email: "otavio_depaula@fcacomputers.com.br",
      zipCode: "50110-110",
      address: "Praça Professor Agamenon Magalhães",
      number: 885,
      neighborhood: "Santo Amaro",
      city: "Recife",
      state: "PE",
      landline: "(81) 3908-4417",
      cellphone: "(81) 99282-8475",
      height: "1.98",
      weight: 76,
      bloodType: "AB+",
      eyeColor: "yellow",
      provider: "Bradesco Saúde",
      medicalConditions: ["Rinite", "Enxaqueca", "Bronquite"],
    },
    {
      id: 3,
      name: "Bento Vicente Isaac da Paz",
      age: 43,
      cpf: "137.048.234-57",
      rg: "26.848.622-0",
      dateOfBirth: "27/02/1980",
      gender: "Masculino",
      motherName: "Isabela Alessandra",
      fatherName: "Otávio Diogo da Paz",
      email: "bento-dapaz77@engemed.com",
      zipCode: "51150-440",
      address: "Rua Uruguajara",
      number: 598,
      neighborhood: "Imbiribeira",
      city: "Recife",
      state: "PE",
      landline: "(81) 3921-7183",
      cellphone: "(81) 99312-5843",
      height: "1.60",
      weight: 89,
      bloodType: "A-",
      eyeColor: "purple",
      provider: "Hapvida",
      medicalConditions: ["Enxaqueca", "Diabete", "Depressão"],
    },
    {
      id: 4,
      name: "Mário Guilherme Nicolas Rocha",
      age: 55,
      cpf: "349.338.824-10",
      rg: "32.360.057-8",
      dateOfBirth: "10/09/1968",
      gender: "Masculino",
      motherName: "Daiane Isadora Sueli",
      fatherName: "Marcos Yago Gabriel Rocha",
      email: "mario_rocha@dvdja.com.br",
      zipCode: "51260-510",
      address: "Rua Pacajus",
      number: 262,
      neighborhood: "Jordão",
      city: "Recife",
      state: "PE",
      landline: "(81) 2528-5946",
      cellphone: "(81) 98691-8649",
      height: "1.71",
      weight: 54,
      bloodType: "AB+",
      eyeColor: "green",
      provider: "Amil",
      medicalConditions: ["Rinite", "Covid-19", "Depressão"],
    },
    {
      id: 5,
      name: "Silvana Carolina Assis",
      age: 29,
      cpf: "368.787.244-06",
      rg: "45.462.093-7",
      dateOfBirth: "22/06/1994",
      gender: "Feminino",
      motherName: "Isadora Clara",
      fatherName: "Felipe Ryan Nelson Assis",
      email: "silvana_assis@iblojas.com.br",
      zipCode: "51345-220",
      address: "Rua Treze de Dezembro",
      number: 186,
      neighborhood: "COHAB",
      city: "Recife",
      state: "PE",
      landline: "(81) 3894-1405",
      cellphone: "(81) 98296-2890",
      height: "1.52",
      weight: 62,
      bloodType: "A+",
      eyeColor: "red",
      provider: "Porto Seguro Saúde",
      medicalConditions: ["Rinite", "Enxaqueca", "Covid-19"],
    },
    {
      id: 6,
      name: "Leandro Nicolas Manuel Brito",
      age: 22,
      cpf: "642.797.224-39",
      rg: "18.561.522-3",
      dateOfBirth: "22/02/2001",
      gender: "Masculino",
      motherName: "Heloisa Clara Carolina",
      fatherName: "Joaquim Gabriel Augusto Brito",
      email: "leandro_nicolas_brito@weatherford.com",
      zipCode: "52291-066",
      address: "Rua Alpinópolis",
      number: 766,
      neighborhood: "Brejo da Guabiraba",
      city: "Recife",
      state: "PE",
      landline: "(81) 3524-2731",
      cellphone: "(81) 99701-1088",
      height: "1.76",
      weight: 87,
      bloodType: "O-",
      eyeColor: "yellow",
      provider: "Central Nacional Unimed",
      medicalConditions: ["Bronquite", "Depressão", "Asma"],
    },
    {
      id: 7,
      name: "Yuri Kaique Joaquim Novaes",
      age: 79,
      cpf: "328.622.324-75",
      rg: "16.299.125-3",
      dateOfBirth: "01/09/1944",
      gender: "Masculino",
      motherName: "Eloá Alícia",
      fatherName: "Caio Enrico Novaes",
      email: "yuri_kaique_novaes@a.com",
      zipCode: "50740-460",
      address: "Rua Marquês de Barbacena",
      number: 883,
      neighborhood: "Cidade Universitária",
      city: "Recife",
      state: "PE",
      landline: "(81) 3995-5243",
      cellphone: "(81) 98805-1182",
      height: "1.67",
      weight: 70,
      bloodType: "B-",
      eyeColor: "red",
      provider: "SulAmérica Saúde",
      medicalConditions: ["Hipertensão", "Enxaqueca", "Depressão"],
    },
    {
      id: 8,
      name: "Evelyn Ana Rezende",
      age: 39,
      cpf: "961.011.344-31",
      rg: "26.923.705-7",
      dateOfBirth: "07/09/1984",
      gender: "Feminino",
      motherName: "Sabrina Rafaela Lívia",
      fatherName: "Oliver Anthony Rezende",
      email: "evelyn_ana_rezende@fosjc.unesp.br",
      zipCode: "51300-320",
      address: "Rua Soldado Antônio Aparecido",
      number: 832,
      neighborhood: "COHAB",
      city: "Recife",
      state: "PE",
      landline: "(81) 3615-8364",
      cellphone: "(81) 98832-5319",
      height: "1.72",
      weight: 45,
      bloodType: "AB-",
      eyeColor: "purple",
      provider: "Grupo NotreDame Intermédica",
      medicalConditions: ["Depressão", "Diabete", "Asma"],
    },
    {
      id: 9,
      name: "Bruna Emily Sueli Baptista",
      age: 18,
      cpf: "991.683.154-81",
      rg: "27.027.954-4",
      dateOfBirth: "01/04/2005",
      gender: "Feminino",
      motherName: "Liz Heloisa",
      fatherName: "Juan André Baptista",
      email: "brunaemilybaptista@fedato.com.br",
      zipCode: "52390-605",
      address: "Rua Cosme e Damião",
      number: 638,
      neighborhood: "Passarinho",
      city: "Recife",
      state: "PE",
      landline: "(81) 3822-2862",
      cellphone: "(81) 98676-2031",
      height: "1.76",
      weight: 80,
      bloodType: "O+",
      eyeColor: "yellow",
      provider: "Hapvida",
      medicalConditions: ["Hipertensão", "Asma", "Diabete"],
    },
    {
      id: 10,
      name: "Oliver Hugo Joaquim Gonçalves",
      age: 33,
      cpf: "940.297.724-47",
      rg: "20.893.581-2",
      dateOfBirth: "27/11/1990",
      gender: "Masculino",
      motherName: "Maya Juliana Lara",
      fatherName: "Paulo Kauê Lorenzo Gonçalves",
      email: "oliver.hugo.goncalves@recnev.com.br",
      zipCode: "50711-080",
      address: "Rua Cipotânia",
      number: 746,
      neighborhood: "Cordeiro",
      city: "Recife",
      state: "PE",
      landline: "(81) 2501-4782",
      cellphone: "(81) 98170-9665",
      height: "1.70",
      weight: 104,
      bloodType: "B-",
      eyeColor: "green",
      provider: "Central Nacional Unimed",
      medicalConditions: ["Rinite", "Bronquite", "Enxaqueca"],
    },
  ]);

  const data = useMemo(() => {
    return patientData.map((item, index) => {
      const itens = {
        nome: <BadgeText name={item.name} />,
        cpf: <BadgeText name={item.cpf} />,
        plano: <BadgeText name={item.provider} />,
        telefone: <BadgeText name={item.landline} />,
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
      <CustomTable responsive={sizeScreen.width < 640} data={data} />
    </HomeWrapper>
  );
};

export default Home;
