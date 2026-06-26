import { UploadCloudIcon } from "lucide-react";
import type { ChangeEvent } from "react";

type Props = {
  label: string;
  imageName?: string;
  id: string;
  name: string;
  fileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  labelStyles?: string;
};

const ImageUploadZone = ({
  label,
  imageName = "image",
  id,
  name,
  fileChange,
  labelStyles,
}: Props) => {
  return (
    <div>
      <label
        htmlFor={id}
        className={`text-xs font-label font-medium text-secondary capitalize mb-1 ${labelStyles}`}
      >
        {label}
      </label>
      <label
        htmlFor={id}
        className="h-40 w-full bg-gray-50 border border-dashed border-gray-400 rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
      >
        <input
          type="file"
          id={id}
          name={name}
          accept="image/*"
          className="hidden"
          onChange={fileChange}
        />

        <div className="h-10 w-10 bg-primary/10 rounded-full p-2.5 mb-2">
          <UploadCloudIcon className="h-full w-full text-primary" />
        </div>
        <p className="text-primary text-sm font-label">
          Click to upload {imageName}
        </p>
        <p className="text-secondary text-xs font-body">
          PNG or JPG (max: 800x400px)
        </p>
      </label>
    </div>
  );
};

export default ImageUploadZone;
