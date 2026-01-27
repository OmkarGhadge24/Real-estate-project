import { GoArrowUpRight } from "react-icons/go";

const FamilyImg = () => {
  return (
    <div className="relative w-full px-8 flex flex-col gap-3">

      <div className="w-full h-44 overflow-hidden">
        <img className="w-full h-full object-cover rounded-2xl" src="./building.jpg" alt="building" />
      </div>

      <div className="relative w-full flex gap-3 justify-center">
        <div className="w-44 h-56 overflow-hidden">
          <img className="w-full h-full object-cover rounded-2xl" src="./Family 1.jpg" alt="family1" />
        </div>
        <div className="w-64 h-72 overflow-hidden">
          <img className="w-full h-full object-cover rounded-2xl" src="./Family 2.jpg" alt="family2" />
        </div>

        <div className="absolute -top-12 left-42 flex items-center justify-center pointer-events-none">
          <div className="w-20 h-20 bg-[#2C308F] rounded-full flex items-center justify-center text-white shadow-lg">
            <GoArrowUpRight size={30} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FamilyImg