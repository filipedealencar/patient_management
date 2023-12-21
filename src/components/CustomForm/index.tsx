import { useForm, SubmitHandler } from "react-hook-form";
import {
  ContainerButtonsSubmit,
  ContainerInput,
  InputStyle,
  LabelInputForm,
  MainInputForm,
  SectionTitle,
  WrapperCustomForm,
  WrapperInput,
} from "./styles";
import GridResponsive from "../GridResponsive";
import { ICustomForm } from "./types";
import React, { useEffect } from "react";
import { Button } from "../Buttons";

export const CustomForm: React.FC<ICustomForm> = ({
  options,
  currentValues,
  actionDismiss,
  actionSubmit,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => actionSubmit && actionSubmit(data);

  useEffect(() => {
    options.map((section) => {
      section.inputs.map((inputs) => {
        return setValue(inputs.name, inputs.value);
      });
    });
  }, [currentValues]);

  return (
    <WrapperCustomForm onSubmit={handleSubmit(onSubmit)}>
      {options.map((section, index) => (
        <MainInputForm key={index}>
          <SectionTitle>{section.titleSection}</SectionTitle>
          <GridResponsive
            columns={{
              count: 1,
              height: [1, 1],
            }}
            rows={{
              count: 2,
            }}
            spaceColumns={8}
            spaceRows={24}
          >
            {section.inputs.map((itens, index) => (
              <React.Fragment key={index}>
                <WrapperInput>
                  <LabelInputForm>{itens.label}</LabelInputForm>
                  <ContainerInput>
                    <InputStyle
                      {...itens}
                      value={itens.value || ""}
                      {...register(`${itens.name}`, {
                        required: itens.required,
                        onChange: itens.onChange,
                      })}
                    />
                  </ContainerInput>
                </WrapperInput>
                <>{errors[itens.name] && <span>This field is required</span>}</>
              </React.Fragment>
            ))}
          </GridResponsive>
        </MainInputForm>
      ))}
      <ContainerButtonsSubmit>
        <Button
          style={{ width: "130px", height: "40px" }}
          title="Enviar"
          type="submit"
        />
        <Button
          onClick={actionDismiss}
          style={{ width: "130px", height: "40px", backgroundColor: "#fd3737" }}
          title="Cancelar"
        />
      </ContainerButtonsSubmit>
    </WrapperCustomForm>
  );
};
