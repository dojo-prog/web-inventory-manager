import { ClipboardCheck, TriangleAlertIcon, TruckIcon } from "lucide-react";
import Header from "./sections/Header";
import SummaryCard from "./components/SummaryCard";
import Body from "./sections/Body";
import useDashboardStore from "../../../features/dashboard/dashboard.store";
import { useEffect } from "react";

const Dashboard = () => {
  const { fetchSummary, fetchLowStocks, fetchRecentLogs, summary } =
    useDashboardStore();

  useEffect(() => {
    fetchSummary();
    fetchLowStocks();
    fetchRecentLogs();
  }, []);

  const summaryCards = [
    {
      icon: ClipboardCheck,
      title: "Total Units",
      subTitle: "",
      value: `${summary.total_units}`,
    },
    {
      icon: TriangleAlertIcon,
      title: "Critical Actions",
      subTitle: "Below stock threshold",
      value: `${summary.low_stock_units} Items`,
    },
    {
      icon: TruckIcon,
      title: "Procurrent",
      subTitle: "Verified active partners",
      value: `${summary.active_suppliers}`,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Header />
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {summaryCards.map((sc) => (
          <SummaryCard key={sc.title} item={sc} />
        ))}
      </div>

      {/* Body */}
      <div>
        <Body />
      </div>
    </div>
  );
};

export default Dashboard;
