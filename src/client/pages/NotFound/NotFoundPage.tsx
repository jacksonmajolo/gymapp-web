import "./index.scss";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>NotFound</h2>

      <div>
        <button onClick={() => { navigate(-1); }}>
          Voltar
        </button>
      </div>
    </>
  );
};
