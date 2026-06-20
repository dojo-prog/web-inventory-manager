import { CameraIcon } from "lucide-react";

const AddImageButton = () => {
  return (
    <div className="w-full aspect-square bg-gray-400/10 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 cursor-pointer">
      <CameraIcon size={15} className="text-secondary" />
      <span className="text-[10px] font-label text-secondary">Add Image</span>
    </div>
  );
};

export default AddImageButton;
