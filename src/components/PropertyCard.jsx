import { FaMapMarkerAlt } from "react-icons/fa";

const PropertyCard = ({ data }) => {
    return (
        <div className="relative rounded-2xl overflow-hidden shadow-lg transition cursor-pointer h-80">
            {/* Background Image */}
            <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover"
            />

            {/* Glass Morphism Overlay - Bottom */}
            <div className="absolute w-[80%] bottom-2 left-12 right-0 bg-white/70 backdrop-blur-md rounded-3xl p-5 border-t border-white/30">
                
                {/* Title */}
                <h3 className="text-sm font-bold text-gray-900 mb-1">
                    {data.title}
                </h3>

                {/* Location */}
                <p className="flex items-center text-xs text-gray-600 mb-3">
                    <FaMapMarkerAlt className="text-gray-500 mr-1.5" size={12} />
                    {data.location}
                </p>

                {/* Price */}
                <p className="text-sm font-bold text-pink-500 mb-3">
                    {data.price}
                </p>

                {/* Features Row - Icons with boxes */}
                <div className="flex gap-2">
                    {data.features.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="flex items-center gap-1.5 bg-gray-200/60 px-2.5 py-1.5 rounded-lg">
                                <Icon className="text-blue-600" size={14} />
                                <span className="text-xs text-gray-700">{item.value}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
