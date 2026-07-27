import { HiArrowRight, HiPlay } from "react-icons/hi2";
import sponsor1 from "../../../assets/grey_kalyani_logo.webp"
import sponsor2 from "../../../assets/grey_shri_logo.webp"
import campusVideo from "../../../assets/campusVideo.mp4";
import { useState } from "react";
// Optional poster image
// import poster from "../../assets/images/welcome-thumbnail.jpg";

export default function WelcomeSection() {
  const [shouldAutoPlay, setShouldAutoPlay] = useState(true);
  return (
    <section className="relative py-15 bg-white overflow-hidden">

      {/* Background Decoration */}

      <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-green-100/40 blur-3xl" />

      <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-lime-100/40 blur-3xl" />

      <div className="relative max-w-350 mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">

            Welcome to
            <span className="text-[#0B7A4A]">
              {" "}
              The Kalyani School
            </span>

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600">

            A place where young minds are inspired to learn,
            discover, and grow through academic excellence,
            innovation, and values.

          </p>

        </div>

        {/* Main Content */}

        <div className="grid lg:grid-cols-2 gap-16 ">

          {/* ================= VIDEO ================= */}

          <div className="relative group mt-30">

            <div className="overflow-hidden rounded-4xl shadow-2xl">

              <video
                src={campusVideo}
                controls
                playsInline
                autoPlay={shouldAutoPlay}
                onPlay={() => setShouldAutoPlay(false)}
                muted
                className="w-full object-cover"

                // poster={poster}
              />

            </div>

            {/* Campus Tour Badge */}

            <div className="absolute left-6 top-6 rounded-full bg-white/90 backdrop-blur-md px-4 py-2 shadow-lg">

              <span className="font-semibold text-[#0B7A4A]">

                Campus Tour

              </span>

            </div>

          </div>

          {/* ================= RIGHT ================= */}

          <div>

            <span className="text-[#A8D53B] font-bold uppercase tracking-[3px]">

              Discover Excellence

            </span>

            <h3 className="mt-4 text-4xl font-bold leading-tight text-gray-900">

              A School Every Child,

              <br />

              Parent & Teacher Loves.

            </h3>

            <p className="mt-8 text-lg leading-8 text-gray-600">

              At The Kalyani School, happiness is at the heart of learning. Experience an environment where every child feels valued, every parent feels heard, and every teacher feels inspired.

            </p>

            {/* Explore Button */}

            <button
              className="
                group
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#0B7A4A]
                px-8
                py-4
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#09653D]
              "
            >

              Explore Our Campus

              <HiArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </button>

            {/* Partner Card Starts Here */}

            <div
              className="
                mt-12
                rounded-3xl
                border
                border-green-100
                bg-white
                p-2
                shadow-xl
              "
            >
              <h4 className="text-xl font-bold text-gray-900">
                Promoted By
              </h4>

              <div className="mt-6 flex items-center gap-6">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F7F5] shadow-sm">
                  <img src={sponsor1} alt="Kg"/>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900">
                    Kalyani Group
                  </h5>

                  <p className="mt-1 text-sm text-gray-500">
                    Promoters of The Kalyani School
                  </p>
                </div>

              </div>

              <div className="my-3 h-px bg-gray-200" />

              <h4 className="text-xl font-bold text-gray-900">
                Academic Collaboration
              </h4>

              <div className="mt-2">

                <div className="flex flex-1 min-w-45 h-20 items-center gap-4 rounded-2xl bg-[#F9FBFA] p-4">
                    <img src={sponsor2} alt="sponsor" className="h-17 min-w-45"/>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}         