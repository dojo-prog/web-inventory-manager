import React from "react";

interface TableSkeletonProps {
  rowCount?: number;
}

export const BrandTableLoader: React.FC<TableSkeletonProps> = ({
  rowCount = 5,
}) => {
  return (
    <>
      {Array.from({ length: rowCount }).map((_, rowIndex) => (
        <tr
          key={`table-row-skeleton-${rowIndex}`}
          className="animate-pulse border-b border-gray-100"
        >
          {/* Column 1: Brand Name Skeleton (Logo Box + Name String) */}
          <td className="px-6 py-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-200 rounded shrink-0" />
              <div className="h-4 bg-gray-200 rounded w-28" />
            </div>
          </td>

          {/* Column 2: Brand ID Skeleton */}
          <td className="px-6 py-4">
            <div className="h-3 bg-gray-200 rounded w-24" />
          </td>

          {/* Column 3: Active Units Count Skeleton */}
          <td className="px-6 py-4">
            <div className="h-4 bg-gray-200 rounded w-16" />
          </td>

          {/* Column 4: Date Added Skeleton */}
          <td className="px-6 py-4">
            <div className="h-3 bg-gray-200 rounded w-20" />
          </td>

          {/* Column 5: Actions Layout Skeleton */}
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

export default BrandTableLoader;
