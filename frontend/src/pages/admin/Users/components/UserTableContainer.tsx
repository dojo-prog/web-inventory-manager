import TableHeader from "./TableHeader";
import UserTable from "./UserTable";

const UserTableContainer = () => {
  return (
    <div className="h-full flex flex-col overflow-hidden rounded-md border border-border bg-surface shadow-sm">
      <div>
        <TableHeader />
      </div>

      {/* Table */}
      <div>
        <UserTable />
      </div>
    </div>
  );
};

export default UserTableContainer;
