import React from 'react'
import DataTable from 'react-data-table-component';
import { DataTableColumns } from '../../types/Types';

type Props = {
    data: DataTableColumns[];
    columns: any;
    [x: string]: any;
}
const Table = ({ data, columns, ...props }: Props) => {
    return (
        <DataTable
            pagination
            columns={columns}
            data={data}
            style={{...customStyles}}
            dense
            {...props}
        />
    )
}
const customStyles = {
    rows: {
      style: {},
    },
    headCells: {
      style: {
        fontWeight: "bold",
        backgroundColor: "#F8F9FA",
        paddingBottom: 10,
        color: "#162E4A",
        paddingTop: 10,
        fontSize: "14px",
      },
    },
    cells: {
      style: {
        padding: 16,
        fontSize: 15,
        maxWidth: 100,
      },
    },
  };

export default Table