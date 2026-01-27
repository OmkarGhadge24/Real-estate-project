
const FeatureCard = ({ index, title, text, icon , bg = "#EAEAF4" , color ="#222222" , iconColor ="#2C308F" }) => {
    return (
        <div
            key={index}
            className="w-135 h-45 px-6 py-10 rounded-3xl flex gap-6 items-center"
            style={{ backgroundColor: bg , color : color }}
        >
            <div className={`text-6xl shrink-0`} style={{ color : iconColor }}>{icon}</div>
            <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p  className="text-sm" style={{ color : color }}>
                    {text}
                </p>
            </div>

        </div>
    )
}

export default FeatureCard