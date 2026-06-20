import { CameraIcon, Loader2Icon } from "lucide-react";
import type { ChangeEvent } from "react";
import useProductImageStore from "../../../../features/product_images/product_image.store";

type Props = {
  id: string;
  name: string;
  fileChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const AddImageButton = ({ id, name, fileChange }: Props) => {
  const { loading } = useProductImageStore();

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
        disabled={loading}
      />

      {!loading ? (
        <>
          <CameraIcon size={15} className="text-secondary mb-1" />
          <span className="text-[10px] font-label text-secondary select-none">
            Add Image
          </span>
        </>
      ) : (
        <Loader2Icon size={20} className="text-secondary animate-spin" />
      )}
    </label>
  );
};

export default AddImageButton;
