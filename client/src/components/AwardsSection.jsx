import centerImage from "../assets/award_center.webp";

const leftAwards = [
  {
    icon: "https://thekalyanischool.com/web-assets/images/award_icon1.webp",
    title: "QS I-GAUGE",
    description:
      "The Kalyani School has achieved a DIAMOND+ level in the QS I-GAUGE rating for Indian schools.",
  },
  {
    icon: "https://thekalyanischool.com/web-assets/images/award_icon2.webp",
    title: "Education World: C-Fore Rankings",
    description:
      "C-Fore ranked The Kalyani School 1st in Pune amongst all CBSE schools following the National Curriculum.",
  },
  {
    icon: "https://thekalyanischool.com/web-assets/images/award_icon3.webp",
    title: "National Green School Rankings",
    description:
      "The Kalyani School received the Platinum Category of The Climate Project Foundation's Green Campus Programme Award 2025.",
  },
];

const rightAwards = [
  {
    icon: "https://thekalyanischool.com/web-assets/images/award_icon4.webp",
    title: "Education World India School Rankings",
    description:
      "Ranked 1st in Pune & 6th in Maharashtra under the CO-ED Day Schools Category.",
  },
  {
    icon: "https://thekalyanischool.com/web-assets/images/award_icon5.webp",
    title: "IC3 Institute",
    description:
      "The Kalyani School has been awarded Grade A+ Accreditation by the IC3 Institute.",
  },
];

export default function AwardsSection() {
  return (
    <section id="awards" className="py-24 bg-[#F8FBF8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Our <span className="text-[#0B7A4A]">Awards</span>
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Recognition for excellence in academics, innovation,
            sustainability and holistic education.
          </p>
        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-3 gap-12 items-center">

          {/* Left Awards */}

          <div className="space-y-8">
            {leftAwards.map((award) => (
              <div
                key={award.title}
                className="flex gap-5 rounded-2xl bg-white p-5 shadow-lg hover:shadow-xl transition"
              >
                <img
                  src={award.icon}
                  alt={award.title}
                  className="w-16 h-16 object-contain shrink-0"
                />

                <div>
                  <h3 className="text-lg font-bold text-[#0B7A4A]">
                    {award.title}
                  </h3>

                  <p className="mt-2 text-gray-600 leading-7">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}

          <div className="flex justify-center">
            <img
              src={centerImage}
              alt="Awards"
              className="max-h-[380px] object-contain"
            />
          </div>

          {/* Right Awards */}

          <div className="space-y-8">
            {rightAwards.map((award) => (
              <div
                key={award.title}
                className="flex gap-5 rounded-2xl bg-white p-5 shadow-lg hover:shadow-xl transition"
              >
                <img
                  src={award.icon}
                  alt={award.title}
                  className="w-16 h-16 object-contain shrink-0"
                />

                <div>
                  <h3 className="text-lg font-bold text-[#0B7A4A]">
                    {award.title}
                  </h3>

                  <p className="mt-2 text-gray-600 leading-7">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

