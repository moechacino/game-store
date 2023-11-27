import CreateData from "./CreateData";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
const ManageData = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const { fetchStatus, setFetchStatus, data, setData } = state;
  const { fetchData, handleDelete, handleEdit } = handleFunction;
  useEffect(() => {
    fetchData();
  }, [fetchStatus, setFetchStatus]);
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-4/5 mx-auto my-10">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-purple-500">
            <tr>
              <th scope="col" className="px-6 py-3">
                no
              </th>
              <th scope="col" className="px-6 py-3">
                Nama
              </th>
              <th scope="col" className="px-6 py-3">
                kategori
              </th>
              <th scope="col" className="px-6 py-3">
                description
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                price
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                rating
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                release year
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                size
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                is_android_app
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                is_ios_app
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                action
              </th>
            </tr>
          </thead>
          <tbody>
            {data !== null &&
              data.map((res, index) => {
                return (
                  <tr
                    key={res.id}
                    className="bg-white border-b  hover:bg-gray-50"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{res.name}</td>
                    <td className="px-6 py-4">{res.category}</td>
                    <td className="px-6 py-4">{res.description}</td>
                    <td className="px-6 py-4">{res.price}</td>
                    <td className="px-6 py-4">{res.rating}</td>
                    <td className="px-6 py-4">{res.release_year}</td>
                    <td className="px-6 py-4">{res.size}</td>
                    <td className="px-6 py-4">{res.is_android_app}</td>
                    <td className="px-6 py-4">{res.is_ios_app}</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={handleEdit}
                        value={res.id}
                        type="button"
                        className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
                      >
                        Edit
                      </button>
                      <button
                        onClick={handleDelete}
                        value={res.id}
                        type="button"
                        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <CreateData />
    </div>
  );
};

export default ManageData;
