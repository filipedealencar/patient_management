interface IGridResponsive {
  children: React.ReactNode;
  columns: { count: number; height?: number[] };
  rows: { count: number; height?: number[] };
  spaceColumns: number;
  spaceRows: number;
  padding?: string;
  width?: number;
  height?: number;
}

interface IContainerGridResponsiveStyle {
  $columns: { count: number; height?: number[] };
  $rows: { count: number; height?: number[] };
  $spaceColumns: number;
  $spaceRows: number;
  $width?: number;
  $height?: number;
}

interface IMainGridResponsiveStyle {
  $padding?: string;
}
