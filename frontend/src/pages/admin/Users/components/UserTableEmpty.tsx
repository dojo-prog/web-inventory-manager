import { InboxIcon } from "lucide-react";

interface UserTableEmptyProps {
  colSpan?: number;
}

export const UserTableEmpty = ({ colSpan = 5 }: UserTableEmptyProps) => {
  return (
    <tr>
      <td colSpan={colSpan} className="px-6 py-12 text-center">
        <div className="flex flex-col items-center justify-center max-w-sm mx-auto">
          <div className="p-3 bg-primary/10 rounded-2xl text-primary mb-4 ">
            <InboxIcon size={24} strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-semibold font-headline text-gray-900 mb-1">
            No users found
          </h3>
          <p className="text-xs text-gray-500 font-label">
            Your database doesn't have any users registered yet, or your current
            filter matching yielded no rows.
          </p>
        </div>
      </td>
    </tr>
  );
};

export default UserTableEmpty;
