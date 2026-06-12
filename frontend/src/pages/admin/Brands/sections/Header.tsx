import useBrandStore from "../../../../features/brands/brand.store";

const Header = () => {
  const { total_count } = useBrandStore();

  const headerMetaData = [
    { title: "Total Brands", value: total_count },
    // { title: "Active Items", value: 1402 },
  ];

  return (
    <div className="flex items-center justify-between">
      <h2 className="text-4xl font-headline font-semibold">
        Manage Brand Portfolio
      </h2>

      <div className="flex space-x-6">
        {headerMetaData.map((item) => (
          <div key={item.title}>
            <span className="text-xs text-secondary font-label">
              {item.title}
            </span>
            <h2 className="text-2xl font-semibold text-primary font-headline text-right">
              {item.value}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
