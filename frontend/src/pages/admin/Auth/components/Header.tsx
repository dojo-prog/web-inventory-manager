const Header = () => {
  return (
    <nav className="h-16 shadow-xl border-b border-border  flex items-center justify-between px-8">
      <div className="flex items-center space-x-4">
        <h2 className="text-xl font-bold font-headline">Dojo Inventory</h2>
        <button className="px-3 py-1 text-[9px] bg-primary text-white uppercase font-bold rounded-full">
          Admin Portal
        </button>
      </div>
    </nav>
  );
};

export default Header;
