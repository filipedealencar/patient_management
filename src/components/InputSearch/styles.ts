import styled from "styled-components";

export const InputSearchWrapper = styled.div``;

export const InputSearchStyle = styled.input`
  &:focus {
    outline: none;
  }

  background-color: #f9f9f9;
  border: none;
  height: 100%;
  width: 100%;
  color: #959595;
`;

export const ContainerInputSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: #c9c9c9 0px 0px 0px 3px;
  width: 180px;
  height: 27px;
  border-radius: 10px;
  padding: 8px;
  transition: all 0.2s ease-out 0s;
  background-color: #f9f9f9;

  &:has(${InputSearchStyle}:focus) {
    transition: all 0.2s ease-out 0s;
    border-color: #0144dd;
    outline: none;
    box-shadow: #0144dd 0px 0px 0px 3px;
  }

  &:hover {
    box-shadow: #000 0px 0px 0px 3px;
  }
`;

export const ButtonLoupe = styled.div`
  padding: 8px;
  cursor: pointer;
`;
