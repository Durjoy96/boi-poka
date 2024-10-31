import NavPageLink from "./NavPageLink";
import Button from "../../Buttons/Button";

const Navbar = () => {
  const NavbarLinks = [
    { path: "/", name: "Home" },
    { path: "/listed-books", name: "Listed Books" },
    { path: "/pages-to-read", name: "Pages to Read" },
  ];

  return (
    <div className="py-4 bg-base-100">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {NavbarLinks.map((item, idx) => (
                <NavPageLink key={idx} item={item}></NavPageLink>
              ))}
            </ul>
          </div>
          <a className="text-2xl font-bold text-base-content">BoiPoka</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {NavbarLinks.map((item, idx) => (
              <NavPageLink key={idx} item={item}></NavPageLink>
            ))}
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <Button isPrimary={true} text="Sign In"></Button>
          <Button isPrimary={false} text="Sign Up"></Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
