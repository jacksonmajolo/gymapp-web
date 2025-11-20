import { type IRecordRepository } from "./RecordRepository";
import { type ResponsePaginateData } from "@common/types/ResponsePaginateData";
import { type Record } from "@common/types/Record";

export interface IRecordService<T extends Record> {
  list(): Promise<ResponsePaginateData<T> | undefined>;
  index(): Promise<T[] | undefined>;
  find(id: number): Promise<T | undefined>;
  create(data: object): Promise<T>;
  update(id: number, data: object): Promise<T>;
  delete(id: number): Promise<void>;
}

export class RecordService<T extends Record> implements IRecordService<T> {
  protected repository: IRecordRepository<T>;

  constructor(repository: IRecordRepository<T>) {
    this.repository = repository;
  }

  async list(): Promise<ResponsePaginateData<T> | undefined> {
    return this.repository.list();
  }

  async index(): Promise<T[] | undefined> {
    return this.repository.index().then((response) => response?.data);
  }

  async find(id: number): Promise<T | undefined> {
    return this.repository.find(id);
  }

  async create(record: object): Promise<T> {
    return this.repository.create(record);
  }

  async update(id: number, record: object): Promise<T> {
    return this.repository.update(id, record);
  }

  async delete(id: number): Promise<void> {
    this.repository.delete(id);
  }
}
