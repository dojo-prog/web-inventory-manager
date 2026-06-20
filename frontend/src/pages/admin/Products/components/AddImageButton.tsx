import { CameraIcon } from "lucide-react";
import type { ChangeEvent } from "react";

type Props = {
  id: string;
  name: string;
  fileChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const AddImageButton = ({ id, name, fileChange }: Props) => {
  return (
    <label
      htmlFor={id}
      className="w-full aspect-square bg-gray-400/10 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 cursor-pointer hover:bg-gray-400/20 transition-colors"
    >
      <input
        type="file"
        id={id}
        name={name}
        accept="image/*"
        className="hidden"
        onChange={fileChange}
      />

      <CameraIcon size={15} className="text-secondary mb-1" />
      <span className="text-[10px] font-label text-secondary select-none">
        Add Image
      </span>
    </label>
  );
};

export default AddImageButton;
