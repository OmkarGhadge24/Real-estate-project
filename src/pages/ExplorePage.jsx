import Navbar from '../components/Navbar'
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import PropertyCard from '../components/PropertyCard';

const ExplorePage = () => {

    const propertyData = [
        {
            id: 1,
            title: "Skyline Heights",
            location: "Andheri West, Mumbai",
            price: "₹ 2.45 Cr",
            image: "/B-2.jpg",
            tag: "Featured",
            tagColor: "bg-blue-600",
            beds: 3,
            baths: 3,
            area: 1450,
            features: [
                { icon: FaBed, value: "3 Beds" },
                { icon: FaBath, value: "3 Baths" },
                { icon: FaRulerCombined, value: "1450 sq.ft" },
            ],
        },
        {
            id: 2,
            title: "Sea Breeze Residency",
            location: "Bandra West, Mumbai",
            price: "₹ 4.80 Cr",
            image: "/B-4.jpg",
            tag: "Luxury",
            tagColor: "bg-indigo-600",
            beds: 4,
            baths: 4,
            area: 2100,
            features: [
                { icon: FaBed, value: "4 Beds" },
                { icon: FaBath, value: "4 Baths" },
                { icon: FaRulerCombined, value: "2100 sq.ft" },
            ],
        },
        {
            id: 3,
            title: "Lake View Apartments",
            location: "Powai, Mumbai",
            price: "₹ 1.95 Cr",
            image: "/B-6.jpg",
            tag: "New",
            tagColor: "bg-green-600",
            beds: 2,
            baths: 2,
            area: 980,
            features: [
                { icon: FaBed, value: "2 Beds" },
                { icon: FaBath, value: "2 Baths" },
                { icon: FaRulerCombined, value: "980 sq.ft" },
            ],
        },
        {
            id: 4,
            title: "Palm Grove Residency",
            location: "Goregaon East, Mumbai",
            price: "₹ 1.65 Cr",
            image: "/B-1.jpg",
            tag: "Best Value",
            tagColor: "bg-yellow-500",
            beds: 2,
            baths: 2,
            area: 1050,
            features: [
                { icon: FaBed, value: "2 Beds" },
                { icon: FaBath, value: "2 Baths" },
                { icon: FaRulerCombined, value: "1050 sq.ft" },
            ],
        },
        {
            id: 5,
            title: "Harbor View Towers",
            location: "Navi Mumbai, Seawoods",
            price: "₹ 1.25 Cr",
            image: "/B-5.jpg",
            tag: "Trending",
            tagColor: "bg-purple-600",
            beds: 2,
            baths: 2,
            area: 1150,
            features: [
                { icon: FaBed, value: "2 Beds" },
                { icon: FaBath, value: "2 Baths" },
                { icon: FaRulerCombined, value: "1150 sq.ft" },
            ],
        },
        {
            id: 6,
            title: "Urban Nest",
            location: "Thane West, Mumbai",
            price: "₹ 98 Lakh",
            image: "/B-3.jpg",
            tag: "Affordable",
            tagColor: "bg-sky-600",
            beds: 1,
            baths: 1,
            area: 620,
            features: [
                { icon: FaBed, value: "1 Bed" },
                { icon: FaBath, value: "1 Bath" },
                { icon: FaRulerCombined, value: "620 sq.ft" },
            ],
        },
    ];


    return (
        <div className="px-6 flex flex-col gap-2">
            <Navbar />
            <div className="w-full px-10 py-6 text-center">
                <h3 className='text-5xl font-medium tracking-wider leading-[1.2]'>Discover Your Perfect<br /> Property Match</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
                {propertyData.map((item) => (
                    <PropertyCard key={item.id} data={item} />
                ))}
            </div>
        </div>
    )
}

export default ExplorePage