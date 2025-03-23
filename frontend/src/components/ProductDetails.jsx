import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
      {/* Product Name */}
      <h2 className="text-2xl font-bold text-gray-800">{product.productName}</h2>
      <p className="text-gray-600 mt-1">
        ⭐ {product.rating} ({product.numberOfRatings} ratings)
      </p>
      <p className="text-green-600 text-lg font-semibold mt-2">
        Price: {product.sellingPrice}
      </p>
      <p className="text-red-500 text-md font-medium">Discount: {product.totalDiscount}</p>

      {/* Bank Offers */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">Bank Offers:</h3>
        <ul className="list-disc ml-6 text-gray-700">
          {product.bankOffers.map((offer, index) => (
            <li key={index}>{offer}</li>
          ))}
        </ul>
      </div>

      {/* About This Item */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">About This Item:</h3>
        <ul className="list-disc ml-6 text-gray-700">
          {product.aboutThisItem.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>

      {/* Product Information */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">Product Information:</h3>
        <ul className="list-none bg-gray-100 p-4 rounded-lg">
          {Object.entries(product.productInformation).map(([key, value]) => (
            <li key={key} className="flex justify-between text-gray-700">
              <span className="font-medium">{key}:</span>
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Product Images */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">Product Images:</h3>
        <div className="grid grid-cols-2 gap-4 mt-2">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Product ${index + 1}`}
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>

      {/* From Manufacturer Images */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">From Manufacturer:</h3>
        <div className="grid grid-cols-2 gap-4 mt-2">
          {product.fromManufacturer.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Manufacturer ${index + 1}`}
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>

      {/* AI-Generated Review Summary */}
      <div className="mt-6 p-4 bg-blue-100 border-l-4 border-blue-500">
        <h3 className="text-lg font-semibold text-gray-800">AI-Generated Review Summary:</h3>
        <p className="italic text-gray-700">{product.aiGeneratedReviewSummary}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
