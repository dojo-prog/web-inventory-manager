import { ExternalLinkIcon, PenIcon, TruckIcon, XIcon } from "lucide-react";
import CustomButton from "../../../../shared/CustomButton";
import useSupplierStore from "../../../../features/suppliers/supplier.store";
import useModalStore from "../../../../features/ui/modals/modal.store";

const SupplierDetail = () => {
  const { openSupplierModal } = useModalStore();
  const { selectedSupplier: ss, setSelectedSupplier } = useSupplierStore();

  const handleClose = () => {
    setSelectedSupplier(null);
  };

  if (!ss) {
    return (
      <div className="w-80 bg-surface border border-border rounded-md shadow p-5 flex flex-col items-center justify-center text-center h-112">
        <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-3 shadow-sm">
          <TruckIcon size={20} className="stroke-[1.5]" />
        </div>
        <h3 className="text-sm font-semibold text-text">
          No Supplier Selected
        </h3>
        <p className="text-xs text-secondary mt-1 max-w-50">
          Select a supplier from the list to view their detailed information.
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-80 bg-surface border border-border rounded-md shadow p-5 overflow-y-auto max-h-[calc(100vh-2rem)]">
      {/* Close Button Top Right */}
      <button
        type="button"
        onClick={handleClose}
        className="absolute top-2 right-2 p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
        aria-label="Close details"
      >
        <XIcon size={16} />
      </button>

      {/* Header */}
      <div className="flex items-center space-x-2 mb-6">
        <div className="h-14 w-14 bg-primary/10 rounded flex items-center justify-center shrink-0">
          <h2 className="text-primary font-headline text-2xl font-bold uppercase">
            {ss.name ? ss.name.charAt(0) : "?"}
          </h2>
        </div>
        <div className="flex-1 truncate">
          <h3
            className="font-headline font-semibold text-text truncate"
            title={ss.name}
          >
            {ss.name}
          </h3>
          <p className="text-[10px] text-secondary font-label">
            {ss.supplier_code}
          </p>
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
            {ss.contact_name}
          </h2>
        </div>

        {/* Email */}
        <div>
          <p className="text-[10px] text-secondary font-label uppercase tracking-wider">
            Email Address
          </p>
          <h2 className="font-headline font-medium text-sm text-text break-all">
            {ss.email}
          </h2>
        </div>

        {/* Phone */}
        <div>
          <p className="text-[10px] text-secondary font-label uppercase tracking-wider">
            Phone Number
          </p>
          <h2
            className={`font-headline text-sm ${ss.phone ? "font-medium text-text" : "italic text-text-muted"}`}
          >
            {ss.phone || "Not provided"}
          </h2>
        </div>

        {/* Website */}
        <div>
          <p className="text-[10px] text-secondary font-label uppercase tracking-wider">
            Website
          </p>
          {ss.website ? (
            <a
              href={ss.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-headline font-semibold text-sm hover:underline cursor-pointer flex items-center mt-0.5"
            >
              <span className="truncate max-w-50">
                {ss.website.replace(/^https?:\/\//, "")}
              </span>
              <ExternalLinkIcon size={13} className="ml-1 shrink-0" />
            </a>
          ) : (
            <h2 className="text-sm italic text-text-muted mt-0.5">
              Not provided
            </h2>
          )}
        </div>

        {/* Physical Address */}
        <div>
          <p className="text-[10px] text-secondary font-label uppercase tracking-wider mb-0.5">
            Physical Address
          </p>
          {ss.address_line ? (
            <div className="font-headline font-medium text-xs text-text leading-relaxed space-y-0.5">
              <p>{ss.address_line.street_add}</p>
              <p>
                {ss.address_line.barangay
                  ? `Brgy. ${ss.address_line.barangay}, `
                  : ""}
                {ss.address_line.city}
              </p>
              <p>
                {ss.address_line.province
                  ? `${ss.address_line.province}, `
                  : ""}
                {ss.address_line.postal_code}
              </p>
            </div>
          ) : (
            <h2 className="text-sm italic text-text-muted">
              No address registered
            </h2>
          )}
        </div>

        {/* Status Indicator */}
        <div className="pt-2">
          <p className="text-[10px] text-secondary font-label uppercase tracking-wider mb-1">
            Status
          </p>
          <span
            className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
              ss.is_active
                ? "bg-emerald-100 text-emerald-800"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {ss.is_active ? "Active" : "Inactive"}
          </span>
        </div>

        <div className="w-full border-b border-border" />

        <CustomButton
          title="Edit"
          Icon={PenIcon}
          buttonStyles="w-full bg-white border border-border hover:bg-gray-100"
          onClick={() => openSupplierModal("update", ss)}
        />
      </div>
    </div>
  );
};

export default SupplierDetail;
