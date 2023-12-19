import styled from "styled-components";

export const MainGridResponsive = styled.div<IMainGridResponsiveStyle>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${({ $padding }) => $padding && $padding};
`;
export const ContainerGridResponsive = styled.div<IContainerGridResponsiveStyle>`
  display: grid;
  grid-template-columns: ${({ $columns }) =>
    $columns.count > 0 &&
    ($columns.height
      ? $columns.height.map((col) => col + "fr").join(" ")
      : `repeat(${$columns.count}, 1fr)`)};
  grid-template-rows: ${({ $rows }) =>
    $rows.count > 0 &&
    ($rows.height
      ? $rows.height.map((row) => row + "fr").join(" ")
      : `repeat(${$rows.count}, 1fr)`)};
  grid-column-gap: ${({ $spaceColumns }) => $spaceColumns}px;
  grid-row-gap: ${({ $spaceRows }) => $spaceRows}px;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
`;
