import { Outlet } from "react-router";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="appLayout">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
