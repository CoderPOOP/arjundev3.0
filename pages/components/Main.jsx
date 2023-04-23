import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiDevdotto } from "react-icons/si";
import Head from "next/head";
import Link from "next/link";
import AnimatedWave from './AnimatedWave'

const Main = () => {
  const GithubLink = "https://github.com/CoderPOOP";
  const InstagramLink = "https://www.instagram.com/arjuncoder/";
  const LinkedinLink =
    "https://www.linkedin.com/in/arjun-vijay-prakash-666941214/";
  const DevLink = "https://dev.to/arjuncodess";
  const TwitterLink = "https://twitter.com/arjuncodess";
  return (
    <>
      <Head>
        <title>Home - ArjunCodess</title>
        <meta
          name="description"
          content="Hey, this is my protfolio, make sure to take a look at my projects"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerPolicy="no-referrer" />
      <div className="flex flex-col items-center justify-center h-screen">
        <div name="home">
        <div className="hidden md:flex flex-col text-black" id="mobile-menu">
          <ul className="flex justify-center text-lg text-center py-0">
            <li className="mr-0 hover:bg-blue-600 transition duration-200 each-in-out hover:text-white px-6 py-2 rounded font-medium">
              <Link
                className="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="mr-0 hover:bg-green-600 transition duration-200 each-in-out hover:text-white px-6 py-2 rounded font-medium">
              <Link
                className="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200"
                href="/about"
              >
                About
              </Link>
            </li>
            <li className="mr-0 hover:bg-orange-600 transition duration-200 each-in-out hover:text-white px-6 py-2 rounded font-medium">
              <Link
                className="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200"
                href="/skills"
              >
                Skills
              </Link>
            </li>
            <li className="mr-0 hover:bg-violet-600 transition duration-200 each-in-out hover:text-white px-6 py-2 rounded font-medium">
              <Link
                className="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200"
                href="/work"
              >
                Work
              </Link>
            </li>
            <li className="mr-0 hover:bg-yellow-600 transition duration-200 each-in-out hover:text-white px-6 py-2 rounded font-medium">
              <Link
                className="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex md:hidden flex-col text-black" id="mobile-menu">
          <ul className="flex justify-center text-lg text-center py-8">
            <li className="mr-0">
              <Link
                className="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200"
                href="/about"
              >
                About
              </Link>
            </li>
            <li className="mr-0">
              <Link
                className="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200"
                href="/skills"
              >
                Skills
              </Link>
            </li>
            <li className="mr-0">
              <Link
                className="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200"
                href="/work"
              >
                Work
              </Link>
            </li>
            <li className="mr-0">
              <Link
                className="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
          <div className="text-3xl md:text-5xl text-center md:pt-0 px-2 font-heading">
            <h1
              id="name"
              className="my-2 p-4 font-bold text-[160%] lg:text-[250%] border-[#27274c] lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all"
            >
              <span className="border-green-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md font-serif italic transition-all">
                A
              </span>
              <span className="border-red-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                R
              </span>
              <span className="border-blue-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                J
              </span>
              <span className="border-purple-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                U
              </span>
              <span className="border-yellow-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                N
              </span>
              <span className="border-orange-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                {" "}
              </span>
              <span className="border-orange-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                V
              </span>
              <span className="border-yellow-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                I
              </span>
              <span className="border-pink-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                J
              </span>
              <span className="border-blue-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                @
              </span>
              <span className="border-red-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                Y
              </span>
              <span className="border-blue-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                {" "}
              </span>
              <span className="border-blue-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                P
              </span>
              <span className="border-green-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                R
              </span>
              <span className="border-green-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                @
              </span>
              <span className="border-amber-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                K
              </span>
              <span className="border-orange-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                @
              </span>
              <span className="border-pink-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                S
              </span>
              <span className="border-purple-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                H
              </span>
            </h1>
          </div>
        </div>
        
        <div>
          <ul className="text-lg wrapper">
          <a href={GithubLink} target="_blank" rel="noreferrer">
            <li className="icon github">
              <span className="tooltip">Github</span>
              <span>
                <i className="fab fa-github"></i>
              </span>
            </li>
          </a>

            <a href={TwitterLink} target="_blank" rel="noreferrer">
            <li className="icon twitter">
              <span className="tooltip">Twitter</span>
              <span>
                <i className="fab fa-twitter"></i>
              </span>
            </li>
            </a>
            
            <a href={InstagramLink} target="_blank" rel="noreferrer">
            <li className="icon instagram">
              <span className="tooltip">Instagram</span>
              <span>
                <i className="fab fa-instagram"></i>
              </span>
            </li>
            </a>

            <a href={DevLink} target="_blank" rel="noreferrer">
            <li className="icon dev">
              <span className="tooltip">Dev.to</span>
              <span>
                <i className="fab fa-dev"></i>
              </span>
            </li>
            </a>
          </ul>
        </div>
      </div>
      <AnimatedWave
          color={"#1a3aba"}
          animationDuration="4s"
          opacity={"0.7"}
        />
        <AnimatedWave
          color={"#1a3aba"}
          animationDuration="12s"
          opacity={"0.5"}
        />
        <AnimatedWave
          color={"#1a3aba"}
          animationDirection="reverse"
          animationDuration="10s"
          opacity={"0.2"}
        />
    </>
  );
};

export default Main;
