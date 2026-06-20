import AddImageButton from "./AddImageButton";

const ProductImages = () => {
  return (
    <div className="w-full">
      {/* Preview Image */}
      <div className="h-90 border bg-gray-200/10 border-border rounded-md shadow mb-4"></div>

      {/* Images */}
      <div className="grid grid-cols-6 gap-4">
        <div className="w-full aspect-square bg-gray-400/10"></div>

        {/* Add Image Button */}
        <AddImageButton />
      </div>
    </div>
  );
};

export default ProductImages;
