const NavItem = ({ item }: { item: any }) => {
  return (
    <button className="h-5 w-5 text-secondary hover:text-black cursor-pointer">
      <item.Icon className="h-full w-full" />
    </button>
  );
};

export default NavItem;
