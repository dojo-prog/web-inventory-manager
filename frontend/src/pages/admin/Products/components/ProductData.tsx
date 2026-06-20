import useProductStore from "../../../../features/products/product.store";

const ProductData = () => {
  const { selectedProduct: sp } = useProductStore();

  return (
    <div className="w-full border border-border shadow rounded-md p-5">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xs font-label text-secondary max-w-1/2 truncate">
          ID: {sp?.id}
        </h3>
        <span
          className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-label font-medium ${
            sp?.status === "active"
              ? "bg-emerald-100 text-emerald-800"
              : "bg-gray-100 text-gray-700"
          } capitalize`}
        >
          {sp?.status}
        </span>
      </div>

      <div className="flex items-start">
        <h2 className="flex-1 text-3xl font-headline font-medium">
          {sp?.name}
        </h2>
        <h3 className="text-right text-primary font-headline text-lg font-medium ml-4">
          ₱{sp?.price}
        </h3>
      </div>

      <div className="my-6">
        <p className="text-sm text-secondary font-body">{sp?.description}</p>
      </div>

      <div className="w-full border-b border-gray-300 mb-6" />

      <div className="grid grid-cols-3">
        <div className="w-full text-center">
          <p className="text-xs font-label uppercase text-secondary">Gender</p>
          <h3 className="font-medium font-headline capitalize">{sp?.gender}</h3>
        </div>
        <div className="w-full text-center">
          <p className="text-xs font-label uppercase text-secondary">
            Category
          </p>
          <h3 className="font-medium font-headline capitalize">
            {sp?.category_name}
          </h3>
        </div>
        <div className="w-full text-center">
          <p className="text-xs font-label uppercase text-secondary">Brand</p>
          <h3 className="font-medium font-headline capitalize">
            {sp?.brand_name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProductData;
