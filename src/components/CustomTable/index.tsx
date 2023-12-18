import React, { useContext, useMemo } from "react";
import { useTable } from "react-table";
import {
  TableStyle,
  TheadStyle,
  TRStyle,
  THStyle,
  TbodyStyle,
  TDStyle,
  TableWrapper,
  ContainerTable,
} from "./styles";

const CustomTable: React.FC<ICustomTable> = ({ data, responsive }) => {
  const columns = useMemo(() => {
    if (data.length === 0) {
      return [];
    }

    const sampleItem = data[0];
    return Object.keys(sampleItem).map((key) => ({
      Header: key,
      accessor: key.toLowerCase(),
    }));
  }, [data]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  const TableResponsive = ({}) => {
    return (
      <TableWrapper>
        <ContainerTable>
          {React.Children.toArray(
            data.map((item, i) => {
              const {
                getTableProps,
                getTableBodyProps,
                headerGroups,
                rows,
                prepareRow,
              } = useTable({ columns, data: [item] });

              return (
                <TableStyle {...getTableProps()}>
                  <TheadStyle>
                    {React.Children.toArray(
                      headerGroups.map((headerGroup, index) => (
                        <TRStyle
                          {...headerGroup.getHeaderGroupProps()}
                          key={headerGroup.id}
                        >
                          {React.Children.toArray(
                            headerGroup.headers.map((column) => (
                              <THStyle
                                {...column.getHeaderProps()}
                                key={column.id}
                              >
                                {column.render("Header")}
                              </THStyle>
                            ))
                          )}
                        </TRStyle>
                      ))
                    )}
                  </TheadStyle>
                  <TbodyStyle {...getTableBodyProps()}>
                    {React.Children.toArray(
                      rows.map((row, index) => {
                        prepareRow(row);
                        return (
                          <TRStyle {...row.getRowProps()} key={row.id}>
                            {row.cells.map((cell) => {
                              return (
                                <TDStyle
                                  {...cell.getCellProps()}
                                  key={cell.column.id}
                                >
                                  {cell.render("Cell")}
                                </TDStyle>
                              );
                            })}
                          </TRStyle>
                        );
                      })
                    )}
                  </TbodyStyle>
                </TableStyle>
              );
            })
          )}
        </ContainerTable>
      </TableWrapper>
    );
  };

  const TableDefault = ({}) => {
    return (
      <TableWrapper>
        <ContainerTable>
          <TableStyle {...getTableProps()}>
            <TheadStyle>
              {React.Children.toArray(
                headerGroups.map((headerGroup, index) => (
                  <TRStyle
                    {...headerGroup.getHeaderGroupProps()}
                    key={headerGroup.id}
                  >
                    {headerGroup.headers.map((column) => (
                      <THStyle {...column.getHeaderProps()} key={column.id}>
                        {column.render("Header")}
                      </THStyle>
                    ))}
                  </TRStyle>
                ))
              )}
            </TheadStyle>
            <TbodyStyle {...getTableBodyProps()}>
              {React.Children.toArray(
                rows.map((row, index) => {
                  prepareRow(row);
                  return (
                    <TRStyle {...row.getRowProps()} key={row.id}>
                      {row.cells.map((cell) => {
                        return (
                          <TDStyle
                            {...cell.getCellProps()}
                            key={cell.column.id}
                          >
                            {cell.render("Cell")}
                          </TDStyle>
                        );
                      })}
                    </TRStyle>
                  );
                })
              )}
            </TbodyStyle>
          </TableStyle>
        </ContainerTable>
      </TableWrapper>
    );
  };

  return responsive ? <TableResponsive /> : <TableDefault />;
};

export default CustomTable;
