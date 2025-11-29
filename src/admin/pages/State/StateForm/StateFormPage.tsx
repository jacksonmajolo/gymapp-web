import { useNavigate, useParams } from "react-router-dom";
import { StateForm } from "./StateForm";
import Button from "@common/components/Form/Button";
import "./index.scss";

export const StateFormPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  return (
    <>
      <h2>State {id ? `- ${id}` : ""}</h2>

      <div>
        <Button onClick={() => { navigate(-1);}}>
          Back
        </Button>
      </div>

      <StateForm id={id ? parseInt(id) : undefined} />
    </>
  );
};
