import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const AdminLayout = () => {
  return (
    <div className="h-screen w-screen flex">
      <div className="w-60 border-r border-border bg-surface">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col">
        <div className="h-16 w-full border-b border-border bg-surface">
          <Navbar />
        </div>

        <div className="flex-1 bg-background p-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
