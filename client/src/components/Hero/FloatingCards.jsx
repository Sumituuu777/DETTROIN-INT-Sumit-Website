import { HiArrowRight } from "react-icons/hi2";
import {
  HiAcademicCap,
  HiUsers,
  HiStar,
} from "react-icons/hi2";

export default function FloatingCards() {
  return (
    <>
      {/* Admissions Card */}

      <div
        className="absolute top-8 -left-8 z-20 hidden md:block
        rounded-3xl bg-white/90 backdrop-blur-xl
        p-6 shadow-2xl border border-white/60
        w-72"
      >
        <span className="text-sm font-semibold text-[#0B7A4A]">
          Admissions Open
        </span>

        <h3 className="mt-2 text-2xl font-bold text-gray-900">
          2026–27
        </h3>

        <p className="mt-2 text-gray-500 text-sm leading-6">
          Join one of Pune's leading CBSE schools and shape
          your child's future with confidence.
        </p>

        <button
          className="group mt-5 flex items-center gap-2
          text-[#0B7A4A] font-semibold"
        >
          Apply Now

          <HiArrowRight
            className="transition-transform
            duration-300
            group-hover:translate-x-1"
          />
        </button>
      </div>

      {/* Students Card */}

      <div
        className="absolute bottom-8 -left-10 z-20
        rounded-3xl bg-white
        p-5 shadow-xl
        hidden lg:block"
      >
        <div className="flex items-center gap-4">

          <div
            className="flex h-14 w-14 items-center justify-center
            rounded-2xl bg-green-100"
          >
            <HiUsers
              className="text-[#0B7A4A]"
              size={28}
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              3000+
            </h2>

            <p className="text-gray-500">
              Students
            </p>
          </div>

        </div>
      </div>

      {/* Excellence Card */}

      <div
        className="absolute top-28 -right-8 z-20
        rounded-3xl bg-white
        p-5 shadow-xl
        hidden lg:block"
      >
        <div className="flex items-center gap-4">

          <div
            className="flex h-14 w-14 items-center justify-center
            rounded-2xl bg-yellow-100"
          >
            <HiStar
              className="text-[#F5B51B]"
              size={28}
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Ranked Among
            </h2>

            <p className="text-gray-500">
              Top Schools
            </p>
          </div>

        </div>
      </div>

      {/* Curriculum Card */}

      <div
        className="absolute bottom-24 right-6 z-20
        rounded-3xl bg-[#0B7A4A]
        text-white
        p-5 shadow-2xl
        hidden md:block"
      >
        <div className="flex items-center gap-4">

          <div
            className="flex h-14 w-14 items-center justify-center
            rounded-2xl bg-white/20"
          >
            <HiAcademicCap size={30} />
          </div>

          <div>
            <h2 className="font-bold text-xl">
              Nursery – XII
            </h2>

            <p className="text-green-100">
              CBSE Curriculum
            </p>
          </div>

        </div>
      </div>
    </>
  );
}