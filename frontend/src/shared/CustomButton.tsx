import { Loader2Icon, type LucideIcon } from "lucide-react";

interface CustomButtonProps {
  type?: "button" | "submit" | "reset";
  title: string;
  loading?: boolean;
  buttonStyles?: string;
  titleStyles?: string;
  iconStyles?: string;
  onClick?: (e?: any) => void;
  Icon?: LucideIcon;
}

const CustomButton = ({
  type = "button",
  title,
  loading,
  buttonStyles,
  titleStyles,
  iconStyles,
  onClick,
  Icon = undefined,
}: CustomButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`h-10 px-4 text-sm bg-blue-500 hover:bg-blue-500/80 transition-colors duration-150 flex items-center justify-center font-body font-semibold rounded-md  cursor-pointer capitalize ${buttonStyles}`}
    >
      {!loading ? (
        <div className={`flex items-center gap-2 ${titleStyles}`}>
          {Icon && <Icon className={`h-4 w-4 ${iconStyles}`} />}
          {title}
        </div>
      ) : (
        <Loader2Icon className={`h-full animate-spin ${titleStyles}`} />
      )}
    </button>
  );
};

export default CustomButton;
