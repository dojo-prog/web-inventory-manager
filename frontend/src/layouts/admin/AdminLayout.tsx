import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const AdminLayout = () => {
  return (
    <div className="h-screen w-full flex overflow-hidden bg-background">
      <div className="w-60 border-r border-border bg-surface shrink-0 hidden md:block">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <div className="h-16 w-full border-b border-border bg-surface shrink-0">
          <Navbar />
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          <main className="max-w-7xl mx-auto w-full">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
