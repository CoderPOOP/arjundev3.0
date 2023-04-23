import web1 from "../images/web1.jpeg";
import web2 from "../images/web2.jpeg";
import web3 from "../images/web3.jpeg";
import web4 from "../images/web4.jpeg";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import AnimatedWave from './AnimatedWave';

const Work = () => {
  return (
    <>
    <Navbar />
    <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <div class="text-center">
            <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">WORKS</h1>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            <div>
                <Image class="relative z-10 object-cover w-full rounded-md h-96" src={web1} alt=""/>

                <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <a href="https://google2-0-build.vercel.app/" class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                        Google Clone
                    </a>

                    <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        Perfect Google Clone made with NextJS
                    </p>
                </div>
            </div>

            <div>
                <Image class="relative z-10 object-cover w-full rounded-md h-96" src={web4} alt=""/>

                <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <a href="https://hulu-clone-coderpoop.vercel.app/" class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                        Hulu Clone
                    </a>

                    <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        Exceptional Hulu Clone made with NextJS
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  );
};

export default Work;
