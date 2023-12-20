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
import React from "react";
import { Button } from "../Buttons";

export const CustomForm: React.FC<ICustomForm> = ({ options }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

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
                      {...register(`${itens.name}`, {
                        required: itens.required,
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
          style={{ width: "130px", height: "40px", backgroundColor: "#fd3737" }}
          title="Cancelar"
        />
      </ContainerButtonsSubmit>
    </WrapperCustomForm>
  );
};
