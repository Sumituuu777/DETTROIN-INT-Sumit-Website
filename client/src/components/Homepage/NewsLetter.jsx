import { HiOutlineArrowRight } from "react-icons/hi";
import newsletterBoy from "../../assets/newsletter_boy.webp";

const NewsletterSection = () => {
  return (
    <section className="pt-20 bg-[#F8FAF8] pb-30">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#0B7A4A] via-[#16A34A] to-[#81c415] shadow-[0_30px_80px_rgba(124,58,237,0.15)]">

          {/* Background Blur */}
          <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-28 right-20 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl"></div>

          <div className="relative grid lg:grid-cols-2 items-center">

            {/* Left Content */}
            <div className="px-10 py-16 lg:px-16 z-10">

              <h2 className="mt-6 text-4xl lg:text-5xl font-extrabold leading-tight text-white">
                Stay Updated With
                <span className="block text-lime-300">
                  School News & Events
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-green-50">
                Never miss important announcements, student achievements,
                competitions, celebrations and upcoming events. Our monthly
                newsletter keeps parents, students and teachers connected with
                everything happening on campus.
              </p>

              <div className="mt-10 ">
                <button className="cursor-pointer group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-[#0B7A4A] shadow-xl transition duration-300 hover:scale-105 hover:shadow-2xl">
                  Read Latest Newsletter

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B7A4A] text-white transition group-hover:translate-x-1">
                    <HiOutlineArrowRight size={20} />
                  </span>
                </button>
              </div>

            </div>

            {/* Right Image */}
            <div className="relative flex justify-center lg:justify-end self-end">

              <img
                src={newsletterBoy}
                alt="Newsletter"
                className="w-full max-w-[540px] object-contain lg:translate-y-5"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default NewsletterSection;