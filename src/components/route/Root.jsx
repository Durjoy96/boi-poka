import Navbar from "../Header/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
