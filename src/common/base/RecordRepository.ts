import type { ResponsePaginateData } from "@common/types/ResponsePaginateData";
import type { ResponseData } from "@common/types/ResponseData";
import type { Record } from "@common/types/Record";
import { Api } from "@common/api/Api";

export interface IRecordRepository<T extends Record> {
  list(): Promise<ResponsePaginateData<T> | undefined>;
  index(): Promise<ResponseData<T> | undefined>;
  find(id: number): Promise<T | undefined>;
  create(data: object): Promise<T>;
  update(id: number, data: object): Promise<T>;
  delete(id: number): Promise<void>;
}

export class RecordRepository<T extends Record>
  implements IRecordRepository<T>
{
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  public async list(): Promise<ResponsePaginateData<T> | undefined> {
    return this.api.get<ResponsePaginateData<T>>("/list");
  }

  public async index(): Promise<ResponseData<T> | undefined> {
    return this.api.get<ResponseData<T>>("/");
  }

  public async find(id: number): Promise<T | undefined> {
    return this.api.get<T>(`/${id}`);
  }

  public async create(record: object): Promise<T> {
    return this.api.post<T>("/", record);
  }

  public async update(id: number, record: object): Promise<T> {
    return this.api.put<T>(`/${id}`, record);
  }

  public async delete(id: number): Promise<void> {
    this.api.delete<void>(`/${id}`);
  }
}
