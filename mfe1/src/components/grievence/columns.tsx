import React from "react";
import { DataTableColumns } from "../../types/Types";
import { Badge } from "../../utils/utils";

export const GrievenceList = [
  {
    name: "User Name",
    selector: (row: DataTableColumns) => row.userName,
  },
  {
    name: "Issues",
    selector: (row: DataTableColumns): any =>
      <>
        {
          row.types.map((item) => (
            <Badge key={item.id}>{item.customValue}</Badge>
          ))
        }
      </>,
    wrap: true
  },
  {
    name: "Date",
    selector: (row: DataTableColumns) => row.createdOn,
  },
];
