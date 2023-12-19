import { MainGridResponsive, ContainerGridResponsive } from "./styles";

export const GridResponsive: React.FC<IGridResponsive> = ({
  columns,
  rows,
  spaceColumns,
  spaceRows,
  padding,
  width,
  height,
  children,
}) => {
  return (
    <MainGridResponsive $padding={padding}>
      <ContainerGridResponsive
        $spaceRows={spaceRows}
        $spaceColumns={spaceColumns}
        $rows={rows}
        $columns={columns}
        $width={width}
        $height={height}
      >
        {children}
      </ContainerGridResponsive>
    </MainGridResponsive>
  );
};

export default GridResponsive;
