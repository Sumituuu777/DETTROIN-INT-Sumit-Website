import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import FloatingCards from "./FloatingCards";

import campus from "../../assets/campus.webp";

import { HiArrowDown } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFBF8] pt-5 lg:pt-7">

      {/* Background Gradient */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#EAF7EE,transparent_45%)]" />

      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 items-center gap-16 min-h-[88vh]">

          {/* ================= LEFT ================= */}

          <div className="relative z-10">

            <span className="inline-flex items-center rounded-full bg-green-100 text-[#0B7A4A] px-4 py-2 text-sm font-semibold tracking-wide">
              CBSE Senior Secondary School • Pune
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">

              <span className="text-[#0B7A4A]">
                Nurturing Today.
              </span>

              <br />

              <span className="text-gray-900">
                Empowering Tomorrow.
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">

              At The Kalyani School, we provide a harmonious
              stimulating environment which inspires all to 
              strive for excellence and emerge as responsible
              future ready citizens

            </p>

            <div className="mt-10">
              <HeroButtons />
            </div>

            {/* Trust Points */}

            <div className="mt-10 flex flex-wrap gap-6">

              {[
                "Holistic Learning",
                "Future Ready",
                "Strong Values",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-2"
                >

                  <div className="h-2.5 w-2.5 rounded-full bg-[#A8D53B]" />

                  <span className="text-gray-700 font-medium">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* ================= RIGHT ================= */}

          <div className="relative">

            {/* Decorative Circle */}

            <div className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-green-100 blur-3xl opacity-50" />

            {/* Main Image */}

            <img
              src={campus}
              alt="The Kalyani School"
              className="relative z-10 rounded-[36px] shadow-2xl object-cover w-full h-[650px]"
            />

            {/* Floating Cards */}

            <FloatingCards />

          </div>

        </div>

        {/* Bottom Stats */}

        <HeroStats />

      </div>

      {/* Scroll Indicator */}

      <div className="hidden lg:flex justify-center mt-10 pb-8">

        <button className="group flex flex-col items-center text-gray-500">

          <span className="text-sm font-medium">

            Scroll to Explore

          </span>

          <HiArrowDown
            className="mt-2 text-2xl animate-bounce group-hover:text-[#0B7A4A]"
          />

        </button>

      </div>

    </section>
  );
}