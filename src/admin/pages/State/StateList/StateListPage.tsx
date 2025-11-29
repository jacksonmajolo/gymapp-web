import { useNavigate } from "react-router-dom";
import Button from "@common/components/Form/Button";
import "./index.scss";
import { StateList } from "./StateList";

export const StateListPage = () => {
  const navigate = useNavigate();

  const onCreate = () => {
    navigate(`create`);
  };

  return (
    <>
      <h2>States</h2>
      
      <div>
        <Button onClick={() => onCreate()}>
          Create
        </Button>
      </div>

      <StateList/>
    </>
  );
};
