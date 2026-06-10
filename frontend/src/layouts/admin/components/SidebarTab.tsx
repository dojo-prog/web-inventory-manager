import { NavLink } from "react-router-dom";
import type { Route } from "../../../types/shared.types";

const SidebarTab = ({ item: r }: { item: Route }) => {
  return (
    <NavLink
      to={r.path}
      end={r.path === "/admin"}
      className={({ isActive }) =>
        `h-10 w-full px-4 flex items-center justify-start font-bold transition-colors duration-150 select-none ${isActive ? "border-l-2 border-primary text-primary font-semibold hoer:bg-primary/10" : "text-secondary hover:bg-secondary/10 font-thin"} `
      }
    >
      <r.Icon size={20} className="mr-2" />
      <span className="text-sm font-body">{r.title}</span>
    </NavLink>
  );
};

export default SidebarTab;
