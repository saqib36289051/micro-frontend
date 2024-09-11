import { ColumnDef } from "@tanstack/react-table";

export type DTableColumn = {
  id: string;
  name: string;
  takeCustomValue: string;
  customValue: string;
};
export type DataTableColumns = {
  id: string;
  userId: string;
  types: DTableColumn[];
  userName: string;
  createdOn: string;
};

export type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
};

export type dataListType = {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalRecords: number;
  data: DataTableColumns[];
};
