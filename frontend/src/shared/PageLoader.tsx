export const PageLoader = () => {
  return (
    <div
      className="flex h-screen w-screen items-center justify-center bg-background select-none animate-fadeIn"
      role="alert"
      aria-live="assertive"
      aria-busy="true"
    >
      <div className="relative flex items-center justify-center h-30 w-30">
        {/* Decorative Outer Pulsing Ring */}
        <div className="absolute h-full w-full animate-ping rounded-full bg-primary/20 opacity-75" />

        {/* Core Spinning Track */}
        <div className="h-20 w-20 animate-spin rounded-full border-7 border-transparent border-t-primary border-r-primary border-b-primary" />
      </div>
    </div>
  );
};

export default PageLoader;
