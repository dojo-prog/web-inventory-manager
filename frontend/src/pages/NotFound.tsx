import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon, HomeIcon, HelpCircleIcon } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-6 py-12 relative overflow-hidden font-body">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-md w-full text-center relative z-10 space-y-8 animate-fade-in">
        {/* Massive Error Code Header */}
        <div className="relative">
          <h1 className="text-[8rem] font-black font-headline tracking-tighter text-gray-200 select-none">
            404
          </h1>
          <p className="absolute inset-0 flex items-center justify-center text-5xl font-bold uppercase tracking-wide text-primary font-headline">
            Page Missing
          </p>
        </div>

        {/* Messaging Text Context */}
        <div className="space-y-3">
          <h2 className="text-2xl font-headline font-bold text-text tracking-tight">
            Lost in the Inventory?
          </h2>
          <p className="text-sm text-text-muted max-w-sm font-label mx-auto leading-relaxed">
            The page you are looking for doesn't exist, has been migrated, or is
            temporarily out of stock. Let's get you back on track.
          </p>
        </div>

        {/* Action Controls Router Redirect Block */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-secondary bg-white hover:bg-gray-50 border border-border rounded-lg transition-all shadow-sm group cursor-pointer"
          >
            <ArrowLeftIcon
              size={16}
              className="mr-2 transform group-hover:-translate-x-0.5 transition-transform"
            />
            Go Back
          </button>

          <Link
            to="/dashboard"
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary-hover rounded-lg transition-all shadow-sm cursor-pointer"
          >
            <HomeIcon size={16} className="mr-2" />
            Dashboard Home
          </Link>
        </div>

        {/* Subfooter Help Metadata Link */}
        <div className="pt-6 border-t border-gray-200/60 flex items-center justify-center space-x-1.5 text-xs text-text-muted">
          <HelpCircleIcon size={14} />
          <span>Think this is a system mistake?</span>
          <Link
            to="/support"
            className="font-semibold text-primary hover:underline"
          >
            Contact Admin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
