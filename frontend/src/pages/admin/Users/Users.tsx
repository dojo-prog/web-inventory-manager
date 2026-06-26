import Header from "./sections/Header";
import UserTableContainer from "./components/UserTableContainer";
import useUserStore from "../../../features/users/user.store";
import { useEffect } from "react";
import useModalStore from "../../../features/ui/modals/modal.store";
import UserModal from "./components/UserModal";

const Users = () => {
  const { fetchUsers, filters } = useUserStore();
  const { userModalOpen } = useModalStore();

  useEffect(() => {
    fetchUsers(filters);
  }, []);

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

      {userModalOpen && <UserModal />}
    </div>
  );
};

export default Users;
