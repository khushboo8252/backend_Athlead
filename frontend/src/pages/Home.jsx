import React, { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";

const Home = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://backend-athlead.onrender.com/api/scraper")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch product details");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Amazon Product Details
        </h1>

        {/* Loading, Error, and Product Conditions */}
        {loading ? (
          <p className="text-center text-gray-600 animate-pulse">Fetching product details...</p>
        ) : error ? (
          <p className="text-center text-red-500 font-medium">{error}</p>
        ) : (
          <ProductDetails product={product} />
        )}
      </div>
    </div>
  );
};

export default Home;
