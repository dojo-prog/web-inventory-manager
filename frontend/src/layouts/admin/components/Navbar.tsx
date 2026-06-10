import {
  BellIcon,
  HelpCircleIcon,
  SettingsIcon,
  User2Icon,
} from "lucide-react";
import NavItem from "./NavItem";

const navItems = [
  { id: "notifications", Icon: BellIcon },
  { id: "settings", Icon: SettingsIcon },
  { id: "help", Icon: HelpCircleIcon },
];

const Navbar = () => {
  return (
    <div className="h-full w-full px-12 flex items-center justify-between">
      {/* Left Section */}
      <div></div>

      {/* Right Section */}
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-5">
          {navItems.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </div>

        <div className="h-8 border-r-2 border-border" />

        <div className="h-8 w-8 bg-primary/20 rounded-md flex items-center justify-center cursor-pointer">
          {/* TODO Render user image */}
          <User2Icon size={17} className="text-primary" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
