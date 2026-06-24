const VariantsTableLoader = () => {
  const placeholderRows = Array.from({ length: 4 });

  return (
    <>
      {placeholderRows.map((_, index) => (
        <tr key={`loader-row-${index}`} className="animate-pulse">
          {/* Column 1: Variant ID Skeleton */}
          <td className="px-6 py-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-200 rounded shrink-0" />
              <div className="h-3 bg-gray-200 rounded w-24" />
            </div>
          </td>

          {/* Column 2: Color Skeleton */}
          <td className="px-6 py-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-5 h-5 rounded-full bg-gray-200 shrink-0" />
              <div className="h-3 bg-gray-200 rounded w-20" />
            </div>
          </td>

          {/* Column 3: Size Skeleton */}
          <td className="px-6 py-4">
            <div className="h-5 bg-gray-200 rounded w-10" />
          </td>

          {/* Column 4: Stock Skeleton */}
          <td className="px-6 py-4">
            <div className="h-6 bg-gray-200 rounded-full w-28" />
          </td>

          {/* Column 5: Actions Skeleton */}
          <td className="px-6 py-4 text-right">
            <div className="flex items-center justify-end space-x-3">
              <div className="w-5 h-5 bg-gray-200 rounded" />
              <div className="w-5 h-5 bg-gray-200 rounded" />
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default VariantsTableLoader;
