const CategoryTableLoader = () => {
  const skeletonRows = Array.from({ length: 7 });

  return (
    <>
      {skeletonRows.map((_, index) => (
        <tr key={`loader-row-${index}`} className="animate-pulse">
          {/* Column 1: Category Name Skeleton */}
          <td className="px-6 py-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded w-36" />
            </div>
          </td>

          {/* Column 2: Category ID Skeleton */}
          <td className="px-6 py-4">
            <div className="h-3 bg-gray-200 rounded w-48" />
          </td>

          {/* Column 3: Slug Skeleton */}
          <td className="px-6 py-4">
            <div className="h-6 bg-gray-200 rounded w-24" />
          </td>

          {/* Column 4: Actions Skeleton */}
          <td className="px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="h-4 w-4 bg-gray-200 rounded" />
              <div className="h-4 w-4 bg-gray-200 rounded" />
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default CategoryTableLoader;
