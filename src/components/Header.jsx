import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { Link } from "react-router-dom";

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <>
      <header
        className="w-full flex justify-center bg-slate-900 py-4 shadow-md"
      >
        <nav className="flex items-center gap-3 text-slate-500">
          <Link className="text-slate-200 font-medium hover:text-indigo-300 transition-colors" to="/">მთავარი</Link>
          {" | "}
          <Link className="text-slate-200 font-medium hover:text-indigo-300 transition-colors" to="/Books">წიგნები</Link>
          {" | "}
          <Link className="text-slate-200 font-medium hover:text-indigo-300 transition-colors" to="/contact">კონტაქტი</Link>
        </nav>
      </header>

      <div className="text-center my-8">
        <h2 className="text-3xl font-bold text-slate-800">წიგნების კატალოგი</h2>
        <p className="mt-1 text-slate-500">მკითხველი: {user}</p>
      </div>
    </>
  );
}
