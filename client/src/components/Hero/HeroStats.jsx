import {
  HiAcademicCap,
  HiUsers,
  HiGlobeAsiaAustralia,
  HiSparkles,
} from "react-icons/hi2";

const stats = [
  {
    icon: HiAcademicCap,
    title: "Academic Excellence",
    subtitle: "CBSE Curriculum",
  },
  {
    icon: HiUsers,
    title: "Holistic Growth",
    subtitle: "Sports • Arts • Leadership",
  },
  {
    icon: HiSparkles,
    title: "Future Ready",
    subtitle: "Innovation & Technology",
  },
  {
    icon: HiGlobeAsiaAustralia,
    title: "Global Perspective",
    subtitle: "Values Beyond Classroom",
  },
];

export default function HeroStats() {
  return (
    <section className="relative -mt-12 z-30 pb-20">

      <div
        className="
          max-w-6xl
          mx-auto
          rounded-3xl
          bg-[#0B7A4A]
          shadow-2xl
          overflow-hidden
        "
      >

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => (
            <div
              key={item.title}
              className={`
                p-4 lg:p-5
                flex gap-5
                items-start
                ${
                  index !== stats.length - 1
                    ? "border-b sm:border-b-0 lg:border-r border-white/15"
                    : ""
                }
              `}
            >
              <div className="shrink-0">
                <item.icon
                  size={34}
                  className="text-[#F5B51B]"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-green-100">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}