const LowStockTableLoader = () => {
  return (
    <tbody className="bg-white">
      {[...Array(4)].map((_, index) => (
        <tr
          key={index}
          className="animate-pulse border-b border-gray-100 last:border-b-0"
        >
          {/* Product (Image + Name + ID) */}
          <td className="px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 shrink-0 rounded-lg bg-gray-100" />
              <div className="flex flex-col gap-2 min-w-0 flex-1">
                <div className="h-4 w-3/4 max-w-40 rounded bg-gray-100" />
                <div className="h-3 w-1/2 max-w-20 rounded bg-gray-100/60" />
              </div>
            </div>
          </td>

          {/* Brand */}
          <td className="px-6 py-4">
            <div className="h-5 w-16 rounded bg-gray-100" />
          </td>

          {/* Category */}
          <td className="px-6 py-4">
            <div className="h-4 w-28 rounded bg-gray-100/80" />
          </td>

          {/* Current Stock */}
          <td className="px-6 py-4">
            <div className="h-4 w-14 rounded bg-gray-100" />
          </td>

          {/* Status Badge */}
          <td className="px-6 py-4">
            <div className="h-6 w-20 rounded-full bg-gray-100/70" />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default LowStockTableLoader;
