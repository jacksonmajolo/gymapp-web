import "./index.scss";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>NotFound</h1>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Voltar
      </button>
    </>
  );
};
