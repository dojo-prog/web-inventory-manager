import { ClipboardCheck, TriangleAlertIcon, TruckIcon } from "lucide-react";
import Header from "./sections/Header";
import SummaryCard from "./components/SummaryCard";

const Dashboard = () => {
  const summaryCards = [
    {
      icon: ClipboardCheck,
      title: "Total Units",
      subTitle: "",
      value: "12,842",
    },
    {
      icon: TriangleAlertIcon,
      title: "Critical Actions",
      subTitle: "Below stock threshold",
      value: "0 Items",
    },
    {
      icon: TruckIcon,
      title: "Procurrent",
      subTitle: "Verified active partners",
      value: "124",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <Header />
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {summaryCards.map((sc) => (
          <SummaryCard key={sc.title} item={sc} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
