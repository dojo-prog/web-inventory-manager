import React from "react";
import { InboxIcon } from "lucide-react";

export const BrandTableEmpty: React.FC = () => {
  return (
    <tr>
      <td colSpan={5} className="px-6 py-16 text-center bg-white select-none">
        <div className="flex flex-col items-center justify-center max-w-sm mx-auto space-y-4">
          {/* Accent UI Layer Container */}
          <div className="p-4 rounded-full bg-primary/10 text-primary">
            <InboxIcon className="h-8 w-8 stroke-[1.5]" />
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-bold font-headline text-black tracking-wide">
              No records found
            </h3>
            <p className="text-xs font-label font-medium text-gray-500 leading-relaxed">
              We couldn't find any results matching your active criteria. Try
              adjusting your filters or changing your search keywords.
            </p>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default BrandTableEmpty;
