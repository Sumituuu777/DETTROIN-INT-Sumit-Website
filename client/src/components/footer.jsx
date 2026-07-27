import {
    HiOutlineLocationMarker,
    HiOutlinePhone,
    HiOutlineMail,
    HiOutlineArrowNarrowRight,
} from "react-icons/hi";

import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
} from "react-icons/fa";


import intach from "../assets/footer/intach.webp";
import ipn from "../assets/footer/ipn.webp";
import sportschamp from "../assets/footer/sportschamp.webp";
import worldclassroom from "../assets/footer/worldclassroom.png";
import afs from "../assets/footer/afs.png";

import shriram from "../assets/footer/shriram.webp";
import shrieducare from "../assets/footer/shrieducare.webp";
import torrins from "../assets/footer/torrins.webp";

const quickLinks = [
    "Home",
    "About Us",
    "Curriculum",
    "Admissions",
    "Achievements",
    "Parents Corner",
    "Career",
    "Contact Us",
];

const associations = [
    intach,
    ipn,
    sportschamp,
    worldclassroom,
    afs,
];

const collaborations = [
    shriram,
    shrieducare,
    torrins,
];

export default function Footer() {
    return (
        <footer className="bg-[#0A5A38] text-white pt-20">

            <div className="max-w-7xl mx-auto px-6 pb-16">

                <div className="grid lg:grid-cols-4 gap-14">

                    {/* Left */}

                    <div>

                        <div className="overflow-hidden rounded-3xl border border-green-700/20 shadow-xl">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d121066.27821477731!2d73.976835!3d18.514382!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c266d7bffd79%3A0xe25dff81976e4c90!2sThe%20Kalyani%20School!5e0!3m2!1sen!2sin!4v1785170874113!5m2!1sen!2sin"
                                className="w-full h-64 md:h-72"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="strict-origin-when-cross-origin"
                                title="The Kalyani School Map"
                            />
                        </div>

                        <div className="space-y-8 mt-8">

                            <div className="flex gap-4">

                                <HiOutlineLocationMarker className="text-3xl text-lime-300 mt-1" />

                                <p className="leading-7 text-green-100">
                                    Manjari (Budruk),
                                    <br />
                                    Near Hadapsar,
                                    <br />
                                    Pune 412307.
                                </p>

                            </div>

                            <div className="flex gap-4">

                                <HiOutlinePhone className="text-3xl text-lime-300 mt-1" />

                                <div className="space-y-2">

                                    <p>+91 8149117666</p>

                                    <p>+91 8149118666</p>

                                    <p>+91 8149119666</p>

                                </div>

                            </div>

                            <div className="flex gap-4">

                                <HiOutlineMail className="text-3xl text-lime-300 mt-1" />

                                <p>info@thekalyanischool.edu.in</p>

                            </div>

                        </div>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3 className="text-3xl font-bold">

                            Main{" "}

                            <span className="text-lime-300">
                                Quicklinks
                            </span>

                        </h3>

                        <div className="w-24 h-1 rounded-full bg-lime-300 mt-3 mb-8"></div>

                        <div className="space-y-5">

                            {quickLinks.map((item) => (

                                <a
                                    key={item}
                                    href={`/${item}`}
                                    className="group flex items-center gap-3 text-green-100 hover:text-lime-300 transition"
                                >

                                    <HiOutlineArrowNarrowRight className="group-hover:translate-x-1 transition" />

                                    {item}

                                </a>

                            ))}

                        </div>

                    </div>

                    {/* Associations */}

                    <div>

                        <h3 className="text-3xl font-bold">
                            Associations
                        </h3>

                        <div className="w-24 h-1 rounded-full bg-lime-300 mt-3 mb-8"></div>

                        <div className="grid gap-7">

                            {associations.map((logo) => (

                                <img
                                    key={logo}
                                    src={logo}
                                    alt=""
                                    className="w-44 object-contain brightness-0 invert opacity-90 hover:opacity-100 transition"
                                />

                            ))}

                        </div>

                    </div>

                    {/* Collaborations */}

                    <div>

                        <h3 className="text-3xl font-bold">
                            Academic
                            <br />
                            Collaboration
                        </h3>

                        <div className="w-24 h-1 rounded-full bg-lime-300 mt-3 mb-8"></div>

                        <div className="space-y-8">

                            {collaborations.map((logo) => (

                                <img
                                    key={logo}
                                    src={logo}
                                    alt=""
                                    className="w-52 object-contain brightness-0 invert opacity-90 hover:opacity-100 transition"
                                />

                            ))}

                        </div>

                    </div>

                </div>

            </div>

            {/* Bottom */}

            <div className="border-t border-white/10">

                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">

                    <p className="text-green-100">
                        © {new Date().getFullYear()} The Kalyani School. All Rights Reserved.
                    </p>

                    <div className="flex gap-4">

                        <a
                            href="/"
                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-lime-400 hover:text-black transition"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="/"
                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-lime-400 hover:text-black transition"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="/"
                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-lime-400 hover:text-black transition"
                        >
                            <FaYoutube />
                        </a>

                        <a
                            href="/"
                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-lime-400 hover:text-black transition"
                        >
                            <FaLinkedinIn />
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
}