import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink
        to={"/"}
        className={
          "w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
        }
      >
        <p className="blue-gradient_text">MV</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
          to={"/projects"}
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
