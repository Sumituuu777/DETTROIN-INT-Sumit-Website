import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">

      {/* Primary Button */}

      <button
        className="group flex items-center justify-center gap-2
        rounded-full bg-[#0B7A4A]
        px-8 py-4
        text-white
        font-semibold
        shadow-lg shadow-green-200/60
        transition-all duration-300
        hover:-translate-y-1
        hover:bg-[#09653D]
        hover:shadow-xl"
      >
        <Link to="/admissions">Apply for Admission</Link>

        <HiArrowRight
          className="transition-transform duration-300
          group-hover:translate-x-1"
          size={20}
        />
      </button>

      {/* Secondary Button */}

      <button
        className="group flex items-center justify-center gap-2
        rounded-full
        border border-gray-200
        bg-white/80
        backdrop-blur-md
        px-8 py-4
        font-semibold
        text-gray-700
        shadow-md
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#0B7A4A]
        hover:text-[#0B7A4A]
        hover:shadow-lg"
      >
        <Link to="/contact">Book a Campus Tour</Link>

        <HiArrowRight
          className="transition-transform duration-300
          group-hover:translate-x-1"
          size={20}
        />
      </button>

    </div>
  );
}