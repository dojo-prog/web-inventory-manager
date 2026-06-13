import type { LucideIcon } from "lucide-react";

interface SummaryCardProps {
  header: string;
  value: string;
  subheader?: string;
  Logo?: LucideIcon;
  containerStyles?: string;
  headerStyles?: string;
  valueStyles?: string;
  subheaderStyles?: string;
}

const SummaryCard = ({
  header,
  value,
  subheader,
  Logo,
  containerStyles,
  headerStyles,
  valueStyles,
  subheaderStyles,
}: SummaryCardProps) => {
  return (
    <div
      className={`relative w-full border border-border rounded p-5 space-y-1 shadow transition-all hover:scale-101 hover:shadow-lg duration-150 ${containerStyles} overflow-hidden`}
    >
      <h3
        className={`text-xs font-headline text-secondary font-semibold uppercase ${headerStyles}`}
      >
        {header}
      </h3>
      <h2 className={`font-bold capitalize ${valueStyles}`}>{value}</h2>
      <p className={`text-[11px] text-secondary font-label ${subheaderStyles}`}>
        {subheader}
      </p>

      {Logo && (
        <div className="absolute top-0 right-0 text-white">
          {<Logo size={200} />}
        </div>
      )}
    </div>
  );
};

export default SummaryCard;
