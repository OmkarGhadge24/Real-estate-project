import FamilyImg from "../components/FamilyImg";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

const AboutPage = () => {
    const statsData = [
        {
            number: "30+",
            title: "Satisfied Customer",
        },
        {
            number: "5k+",
            title: "Award winning",
        },
        {
            number: "07+",
            title: "Years of Experience",
        },
        {
            number: "33+",
            title: "Projects Delivered",
        },
    ];

    return <div className="px-6 flex flex-col gap-2">
        <Navbar />
        <div className="flex gap-2 mt-4 h-170">
            <div className="leftside w-1/2 pl-20 p-10 flex flex-col gap-10">
                <h2 className="text-5xl font-semibold tracking-wider leading-[1.2]">Your Trusted Real<br />
                    Estate Advisors
                </h2>
                <div className="flex gap-4 flex-wrap">
                    {statsData.map((item, index) => (
                        index === 1 ? (
                            <StatCard
                                key={index}
                                color='#2C308F'
                                text='#F9F9F9'
                                number={item.number}
                                title={item.title}
                            />
                        ) : (
                            <StatCard
                                key={index}
                                number={item.number}
                                title={item.title}
                            />
                        )
                    ))}
                </div>

            </div>
            <div className="rightside w-1/2 p-8 flex flex-col gap-14 mt-10">
                <h6 className="text-sm text-gray-700 leading-[1.4]">Find Your Property I've put together more than 50<br/> examples of automated real estate text message scripts to<br/> use in your first text messaging campaign.
                </h6>
                <div className="w-[80%]">
                    <FamilyImg />
                </div>
            </div>
        </div>
    </div>;
};

export default AboutPage;
