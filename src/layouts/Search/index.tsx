import InputSearch from "@/components/InputSearch";
import {
  ContainerSearch,
  OpenSearchMobile,
  ContentSearch,
  ContentIconLoupe,
  ContainerResultSearch,
  ContentResultSearch,
} from "./styles";
import { GlobalContext } from "@/contexts/GlobalContext";
import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { Backdrop } from "@/components/Backdrop";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { IconButtonSearch } from "@/icons";
import PatientApi from "@/services/api/patient";
import { useDebounce } from "@/hooks/useDebounce";
import { PatientData } from "@/services/types";
import React from "react";
import { useRouter } from "next/router";

export const Search: React.FC = ({}) => {
  const { sizeScreen, setCurrentPatient } = useContext(GlobalContext);
  const [isOpenSearchButton, setIsOpenSearchButton] = useState(false);
  const refSearchButtonMobile = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!isOpenSearchButton) return;
    setInputValue(event.target.value);
  };

  useOutsideClick({
    ref: refSearchButtonMobile ?? null,
    callback() {
      setIsOpenSearchButton(false);
    },
  });

  const [patientByName, setPatienByName] = useState<
    PatientData[] | null | undefined
  >();

  const patient = new PatientApi();

  const { data } = patient.searchPatientsByName(debouncedValue);

  useEffect(() => {
    setPatienByName(data);
  }, [data]);

  return (
    <>
      <ContentSearch>
        <ContentIconLoupe
          onClick={() => setIsOpenSearchButton((state) => !state)}
        >
          {/* <IconLoupe /> */}
          <IconButtonSearch />
        </ContentIconLoupe>
      </ContentSearch>

      <OpenSearchMobile
        $customWidth={sizeScreen.width - 100}
        ref={refSearchButtonMobile}
        $isOpen={isOpenSearchButton}
      >
        {isOpenSearchButton && (
          <ContainerSearch>
            <InputSearch
              value={inputValue}
              onChange={handleChange}
              styles={{
                wrapper: {
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                },
                container: {
                  width:
                    sizeScreen.width < 640
                      ? `calc(${sizeScreen.width}px - 100px)`
                      : "50%",
                },
              }}
            />
            <ContainerResultSearch
              style={{
                width:
                  sizeScreen.width < 640
                    ? `calc(${sizeScreen.width}px - 100px)`
                    : "50%",
              }}
            >
              {(Array.isArray(patientByName) ? patientByName : []).map(
                (patient) => (
                  <React.Fragment key={patient.id}>
                    <ContentResultSearch
                      onClick={() => {
                        setCurrentPatient(patient);
                        router.push("/overview");
                      }}
                    >
                      {patient.name}
                    </ContentResultSearch>
                  </React.Fragment>
                )
              )}
            </ContainerResultSearch>
          </ContainerSearch>
        )}
      </OpenSearchMobile>

      <Backdrop isOpen={isOpenSearchButton} />
    </>
  );
};
