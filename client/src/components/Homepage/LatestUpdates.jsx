import { HiOutlineCalendar, HiOutlineArrowRight } from "react-icons/hi";
import { BsInstagram } from "react-icons/bs";

const posts = [
  {
    image: "/images/updates/update1.png",
    title: "Science Exhibition 2026",
    date: "12 July 2026",
    desc: "Students showcased innovative scientific models and research projects.",
  },
  {
    image: "/images/updates/update2.png",
    title: "Sports Championship",
    date: "9 July 2026",
    desc: "Our students secured multiple medals across various sporting events.",
  },
  {
    image: "/images/updates/update3.png",
    title: "Annual Cultural Fest",
    date: "5 July 2026",
    desc: "Music, dance and drama performances celebrating creativity.",
  },
  {
    image: "/images/updates/update4.png",
    title: "Tree Plantation Drive",
    date: "1 July 2026",
    desc: "Students planted hundreds of saplings promoting sustainability.",
  },
  {
    image: "/images/updates/update5.png",
    title: "Investiture Ceremony",
    date: "28 June 2026",
    desc: "The newly elected student council took the oath of leadership.",
  },
  {
    image: "/images/updates/update6.png",
    title: "Robotics Workshop",
    date: "22 June 2026",
    desc: "Students explored AI, robotics and automation through hands-on learning.",
  },
];

export default function LatestUpdates() {
  const scrollingPosts = [...posts, ...posts];

  return (
    <section className="py-15 bg-[#F8FAF8] overflow-hidden">

      <div className="max-w-375 mx-auto px-6 lg:px-10">

        <div className="text-center mb-14">

          <h2 className="mt-5 text-4xl font-bold md:text-5xl text-[#0B7A4A]">
            Latest Updates
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Stay informed with our latest achievements, celebrations,
            events and memorable moments.
          </p>

        </div>

      </div>

      {/* Marquee */}

      <div className="overflow-hidden pb-10">

        <div className="marquee-track flex gap-8 w-max hover:[animation-play-state:paused]">

          {scrollingPosts.map((post, index) => (

            <article
              key={index}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden w-[360px] shrink-0 border border-gray-100"
            >

              <div className="overflow-hidden">

                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-60 object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-6">

                <div className="flex items-center gap-2 text-[#0B7A4A] text-sm font-medium">

                  <HiOutlineCalendar />

                  {post.date}

                </div>

                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {post.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {post.desc}
                </p>

                <button className="mt-6 flex items-center gap-2 font-semibold cursor-pointer text-[#0B7A4A] group-hover:gap-3 transition-all">

                  <BsInstagram className="text-pink-600"/>
                  Visit

                  <HiOutlineArrowRight />

                </button>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}