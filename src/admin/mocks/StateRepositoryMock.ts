import { type ResponsePaginateData } from "@common/types/ResponsePaginateData";
import { type ResponseData } from "@common/types/ResponseData";
import { type IStateRepository } from "@admin/repositories/StateRepository";
import { type State } from "@admin/types/State";

import countries from "./data/countries.json";

export class StateRepositoryMock implements IStateRepository {
  private items: State[] = countries;

  async list(): Promise<ResponsePaginateData<State> | undefined> {
    return {
      data: this.items,
      meta: {
        currentPage: 1,
        from: 1,
        lastPage: 1,
        perPage: 1,
        to: 1,
        total: 1,
      },
    };
  }

  async index(): Promise<ResponseData<State> | undefined> {
    return { data: this.items };
  }

  async find(id: number): Promise<State | undefined> {
    return this.items.find((item) => item.id === id);
  }

  async create(record: State): Promise<State> {
    record.id = this.items.length + 1;
    
    this.items.push(record);
    return record;
  }

  async update(id: number, record: State): Promise<State> {
    record.id = id;

    this.items = this.items.map((item) => (id === item.id ? record : item));
    return record;
  }

  async delete(id: number): Promise<void> {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
