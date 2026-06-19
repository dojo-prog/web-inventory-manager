interface ProductTableLoaderProps {
  rowCount?: number;
}

const ProductTableLoader = ({ rowCount = 5 }: ProductTableLoaderProps) => {
  return (
    <>
      {Array.from({ length: rowCount }).map((_, index) => (
        <tr key={`product-skeleton-${index}`} className="animate-pulse">
          {/* Column 1: Product Thumbnail & Title info */}
          <td className="px-6 py-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-200 rounded shrink-0" />
              <div className="w-32 h-4 bg-gray-200 rounded" />
            </div>
          </td>

          {/* Column 2: Brand name block */}
          <td className="px-6 py-4">
            <div className="w-20 h-4 bg-gray-200 rounded" />
          </td>

          {/* Column 3: Category cell skeleton */}
          <td className="px-6 py-4">
            <div className="w-24 h-4 bg-gray-200 rounded" />
          </td>

          {/* Column 4: Price tracking numeric space */}
          <td className="px-6 py-4">
            <div className="w-16 h-4 bg-gray-200 rounded" />
          </td>

          {/* Column 5: Status badge shape */}
          <td className="px-6 py-4">
            <div className="w-14 h-5 bg-gray-100 rounded" />
          </td>

          {/* Column 6: Action icons controls panel */}
          <td className="px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-gray-200 rounded" />
              <div className="w-4 h-4 bg-gray-200 rounded" />
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default ProductTableLoader;
