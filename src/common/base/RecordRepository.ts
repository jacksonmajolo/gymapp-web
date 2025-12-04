import type { ResponsePaginateData } from "@common/types/ResponsePaginateData";
import type { ResponseData } from "@common/types/ResponseData";
import type { Record } from "@common/types/Record";
import { Api } from "@common/api/Api";
import type { ListParam } from "@common/types/ListParam";
import type { IndexParam } from "@common/types/IndexParam";

export interface IRecordRepository<T extends Record> {
  list(params?: ListParam): Promise<ResponsePaginateData<T> | undefined>;
  index(params?: IndexParam): Promise<ResponseData<T> | undefined>;
  find(id: number): Promise<T | undefined>;
  create(data: object): Promise<T>;
  update(id: number, data: object): Promise<T>;
  delete(id: number): Promise<void>;
}

export class RecordRepository<T extends Record>
  implements IRecordRepository<T>
{
  private api: Api;
  private path: string;

  constructor(api: Api, path: string = "") {
    this.api = api;

    this.path = path;
  }

  public async list(params?: ListParam): Promise<ResponsePaginateData<T> | undefined> {
    return this.api.get<ResponsePaginateData<T>>(`${this.path}/list`, params);
  }

  public async index(params?: IndexParam): Promise<ResponseData<T> | undefined> {
    return this.api.get<ResponseData<T>>(`${this.path}`, params);
  }

  public async find(id: number): Promise<T | undefined> {
    return this.api.get<T>(`${this.path}/${id}`);
  }

  public async create(record: object): Promise<T> {
    return this.api.post<T>(`${this.path}`, record);
  }

  public async update(id: number, record: object): Promise<T> {
    return this.api.put<T>(`${this.path}/${id}`, record);
  }

  public async delete(id: number): Promise<void> {
    return this.api.delete<void>(`${this.path}/${id}`);
  }
}
