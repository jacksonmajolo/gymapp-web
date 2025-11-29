import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { type Country } from "@admin/types/Country";
import Button from "@common/components/Form/Button";
import "./index.scss";
import { useServices } from "@admin/contexts/ServiceContext";

export const CountryList = () => {
  const navigate = useNavigate();
  
  const { countryService } = useServices();
  
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    countryService.index().then((countries) => setCountries(countries ?? []));
  }, []);

  const onEdit = (country: Country) => {
    if (country.id) {
      navigate(`${country.id}/edit`, { state: { id: country.id } });
    }
  };

  const onDelete = (country: Country) => {
    if (country.id) {
        countryService.delete(country.id).then(() => {
          setCountries(countries.filter(c => c.id !== country.id));
        }).catch((error) => {
          console.error(error.message);
        });
    }
  };

  return (
    <>
      <div>
        <table>
          <tbody>
          {countries.map((country) => (
            <tr key={country.id}>
              <td>
                <Button onClick={() => onEdit(country)}>Edit</Button>
              </td>
              <td>
                <Button onClick={() => onDelete(country)}>Delete</Button>
              </td>
              <td>
                {country.code}
              </td>
              <td>
                {country.name}
              </td>
              <td>
                {country.active ? "Active" : "Inactive"}
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
