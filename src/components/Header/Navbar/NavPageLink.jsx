import { NavLink } from "react-router-dom";

const NavPageLink = ({ item }) => {
  return (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `btn text-base text-base-content-secondary ${
              isActive
                ? "border-primary text-primary bg-transparent hover:bg-transparent hover:border-primary"
                : "bg-transparent border-none shadow-none bg-none hover:bg-transparent hover:text-base-content"
            }`
          }
          to={item.path}
        >
          {item.name}
        </NavLink>
      </li>
    </>
  );
};

export default NavPageLink;
