import { UserIcon, Edit3Icon, Trash2Icon } from "lucide-react";
import useUserStore from "../../../../features/users/user.store";
import UserTableLoader from "./UserTableLoader";
import UserTableEmpty from "./UserTableEmpty";

const headers = ["user profile", "email address", "role", "actions"];

const UserTable = () => {
  const { users, fetchingUsers } = useUserStore();

  return (
    <table className="w-full min-w-200 border-collapse text-left align-middle">
      <thead>
        <tr className="border-b border-gray-100 bg-gray-50/70 backdrop-blur-sm sticky top-0 z-10">
          {headers.map((header) => (
            <th
              key={header}
              className={`px-6 py-3.5 text-[11px] font-bold uppercase tracking-wider text-gray-500 ${
                header === "actions" ? "text-right" : "text-left"
              }`}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-100 bg-white">
        {fetchingUsers ? (
          <UserTableLoader />
        ) : users.length === 0 ? (
          <UserTableEmpty />
        ) : (
          users.map((user) => (
            <tr
              key={user.id}
              className="group transition-colors duration-200 hover:bg-gray-50/50 cursor-pointer"
              onClick={() => console.log("Static row clicked:", user.id)}
            >
              {/* Column 1: User Profile (Avatar & Full Name) */}
              <td className="px-6 py-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-full shrink-0 overflow-hidden border border-gray-100">
                    {user.avatar_url ? (
                      <img
                        src={user.avatar_url}
                        alt={`${user.fname} ${user.lname}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <UserIcon size={16} className="text-primary" />
                    )}
                  </div>
                  <div className="flex flex-col truncate">
                    <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                      {user.fname} {user.lname}
                    </span>
                    <span className="text-[11px] font-mono text-gray-400 truncate">
                      ID: {user.id}
                    </span>
                  </div>
                </div>
              </td>

              {/* Column 2: Email Address */}
              <td className="px-6 py-4">
                <span className="text-sm text-gray-600 font-medium">
                  {user.email}
                </span>
              </td>

              {/* Column 3: Role Badge */}
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide capitalize ${
                    user.role === "admin"
                      ? "bg-blue-50 text-blue-700 border border-blue-200"
                      : "bg-gray-50 text-gray-700 border border-gray-200"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                      user.role === "admin" ? "bg-blue-500" : "bg-gray-400"
                    }`}
                  />
                  {user.role}
                </span>
              </td>

              {/* Column 4: Static Mock Action Buttons */}
              <td className="px-6 py-4 text-right">
                <div
                  className="flex items-center justify-end space-x-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() =>
                      console.log("Mock edit context active for:", user.id)
                    }
                    className="p-1.5 text-gray-400 hover:text-blue-600 rounded hover:bg-gray-100 transition-colors"
                    title="Edit User"
                  >
                    <Edit3Icon size={16} />
                  </button>
                  <button
                    onClick={() =>
                      console.log("Mock delete triggered for:", user.id)
                    }
                    className="p-1.5 text-gray-400 hover:text-rose-600 rounded hover:bg-gray-100 transition-colors"
                    title="Delete User"
                  >
                    <Trash2Icon size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
