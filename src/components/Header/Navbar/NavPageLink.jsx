import { Link } from "react-router-dom";

const NavPageLink = ({ item }) => {
  return (
    <>
      <li>
        <Link className="text-lg text-base-content-secondary" to={item.path}>
          {item.name}
        </Link>
      </li>
    </>
  );
};

export default NavPageLink;
