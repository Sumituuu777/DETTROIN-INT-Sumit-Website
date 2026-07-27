import {
  HiOutlineArrowRight,
  HiOutlineCalendar,
} from "react-icons/hi";

const activities = [
  {
    title: "Founder's Day Celebration 2026",
    image: "/images/activity1.webp",
    featured: true,
  },
  {
    title: "Sports Day 2025",
    image: "/images/activity2.webp",
  },
  {
    title: "Mad About Literature 2024",
    image: "/images/activity3.webp",
  },
  {
    title: "Graduation Day 2025",
    image: "/images/activity4.webp",
  },
  {
    title: "Sr. KG Graduation Day",
    image: "/images/activity5.webp",
  },
];

export default function Recents() {
  return (
    <section className="bg-[#F8FAF8] py-24">
      <div className="max-w-375 mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Life Beyond <span className="text-[#0B7A4A]">Classroom</span>
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Every event at our school nurtures confidence,
            creativity, leadership and lifelong friendships.
          </p>
        </div>

        {/* Grid */}

        <div className="grid lg:grid-cols-5 gap-6">

          {/* Featured */}

          <div className="lg:col-span-3">

            <div className="group relative overflow-hidden rounded-3xl h-[540px] cursor-pointer">

              <img
                src={activities[0].image}
                alt=""
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">

                <div className="flex items-center gap-2 text-green-300 mb-3">

                  <HiOutlineCalendar />

                  <span className="text-sm">
                    March 2026
                  </span>

                </div>

                <h3 className="text-3xl font-semibold text-white">
                  {activities[0].title}
                </h3>

                <button className="mt-6 bg-[#D4AF37] hover:bg-[#c89d22] transition px-6 py-3 rounded-full font-medium flex items-center gap-2">
                  Read More
                  <HiOutlineArrowRight />
                </button>

              </div>

            </div>

          </div>

          {/* Small cards */}

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">

            {activities.slice(1).map((item) => (

              <div
                key={item.title}
                className="group relative h-[255px] rounded-3xl overflow-hidden cursor-pointer"
              >

                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5">

                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <button className="mt-4 bg-white text-[#0B7A4A] rounded-full px-4 py-2 font-medium text-sm hover:bg-[#0B7A4A] hover:text-white transition">
                    Read More
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
