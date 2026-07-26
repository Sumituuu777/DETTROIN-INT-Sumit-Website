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
    color: "bg-green-100",
    iconColor: "text-[#0B7A4A]",
  },
  {
    icon: HiUsers,
    title: "Holistic Growth",
    subtitle: "Sports • Arts • Leadership",
    color: "bg-yellow-100",
    iconColor: "text-[#F5B51B]",
  },
  {
    icon: HiSparkles,
    title: "Future Ready",
    subtitle: "Innovation & Technology",
    color: "bg-lime-100",
    iconColor: "text-lime-700",
  },
  {
    icon: HiGlobeAsiaAustralia,
    title: "Global Perspective",
    subtitle: "Values Beyond Classroom",
    color: "bg-emerald-100",
    iconColor: "text-emerald-700",
  },
];

export default function HeroStats() {
  return (
    <section className="relative -mt-10 z-30 pb-20">

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        {stats.map((item) => (
          <div
            key={item.title}
            className="
            group
            rounded-3xl
            bg-white/90
            backdrop-blur-xl
            border border-green-100
            shadow-xl
            p-7
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-2xl
            "
          >

            <div
              className={`
              ${item.color}
              w-16
              h-16
              rounded-2xl
              flex
              items-center
              justify-center
              `}
            >
              <item.icon
                className={item.iconColor}
                size={32}
              />
            </div>

            <h3 className="mt-6 text-xl font-bold text-gray-900">
              {item.title}
            </h3>

            <p className="mt-2 text-gray-500 leading-7">
              {item.subtitle}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}