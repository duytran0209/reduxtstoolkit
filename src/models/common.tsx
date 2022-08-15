export interface PaginationParams {
  _limit: number;
  _page: number;
  _totalRows: number;
}

export interface ListResponse<Type> {
  data: Type[];
  pagination: PaginationParams;
}

export interface ListParams {
  _page?: number;
  _limit?: number;
  _sort?: string;
  _order?: "asc" | "desc";

  [key: string]: any;
}
// listParams chua cac tham so can truyen vao duong link cua api.
