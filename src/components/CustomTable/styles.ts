import { styled } from "styled-components";

export const TableWrapper = styled.div`
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #c3c3c3;
    border-radius: 5px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #8ea2ab;
  }
`;

export const ContainerTable = styled.div`
  font-family: Arial, sans-serif;
  height: 450px;
  overflow: auto;
`;

export const TableStyle = styled.table`
  width: 100%;
  border-spacing: 0px 15px;
  padding: 0px 5px;
`;

export const TheadStyle = styled.thead`
  position: sticky;
  top: 0;
  z-index: 999;
  height: 55px;
`;
export const TRStyle = styled.tr``;
export const THStyle = styled.th`
  padding: 10px;
  background-color: #bcd2ff;
  color: #001240;
  text-transform: capitalize;

  &:first-child {
    /* color: #fff; */
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
export const TDStyle = styled.td`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background: #fff;
  height: 80px;

  &:first-child {
    /* color: #fff; */
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
export const TbodyStyle = styled.tbody`
  /* background: #f2b823; */
`;

export default TableStyle;
