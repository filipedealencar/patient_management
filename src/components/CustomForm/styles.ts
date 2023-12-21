import styled from "styled-components";

export const WrapperCustomForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 38px;
  background: #fff;
  padding: 20px;
  border-radius: 20px;
`;

export const MainInputForm = styled.div`
  /* width: 40%; */
  /* padding: 20px; */
`;

export const SectionTitle = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 0.8rem;
  color: rgb(0, 0, 0);
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const LabelInputForm = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  color: rgb(0, 0, 0);
  font-family: "Open Sans";
`;

export const InputStyle = styled.input`
  &:focus {
    outline: none;
  }

  background-color: #f9f9f9;
  border: none;
  height: 100%;
  width: 100%;
  color: #959595;
`;

export const ContainerInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: #bbbbbb 0px 0px 0px 1px;
  /* width: 180px; */
  height: 25px;
  border-radius: 5px;
  padding: 8px;
  transition: all 0.2s ease-out 0s;
  background-color: #f9f9f9;

  &:has(${InputStyle}:focus) {
    transition: all 0.2s ease-out 0s;
    border-color: #0144dd;
    outline: none;
    box-shadow: #0144dd 0px 0px 0px 3px;
  }

  &:hover {
    box-shadow: #000 0px 0px 0px 3px;
  }
`;

export const ContainerButtonsSubmit = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-left: 10px;
`;
