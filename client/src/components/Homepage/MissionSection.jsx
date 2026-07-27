import {
    HiOutlineLightBulb,
    HiOutlineAcademicCap,
    HiOutlineGlobeAlt,
    HiOutlineTruck,
} from "react-icons/hi";


const cards = [
    {
        icon: HiOutlineAcademicCap,
        title: "Mission, Vision & Core Values"
    },
    {
        icon: HiOutlineGlobeAlt,
        title: "Environment & Community Outreach"
    },
    {
        icon: HiOutlineLightBulb,
        title: "After School Activities"
    },
    {
        icon: HiOutlineTruck,
        title: "Bus Routes"
    },
];

export default function MissionSection() {
    return (
        <div
            className="relative bg-[url('/images/mission_bg.webp')] bg-no-repeat bg-contain bg-center min-h-175 -mt-17"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full">
                <div className="grid lg:grid-cols-2 min-h-175">

                    {/* Left side intentionally empty because students are already in bg */}

                    <div></div>

                    {/* Right */}

                    <div className="flex justify-center items-center h-full">
                        <div className="grid grid-cols-2 gap-2">
                            {cards.map((card, index) => {
                                const Icon = card.icon;

                                return (
                                    <div
                                        key={index}
                                        className={`
                                            group
                                            w-50
                                            min-h-52.5
                                            rounded-2xl
                                            p-5
                                            border
                                            transition-all duration-300
                                            hover:bg-white/12
                                            hover:backdrop-blur-md
                                            border-white/20
                                            ${card.title==="Mission, Vision & Core Values" && "bg-white/12 backdrop-blur-md"}
                                        `}
                                    >
                                        <Icon className="text-white text-3xl mb-4" />

                                        <h3 className="text-xl font-semibold text-white leading-snug">
                                            {card.title}
                                        </h3>

                                        <button
                                            className={`
                                                mt-4
                                                -mb-6
                                                px-5
                                                py-2
                                                rounded-full
                                                bg-white
                                                text-[#0B7A4A]
                                                text-sm
                                                font-semibold
                                                opacity-0
                                                transition-opacity
                                                duration-300
                                                cursor-pointer
                                                group-hover:opacity-100
                                                ${card.title==="Mission, Vision & Core Values" && "opacity-100"}
                                            `}
                                        >
                                            Read More →
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}