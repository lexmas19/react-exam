import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { Link } from "react-router-dom";

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <>
      <header
        className="flex
       justify-center "
      >
        <nav>
          <Link  to="/">მთავარი</Link>
          {" | "}
          <Link to="/Books">წიგნები</Link>
          {" | "}
          <Link to="/contact">კონტაქტი</Link>
        </nav>
      </header>

      <div>
        <h2>წიგნების კატალოგი</h2>
        <p>მკითხველი:{user}</p>
      </div>
    </>
  );
}
