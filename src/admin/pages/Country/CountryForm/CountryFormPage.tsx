import { useNavigate, useParams } from "react-router-dom";
import { CountryForm } from "./CountryForm";
import Button from "@common/components/Form/Button";
import "./index.scss";

export const CountryFormPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  return (
    <>
      <h1>Country {id ? `- ${id}` : ""}</h1>

      <div>
        <Button
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </Button>
      </div>

      <CountryForm id={id ? parseInt(id) : undefined} />
    </>
  );
};
