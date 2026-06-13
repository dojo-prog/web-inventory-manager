import { XIcon } from "lucide-react";

interface UploadImagePreviewProps {
  imagePreview: string;
  handleRemove: () => void;
}

const UploadImagePreview = ({
  imagePreview,
  handleRemove,
}: UploadImagePreviewProps) => {
  return (
    <div className="relative h-40 w-40 rounded-md overflow-hidden border border-gray-100 shadow-sm">
      <img
        src={imagePreview}
        alt="brand_logo_preview"
        className="h-full w-full object-contain p-2 bg-secondary/5"
      />

      <button
        type="button"
        className="absolute top-2 right-2 h-5 w-5 rounded-full bg-white/80 backdrop-blur-sm shadow flex items-center justify-center"
        onClick={handleRemove}
      >
        <XIcon className="h-3 w-3 text-gray-600 hover:text-red-600 cursor-pointer" />
      </button>
    </div>
  );
};

export default UploadImagePreview;
