import { Link } from "react-router-dom";
import "./index.scss";

export const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to={"countries"}>Countries</Link>
        </li>
      </ul>
    </>
  );
};
