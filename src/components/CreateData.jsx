import { useContext } from "react";

import { GlobalContext } from "../context/GlobalContext";
const CreateData = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const { form } = state;

  const { handleForm, handleSubmit } = handleFunction;
  return (
    <div className="relative overflow-x-auto w-4/5 mx-auto my-10">
      <div className="mb-10 my-20 font-bold text-xl">
        <h1>Create Data</h1>
      </div>
      <form className="text-md" onSubmit={handleSubmit}>
        <div className="my-5">
          <p>Gambar Data Game</p> <hr></hr>
        </div>
        <div className="mb-2">
          <label className="block font-bold" htmlFor="image_url">
            Image URL
          </label>
          <input
            onChange={handleForm}
            value={form.image_url}
            type="text"
            name="image_url"
            className="border p-2 w-full sm:rounded-lg text-gray-500 bg-gray-50"
            required
          />
        </div>
        <div className="my-5">
          <p>Data Game</p> <hr></hr>
        </div>
        <div>
          <label className="block font-bold" htmlFor="name">
            Name
          </label>
          <input
            onChange={handleForm}
            value={form.name}
            type="text"
            name="name"
            className="border p-2 w-full sm:rounded-lg text-gray-500 bg-gray-50"
            required
          />
        </div>
        <div>
          <label className="block font-bold" htmlFor="category">
            Category
          </label>
          <input
            onChange={handleForm}
            value={form.category}
            type="text"
            name="category"
            className="border p-2 w-full sm:rounded-lg text-gray-500 bg-gray-50"
            required
          />
        </div>
        <div>
          <label className="block font-bold" htmlFor="description">
            Description
          </label>
          <textarea
            onChange={handleForm}
            value={form.description}
            type="text"
            name="description"
            className="border p-2 w-full sm:rounded-lg text-gray-500 bg-gray-50"
            required
          ></textarea>
        </div>
        <div>
          <label className="block font-bold" htmlFor="price">
            Price
          </label>
          <input
            onChange={handleForm}
            value={form.price}
            type="number"
            name="price"
            className="remove-arrow border p-2 w-full sm:rounded-lg text-gray-500 bg-gray-50"
            required
          />
        </div>
        <div>
          <label className="block font-bold" htmlFor="rating">
            Rating
          </label>
          <input
            onChange={handleForm}
            value={form.rating}
            type="number"
            name="rating"
            className="remove-arrow border p-2 w-full sm:rounded-lg text-gray-500 bg-gray-50"
            required
          />
        </div>
        <div>
          <label className="block font-bold" htmlFor="release_year">
            Release Year
          </label>
          <input
            onChange={handleForm}
            value={form.release_year}
            type="number"
            name="release_year"
            className="remove-arrow border p-2 w-full sm:rounded-lg text-gray-500 bg-gray-50"
            required
          />
        </div>
        <div>
          <label className="block font-bold" htmlFor="size">
            Size
          </label>
          <input
            onChange={handleForm}
            value={form.size}
            type="number"
            name="size"
            className="remove-arrow border p-2 w-full sm:rounded-lg text-gray-500 bg-gray-50"
            required
          />
        </div>
        <div className="my-5">
          <p>Jenis Perangkat</p> <hr></hr>
        </div>
        <div>
          <label className="block font-bold">Android ?</label>
          <div>
            <input
              type="radio"
              name="is_android_app"
              value="1"
              checked={form.is_android_app === 1}
              onChange={handleForm}
              className="border p-2 sm:rounded-lg text-gray-500 bg-gray-50"
            />
            <label htmlFor="is_android_app">Ya</label>

            <input
              type="radio"
              name="is_android_app"
              value="0"
              checked={form.is_android_app === 0}
              onChange={handleForm}
              className="border p-2 sm:rounded-lg text-gray-500 bg-gray-50"
            />
            <label htmlFor="is_android_app">Tidak</label>
          </div>
        </div>
        <div>
          <label className="block font-bold">iOS ?</label>
          <div>
            <input
              type="radio"
              name="is_ios_app"
              value="1"
              checked={form.is_ios_app === 1}
              onChange={handleForm}
              className="border p-2 sm:rounded-lg text-gray-500 bg-gray-50"
            />
            <label htmlFor="is_ios_app">Ya</label>

            <input
              type="radio"
              name="is_ios_app"
              value="0"
              checked={form.is_ios_app === 0}
              onChange={handleForm}
              className="border p-2 sm:rounded-lg text-gray-500 bg-gray-50"
            />
            <label htmlFor="is_ios_app">Tidak</label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-700 shadow-md sm:rounded-lg text-white p-2 mt-5 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateData;
