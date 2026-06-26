interface UserTableLoaderProps {
  rows?: number;
}

export const UserTableLoader = ({ rows = 4 }: UserTableLoaderProps) => {
  return (
    <>
      {Array.from({ length: rows }).map((_, index) => (
        <tr key={`skeleton-row-${index}`} className="animate-pulse">
          {/* Column 1 Skeleton: User Profile */}
          <td className="px-6 py-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full shrink-0 border border-gray-100" />
              <div className="flex flex-col space-y-2">
                <div className="h-4 bg-gray-200 rounded w-28" />
                <div className="h-3 bg-gray-100 rounded w-44" />
              </div>
            </div>
          </td>

          {/* Column 2 Skeleton: Email Address */}
          <td className="px-6 py-4">
            <div className="h-4 bg-gray-200 rounded w-40" />
          </td>

          {/* Column 3 Skeleton: Role Badge */}
          <td className="px-6 py-4">
            <div className="h-5 bg-gray-100 rounded-full w-20 border border-gray-200" />
          </td>

          {/* Column 4 Skeleton: Action Buttons */}
          <td className="px-6 py-4 text-right">
            <div className="flex items-center justify-end space-x-2">
              <div className="w-8 h-8 bg-gray-50 rounded" />
              <div className="w-8 h-8 bg-gray-50 rounded" />
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default UserTableLoader;
