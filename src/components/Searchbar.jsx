import { BiBuildings } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  return (
    <div className="bg-white text-[#7e7e7e] w-100 rounded-full px-4 py-2 shadow-lg flex gap-1 justify-between items-center">
        <BiBuildings className="text-2xl" />
      <input type="text" placeholder="Find your property..." className="w-full outline-none" />
        <button className="bg-[#2C308F] text-white rounded-full p-2 -mr-2">
            <FiSearch />
        </button>
    </div>
  )
}

export default Searchbar