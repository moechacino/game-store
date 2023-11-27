import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between relative overflow-x-auto w-4/5 mx-auto my-10">
        <h1 className="font-bold text-lg">Game Store</h1>
        <div className="flex space-x-4">
          <Link to="/">
            <button
              type="button"
              className="bg-transparent text-black font-bold border-0  p-1"
            >
              Home
            </button>
          </Link>

          <Link to="/manage-data">
            <button
              type="button"
              className="bg-transparent text-black font-bold border-0  p-1"
            >
              Manage Data
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Navbar;
