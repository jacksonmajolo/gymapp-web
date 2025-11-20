import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CountryRepository } from "@admin/repositories/CountryRepository";
import { CountryService } from "@admin/services/CountryService";
import { type Country } from "@admin/types/Country";
import Button from "@common/components/Form/Button";
import "./index.scss";

export const CountryListPage = () => {
  const navigate = useNavigate();

  const countryService = new CountryService(new CountryRepository());

  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    countryService.index().then((countries) => setCountries(countries ?? []));
  }, []);

  const onCreate = () => {
    navigate(`create`);
  };

  const onEdit = (country: Country) => {
    if (country.id) {
      navigate(`${country.id}/edit`, { state: { id: country.id } });
    }
  };

  const onDelete = (country: Country) => {
    if (country.id) {
      countryService.delete(country.id).then(() => alert("deleted"));
    }
  };

  return (
    <>
      <h1>Countries</h1>
      <div>
        <Button onClick={() => onCreate()}>Create</Button>
      </div>
      <div>
        <ul>
          {countries.map((country) => (
            <li key={country.id}>
              <Button onClick={() => onEdit(country)}>Edit</Button>
              <Button onClick={() => onDelete(country)}>Delete</Button>
              <span>{country.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
