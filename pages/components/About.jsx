import Image from "next/image";
import MeImage from "../images/image1.jpeg";
import Navbar from "./Navbar";
import AnimatedWave from "./AnimatedWave";
import Link from "next/link";
import LaptopHero from "../images/laptop hero.gif";

const About = () => {
  return (
    <>
      <Navbar />

      <section class="py-20 lg:py-24">
        <div class="px-4">
          <div class="flex flex-wrap -mx-4">
            <div class="relative w-full lg:w-1/2 px-4 mb-12 lg:mb-0 lg:pr-24 xl:pr-40">
              <div class="max-w-md md:max-w-lg mx-auto lg:mr-0 mb-12 md:mb-20">
                <h1 class="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900">
                  <span class="block font-serif">ARJUN</span>
                  <span class="block text-xl xs:text-1xl md:text-2xl font-serif italic">
                    @arjuncodess
                  </span>
                  <span class="block text-4xl xs:text-5xl font-serif italic text-end">
                    developer
                  </span>
                  <span class="block text-4xl xs:text-5xl font-serif italic text-end">
                    designer
                  </span>
                  <span class="block text-4xl xs:text-5xl font-serif italic text-end">
                    writer
                  </span>
                </h1>
              </div>
              <div className="flex justify-center items-center my-[-40px]">
                <Image class="" src={LaptopHero} alt="" />
              </div>
            </div>
            <div class="w-full lg:w-1/2 px-4 md:py-20">
              <div class="max-w-md md:max-w-lg xl:max-w-2xl mx-auto lg:mx-0">
                <p class="text-2xl text-gray-800 mb-8">
                  Passionate Talented Young Full-Stack Developer from India 🇮🇳
                </p>
                <p class="md:text-xl text-lg text-gray-700 mb-8">
                  Namaste! 🙏, my name is Arjun Vijay Prakash 💁‍♂️, and I am a
                  1️⃣3️⃣-year-old full-stack developer based in India. With 4️⃣
                  years of experience in web development, I have developed a
                  passion for creating dynamic and functional websites that meet
                  the needs of my clients. I have participated in several
                  hackathons and coding competitions, which has allowed me to
                  showcase my skills in both front-end and back-end development.
                </p>
                <p class="md:text-xl text-lg text-gray-700">
                  As a developer, I am committed to staying up-to-date with the
                  latest trends and technologies in the industry. My goal is to
                  create websites that not only look great but also provide an
                  exceptional user experience 💻. If you are looking for a
                  talented and dedicated developer to bring your website to
                  life, look no further. I am confident in my ability to deliver
                  a high-quality product that exceeds your expectations 👨‍💻.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
