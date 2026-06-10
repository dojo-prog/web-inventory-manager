import LowStockTable from "../components/LowStockTable";
import RecentLogs from "../components/RecentLogs";

const Body = () => {
  return (
    <div className="flex gap-4 h-120">
      <div className="flex-1 min-h-0">
        <LowStockTable />
      </div>

      <div className="w-80 min-h-0">
        <RecentLogs />
      </div>
    </div>
  );
};

export default Body;
