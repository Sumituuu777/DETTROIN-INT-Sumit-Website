import {
  HiOutlineLightBulb,
  HiOutlineAcademicCap,
  HiOutlineGlobeAlt,
  HiOutlineTruck,
} from "react-icons/hi";

const cards = [
  {
    icon: HiOutlineAcademicCap,
    title: "Mission, Vision & Core Values",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Environment & Community Outreach",
  },
  {
    icon: HiOutlineLightBulb,
    title: "After School Activities",
  },
  {
    icon: HiOutlineTruck,
    title: "Bus Routes",
  },
];

export default function MissionSection() {
  return (
    <section
  className="
    relative
    bg-[#f3f5f9]
    lg:bg-[url('/images/mission_bg.webp')]
    lg:bg-no-repeat
    lg:bg-contain
    lg:bg-center
  "
>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 min-h-[700px]">

          {/* Empty column only on desktop */}
          <div className="hidden lg:block mt-11"></div>

          {/* Cards */}
          <div className="flex justify-center items-center py-16 lg:py-0 mt-11">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {cards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <div
                    key={index}
                    className="
                      group
                      w-full
                      max-w-[220px]
                      min-h-[210px]
                      rounded-2xl
                      p-6
                      border
                      border-white/20
                      bg-white/5
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      hover:bg-white/10
                      hover:-translate-y-2
                      hover:shadow-2xl
                    "
                  >
                    <Icon className="text-white text-4xl mb-5" />

                    <h3 className="text-xl font-semibold text-white leading-snug">
                      {card.title}
                    </h3>

                    <button
                      className="
                        mt-6
                        px-5
                        py-2
                        rounded-full
                        bg-white
                        text-[#0B7A4A]
                        text-sm
                        font-semibold
                        duration-300
                        cursor-pointer
                        opacity-100
                      "
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
    </section>
  );
}