import Header from "./sections/Header";
import UserTableContainer from "./components/UserTableContainer";

const Users = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Header />
      </div>

      {/* Table */}
      <div className="h-[calc(100vh-15rem)]">
        <UserTableContainer />
      </div>
    </div>
  );
};

export default Users;
