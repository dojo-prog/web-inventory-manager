import { type LucideIcon } from "lucide-react";

type SummaryCard = {
  icon: LucideIcon;
  title: string;
  subTitle: string;
  value: string | number;
};

const SummaryCard = ({ item }: { item: SummaryCard }) => {
  const { icon: Icon, title, subTitle, value } = item;

  return (
    <div className="bg-surface border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between">
        <div>
          <p className="font-label text-xs uppercase tracking-wider text-secondary">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-headline font-semibold tracking-tight text-text">
            {value}
          </h2>

          <p className="mt-1 font-body text-sm text-secondary">{subTitle}</p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="text-primary" size={22} />
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
