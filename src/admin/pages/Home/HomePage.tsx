import { Link } from "react-router-dom";
import "./index.scss";

export const HomePage = () => {
  return (
    <>
      <h2>Home</h2>
      
      <ul>
        <li>
          <Link to={"countries"}>Countries</Link>
        </li>
      </ul>
    </>
  );
};
