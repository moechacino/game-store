import React from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useContext, useEffect } from "react";

const Home = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const { data, fetchStatus, setFetchStatus } = state;
  const { fetchData } = handleFunction;
  const formatCurrency = (amount) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });

    return formatter.format(amount);
  };
  const priceHandler = (value) => {
    return value === 0 ? "FREE" : `${formatCurrency(value)},-`;
  };

  const sizeHandler = (value) => {
    return value >= 1000 ? `${value / 1000} GB` : `${value} MB`;
  };
  useEffect(() => {
    fetchData();
  }, [fetchStatus, setFetchStatus]);
  return (
    <div>
      {/* Awal Content Section */}
      <section className="bg-gray-200 p-5">
        <div className="container mx-auto mt-10">
          <h1 className="text-xl font-bold">Find your data that you need!</h1>
        </div>
        <div className="container mx-auto flex-wrap flex gap-10 items-center justify-start">
          {/* Awal Card section */}
          {data !== null &&
            data.map((res, index) => (
              <div
                key={res.id}
                className="mt-10 h-72 flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={res.image_url}
                  className="w-1/3 bg-cover bg-center bg-landscape"
                  alt={res.name}
                />
                <div className="w-2/3 p-4">
                  <h1 className="text-gray-900 font-bold text-2xl">
                    {res.name}
                  </h1>
                  <small>2019</small>
                  <p className="mt-2 text-gray-600 text-sm">
                    {res.description}
                  </p>
                  <div className="item-center mt-2 text-gray-500">
                    <span>{res.category}, </span>
                    <span>{sizeHandler(res.size)}</span>
                    <span>, </span>
                  </div>
                  <div className="flex item-center justify-between mt-3">
                    <h1 className="text-gray-700 font-bold text-xl">
                      {priceHandler(res.price)}
                    </h1>
                    <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                      {res.rating}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {/* Akhir Card section */}
        </div>
      </section>
      {/* Akhir Content Section */}
    </div>
  );
};

export default Home;
