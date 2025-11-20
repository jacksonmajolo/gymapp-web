import { type ResponsePaginateData } from "@common/types/ResponsePaginateData";
import { type ResponseData } from "@common/types/ResponseData";
import { type ICountryRepository } from "@admin/repositories/CountryRepository";
import { type Country } from "@admin/types/Country";

import countries from "./data/countries.json";

export class CountryRepositoryMock implements ICountryRepository {
  private items: Country[] = countries;

  async list(): Promise<ResponsePaginateData<Country> | undefined> {
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

  async index(): Promise<ResponseData<Country> | undefined> {
    return { data: this.items };
  }

  async find(id: number): Promise<Country | undefined> {
    return this.items.find((item) => item.id === id);
  }

  async create(record: Country): Promise<Country> {
    record.id = this.items.length + 1;
    
    this.items.push(record);
    return record;
  }

  async update(id: number, record: Country): Promise<Country> {
    record.id = id;

    this.items = this.items.map((item) => (id === item.id ? record : item));
    return record;
  }

  async delete(id: number): Promise<void> {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
