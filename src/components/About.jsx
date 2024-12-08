import React from "react";
import AboutHero from "../assets/AboutHero.png";
import Instagram from "../assets/Instagram.svg";
import Youtube from "../assets/Youtube.svg";
import Facebook from "../assets/Facebook.svg";
import Twiter from "../assets/Twiter.svg";
import Team from "../assets/team.png";
import AboutBottom from "../assets/AboutBottom.png";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../App.css";

const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      {/* About Section */}
      <section className="container mx-auto px-6 py-40 text-center md:text-left bgImage h-[30rem]">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="font-bold pb-10">About Company</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              ABOUT US
            </h2>
            <p className="text-gray-500 mt-4">
              We aim to deliver the best service with a touch of creativity. Let
              us take care of your needs while you focus on what you do best.
            </p>
            <button className="bg-blue-600 text-white mt-6 px-6 py-2 rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-40 py-20">
        <h1 className="text-red-500 font-bold pb-10">Problems Trying</h1>
        <div className="flex gap-x-10">
          <h1>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h1>
          <h6>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </h6>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 text-center">
          {[
            { value: "15K", label: "Happy Customers" },
            { value: "150K", label: "Products Sold" },
            { value: "15", label: "Years of Experience" },
            { value: "100+", label: "Team Members" },
          ].map((stat, index) => (
            <div key={index}>
              <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="flex justify-center h-96 py-12 text-center">
        <div className="mt-6 aboutScene w-[30rem] scale-150">
          <div className="relative w-full max-w-4xl mx-auto">
            <button className="absolute inset-0 m-auto w-16 h-16 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center top-32">
              ▶
            </button>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section id="team" className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
          <p className="text-gray-500 mt-4">
            Dedicated individuals working to deliver excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              {
                name: "Alice",
                role: "CEO",
                img: Team,
              },
              {
                name: "Bob",
                role: "Designer",
                img: Team,
              },
              {
                name: "Charlie",
                role: "Developer",
                img: Team,
              },
            ].map((member, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg pb-6">
                <img src={member.img} alt={member.name} className=" mx-auto" />
                <h3 className="text-xl font-bold text-gray-800 mt-4">
                  {member.name}
                </h3>
                <p className="text-gray-500">{member.role}</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a href="#" className="text-blue-600">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a href="#" className="text-blue-400">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#" className="text-gray-700">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="py-12">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
          {["tesla", "stripe", "aws", "google", "uber", "paypal"].map(
            (logo, index) => (
              <img
                key={index}
                src={`https://dummyimage.com/100x50/000/fff&text=${logo}`}
                alt={logo}
                className="mx-auto"
              />
            )
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        id="contact"
        className="bg-blue-600 text-white py-12  flex items-center"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Now Let's Grow Yours</h2>
          <p className="mt-4">
            Join our community and take your business to the next level.
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-md mt-6">
            Contact Us
          </button>
        </div>
        <img src={AboutBottom} className="hidden lg:block" alt="" />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
