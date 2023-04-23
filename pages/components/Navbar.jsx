import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <section>
        <nav class="bg-white shadow dark:bg-gray-800">
          <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
            <Link
              href="/"
              class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >
              home
            </Link>

            <Link
              href="/about"
              class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >
              about
            </Link>

            <Link
              href="/skills"
              class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >
              skills
            </Link>

            <Link
              href="/work"
              class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >
              work
            </Link>

            <Link
              href="/contact"
              class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >
              contact
            </Link>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
