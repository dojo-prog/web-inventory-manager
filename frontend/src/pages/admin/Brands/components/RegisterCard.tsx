import { TagsIcon } from "lucide-react";
import useModalStore from "../../../../features/ui/modals/modal.store";

const RegisterCard = () => {
  const { openBrandModal } = useModalStore();

  return (
    <button
      className="w-full bg-surface border-3 border-dashed border-border rounded p-5 flex flex-col items-center justify-center space-y-4 hover:scale-105 transition duration-150 cursor-pointer"
      onClick={() => openBrandModal("create")}
    >
      <div className="h-14 w-14 bg-primary/10 rounded flex items-center justify-center">
        <TagsIcon className="h-full text-primary" />
      </div>

      <div className="text-center">
        <h2 className="text-xl font-headline font-bold text-primary mb-1">
          Register New
        </h2>
        <p className="text-xs text-secondary font-label">
          Expand your brand portfolio
        </p>
      </div>
    </button>
  );
};

export default RegisterCard;
