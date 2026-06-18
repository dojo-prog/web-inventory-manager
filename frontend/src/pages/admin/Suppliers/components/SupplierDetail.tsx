import { ExternalLinkIcon, PenIcon } from "lucide-react";
import CustomButton from "../../../../shared/CustomButton";

const SupplierDetail = () => {
  return (
    <div className="w-80 bg-surface border border-border rounded-md shadow p-5 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-6">
        <div className="h-14 w-14 bg-primary/10 rounded flex items-center justify-center">
          <h2 className="text-primary font-headline text-2xl font-bold">A</h2>
        </div>
        <div className="flex-1 truncate">
          <h3 className="font-headline font-semibold text-text">
            Acme Global Logistics
          </h3>
          <p className="text-[10px] text-secondary font-label">SUP-ACME-001</p>
        </div>
      </div>

      {/* Main Details Body */}
      <div className="space-y-4">
        {/* Contact Name */}
        <div>
          <p className="text-[10px] text-secondary font-label uppercase tracking-wider">
            Contact Person
          </p>
          <h2 className="font-headline font-medium text-sm text-text">
            Jane Doe
          </h2>
        </div>

        {/* Email */}
        <div>
          <p className="text-[10px] text-secondary font-label uppercase tracking-wider">
            Email Address
          </p>
          <h2 className="font-headline font-medium text-sm text-text">
            jane.doe@acmeglobal.com
          </h2>
        </div>

        {/* Phone */}
        <div>
          <p className="text-[10px] text-secondary font-label uppercase tracking-wider">
            Phone Number
          </p>
          <h2 className="font-headline font-medium text-sm text-text">
            +63 912 345 6789
          </h2>
        </div>

        {/* Website */}
        <div>
          <p className="text-[10px] text-secondary font-label uppercase tracking-wider">
            Website
          </p>
          <div className="text-blue-500 font-headline font-semibold text-sm hover:underline cursor-pointer flex items-center mt-0.5">
            <span>www.acmeglobal.com</span>
            <ExternalLinkIcon size={13} className="ml-1" />
          </div>
        </div>

        {/* Physical Address (Mocks the JSONB payload breakdown) */}
        <div>
          <p className="text-[10px] text-secondary font-label uppercase tracking-wider mb-0.5">
            Physical Address
          </p>
          <div className="font-headline font-medium text-xs text-text leading-relaxed space-y-0.5">
            <p>123 Innovation Way, Corporate Center</p>
            <p>Brgy. Fort Bonifacio, Taguig City</p>
            <p>Metro Manila, 1634</p>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="pt-2">
          <p className="text-[10px] text-secondary font-label uppercase tracking-wider mb-1">
            Status
          </p>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800">
            Active
          </span>
        </div>

        <div className="w-full border-b border-border" />

        <CustomButton
          title="Edit"
          Icon={PenIcon}
          buttonStyles="w-full bg-white border border-border hover:bg-gray-100"
        />
      </div>
    </div>
  );
};

export default SupplierDetail;
