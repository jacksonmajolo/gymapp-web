export interface ResponsePaginateData<T> {
  data: T[];
  meta: {
    currentPage: number;
    from: number;
    lastPage: number;
    perPage: number;
    to: number;
    total: number;
  };
}
