import { LogOutIcon } from "lucide-react";
import { adminRoutes } from "../../../app/routers/admin.routes";
import SidebarTab from "./SidebarTab";
import useAuthStore from "../../../features/auth/auth.store";

const Sidebar = () => {
  const { logout } = useAuthStore();

  return (
    <div className="h-screen w-full p-6 flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-headline font-bold text-primary">
          Dojo Inventory
        </h2>
        <p className="font-label text-secondary text-xs">Enterprise Retail</p>
      </div>

      {/* Tabs */}
      <div className="flex-1 w-full space-y-2">
        {adminRoutes.map(
          (r) => !r.hideFromSidebar && <SidebarTab key={r.path} item={r} />,
        )}
      </div>

      {/* Footer */}
      <div className="h-16 border-t border-border flex flex-col item-center justify-center">
        <button
          className="h-full w-full mt-4 px-4 flex items-center rounded-md text-secondary transition-colors duration-200 hover:bg-secondary/10 cursor-pointer"
          onClick={logout}
        >
          <LogOutIcon size={20} className="mr-2" />
          <span className="text-sm font-body">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
