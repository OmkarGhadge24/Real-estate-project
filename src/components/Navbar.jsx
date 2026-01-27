import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
    const navbarElements = ['Home', 'About', 'Services', 'Property', 'Contact'];
    return (
        <div className="px-4 py-2 flex items-center justify-between">
           <div>
             {navbarElements.map((element, index) => (
                element === 'Home' ? (
                    <Link key={index} to="/" className="mx-4 text-lg font-medium text-gray-700 hover:text-[#4d52e2] transition-colors duration-300">
                        {element}   
                    </Link>
                ) : (
                    <Link key={index} to={`/${element.toLowerCase()}`} className="mx-4 text-lg font-medium text-gray-700 hover:text-[#4d52e2] transition-colors duration-300">
                        {element}
                    </Link>
                )
            ))}
           </div>
            <div className="logo flex items-center gap-1">
                <img className="h-14" src="./Logo-name.png" alt="" />
                {/* <h3 className="text-xl font-semibold">Skyline Properties</h3> */}
            </div>
            <button className="bg-[#2C308F] text-[#F9F9F9] px-3 py-2 cursor-pointer border border-dashed">
                <BsTelephone className="mr-2 inline mb-1" /> 
                +022 1111 222 333
            </button>
        </div>
    )
}

export default Navbar