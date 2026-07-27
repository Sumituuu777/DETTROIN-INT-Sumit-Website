import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

import campus from "../../../assets/campus.webp";

import { HiArrowDown } from "react-icons/hi";

export default function Hero() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden h-[80vh]">

        {/* Background Image */}
        <img
          src={campus}
          alt="The Kalyani School"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.95)_38%,rgba(255,255,255,0.75)_48%,rgba(255,255,255,0.35)_58%,rgba(255,255,255,0)_70%)]" />

        {/* Hero Content */}
        <div className="relative z-10 flex items-start h-full pt-28 sm:pt-32 lg:pt-20">

          <div className="max-w-375 mx-auto w-full px-2 lg:px-10">

            <div className="max-w-2xl">

              <h1 className="mt-3 text-3xl md:text-6xl xl:text-6xl font-semibold leading-tight">

                <span className="text-[#0B7A4A]">
                  Nurturing Today.
                </span>

                <br />

                <span className="text-gray-900">
                  Empowering Tomorrow.
                </span>

              </h1>

              <p className="mt-4 max-w-xl text-md leading-8 text-gray-800">

                At The Kalyani School, we provide a harmonious
                stimulating environment which inspires all to
                strive for excellence and emerge as responsible
                future-ready citizens.

              </p>

              <div className="mt-6 lg:mt-5">
                <HeroButtons />
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}
      <HeroStats />
    </>
  );
}