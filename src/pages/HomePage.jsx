import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import TypeCard from "../components/TypeCard"

const HomePage = () => {
    const propertyTypes = [
        {
            image: "./duplex.jpg",
            title: "Duplex & Triplex",
        },
        {
            image: "./apartment.jpg",
            title: "Apartment & Units",
        },
        {
            image: "./multistory.jpg",
            title: "Multistory Buildings",
        },
        {
            image: "./modern.jpg",
            title: "Modern Architecture",
        },
    ];

    return (
        <div className="px-6 flex flex-col gap-2">
            <Navbar />
            <HeroSection />
            <div className="flex items-center justify-between py-4">
                {propertyTypes.map((item, index) => (
                    <TypeCard
                        key={index}
                        image={item.image}
                        title={item.title}
                    />
                ))}

            </div>
        </div>
    )
}

export default HomePage