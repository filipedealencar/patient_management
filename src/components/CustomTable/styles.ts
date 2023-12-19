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

  ${({ theme }) => theme.media.max.mobileXL`  
   height: calc(100% - 144px);
   overflow: auto;
   `}
`;

export const ContainerTable = styled.div`
  font-family: Arial, sans-serif;
  height: 450px;
  overflow: auto;

  ${({ theme }) => theme.media.max.mobileXL`  
     display: flex;
     flex-direction: column;
     height: auto;
     gap: 24px; 
     overflow: hidden;
  `}
`;

export const TableStyle = styled.table`
  width: 100%;
  border-spacing: 0px 15px;
  padding: 0px 5px;

  ${({ theme }) => theme.media.max.mobileXL`
  display: flex;
  justify-content: center;
  `}
`;

export const TheadStyle = styled.thead`
  position: sticky;
  top: 0;
  z-index: 99;
  height: 55px;

  ${({ theme }) => theme.media.orientation.landscape`
  height: auto;
  `}

  ${({ theme }) => theme.media.max.mobileXL`
  position: relative;
  `}
`;
export const TRStyle = styled.tr`
  ${({ theme }) => theme.media.max.mobileXL`
  display: flex;
  flex-direction: column;
  `}

  &:hover {
    td > span {
      background: #dbdbdb;
    }
  }
`;
export const THStyle = styled.th`
  padding: 10px;
  background-color: #bcd2ff;
  color: #001240;
  text-transform: capitalize;

  &:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  ${({ theme }) => theme.media.max.mobileXL`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #a2a2a3;
  height: 62px;

  &:first-child {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  &:last-child {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  `}
`;
export const TDStyle = styled.td`
  height: 80px;

  &:first-child {
    span {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
  }

  &:last-child {
    span {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }

  ${({ theme }) => theme.media.max.mobileXL`
  border-bottom: 1px solid #a2a2a3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 114%;

  &:first-child {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  &:last-child {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  `}
`;
export const TbodyStyle = styled.tbody`
  ${({ theme }) => theme.media.max.mobileXL`  
width: 100%
`}
`;

export default TableStyle;
