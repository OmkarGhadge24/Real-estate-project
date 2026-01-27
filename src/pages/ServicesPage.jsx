import Navbar from "../components/Navbar"
import { TbHomeDollar } from "react-icons/tb";
import { TbHomeShield } from "react-icons/tb";
import { TbClockCog } from "react-icons/tb";
import { PiHandCoins } from "react-icons/pi";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import FeatureCard from "../components/FeatureCard";


const ServicesPage = () => {
    const navigate = useNavigate();
    const featuresData = [
        {
            title: "Affordable Property Taxes",
            text: "We help you find a new home by offering a smart real estate experience",
            icon: <TbHomeDollar />,
        },
        {
            title: "Guaranteed Quality Homes",
            text: "We help you find a new home by offering a smart real estate experience",
            icon: <PiHandCoins />,
        },
        {
            title: "Fast and Easy Process",
            text: "We help you find a new home by offering a smart real estate experience",
            icon: <TbClockCog />,
        },
        {
            title: "Property Insurance",
            text: "We help you find a new home by offering a smart real estate experience",
            icon: <TbHomeShield />,
        },
    ];

    return (
        <div className="px-6 flex flex-col gap-2">
            <Navbar />
            <div className="dets flex flex-col items-center mt-12 gap-4">
                <h1 className="text-5xl font-medium ">Our Services</h1>
                <p className="text-md font-normal text-center">Enhance your property listings and videos with accurate<br/>
                    and engaging subtitles.
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 px-32 py-12">
                {featuresData.map((item, index) => (
                    index === 0 ? (
                        <FeatureCard
                            key={index}
                            bg='#2C308F'
                            color='#F9F9F9'
                            iconColor='#F9F9F9'
                            title={item.title}
                            text={item.text}
                            icon={item.icon}
                        />
                    ) : (
                        <FeatureCard
                            key={index}
                            title={item.title}
                            text={item.text}
                            icon={item.icon}
                        />
                    )
                ))}
            </div>
            <div className="flex mr-4 justify-end">
                <button className="bg-[#2C308F] text-[#F9F9F9] px-6 py-2 cursor-pointer rounded-sm text-lg" onClick={() => navigate('/property')}>
                    Explore
                <HiOutlineArrowLongRight className="ml-3 inline" />
                </button>
            </div>
        </div>
    )
}

export default ServicesPage