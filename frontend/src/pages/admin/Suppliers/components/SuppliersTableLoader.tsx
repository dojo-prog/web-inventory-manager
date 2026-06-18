const SuppliersTableLoader = () => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((index) => (
        <tr key={index} className="animate-pulse border-b border-gray-100">
          {/* Column 1: Supplier Name Skeleton */}
          <td className="px-6 py-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-200 rounded shrink-0" />
              <div className="space-y-2 w-full">
                <div className="h-4 bg-gray-200 rounded w-32" />
              </div>
            </div>
          </td>

          {/* Column 2: Code Skeleton */}
          <td className="px-6 py-4">
            <div className="h-3 bg-gray-200 rounded w-24" />
          </td>

          {/* Column 3: Contact Name Skeleton */}
          <td className="px-6 py-4">
            <div className="h-4 bg-gray-200 rounded w-20" />
          </td>

          {/* Column 4: Email Skeleton */}
          <td className="px-6 py-4">
            <div className="h-6 bg-gray-200 rounded w-40" />
          </td>

          {/* Column 5: Status Skeleton */}
          <td className="px-6 py-4">
            <div className="h-6 bg-gray-200 rounded-full w-16" />
          </td>
        </tr>
      ))}
    </>
  );
};

export default SuppliersTableLoader;
