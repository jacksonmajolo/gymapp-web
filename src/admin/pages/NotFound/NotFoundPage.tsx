import { useNavigate } from "react-router-dom";
import "./index.scss";
import Button from "@common/components/Form/Button";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>NotFound</h1>
      <Button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </Button>
    </>
  );
};
