import { WrenchIcon } from "lucide-react";

const UnderDevelopment = () => {
  return (
    <div className="h-[calc(100vh-10rem)] flex items-center justify-center px-6 py-12 relative overflow-hidden font-body">
      {/* Decorative background grid pattern */}

      <div className="max-w-sm w-full text-center relative z-10 space-y-6 animate-fade-in">
        {/* Simplified Icon Block */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="w-25 h-25 bg-primary/10 text-primary rounded-xl flex items-center justify-center border shadow-sm animate-pulse">
            <WrenchIcon size={50} />
          </div>
          <span className="text-md font-bold uppercase tracking-widest text-primary bg-primary/10/10 border border px-2.5 py-0.5 rounded-full shadow-inner">
            Work In Progress
          </span>
        </div>

        {/* Portfolio Feature Context */}
        <div className="space-y-2">
          <h2 className="text-6xl font-bold font-headline text-text tracking-tight">
            Module Under Construction
          </h2>
        </div>
      </div>
    </div>
  );
};

export default UnderDevelopment;
