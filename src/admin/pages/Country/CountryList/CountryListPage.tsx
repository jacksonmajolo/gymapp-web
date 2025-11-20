import { useNavigate } from "react-router-dom";
import Button from "@common/components/Form/Button";
import "./index.scss";
import { CountryList } from "./CountryList";

export const CountryListPage = () => {
  const navigate = useNavigate();

  const onCreate = () => {
    navigate(`create`);
  };

  return (
    <>
      <h2>Countries</h2>
      
      <div>
        <Button onClick={() => onCreate()}>
          Create
        </Button>
      </div>

      <CountryList/>
    </>
  );
};
