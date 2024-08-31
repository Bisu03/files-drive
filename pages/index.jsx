import Image from "next/image";
import React from "react";
import { BiFolder, BiShare } from "react-icons/bi";
import { FaUpload } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Link from "next/link";

const index = () => {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Secure Cloud Storage for Your Files
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Store, share, and access your files from anywhere with our reliable and user-friendly cloud storage service.
            </p>
            <Link
              href="/files"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Get started
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </Link>
            <Link
              href="/sign-up"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Sign Up
            </Link>
          </div>
          <div class=" lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="/hero.jpg"
              alt="mockup"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <FaUpload className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Easy File Uploads</h3>
                <p className="text-muted-foreground">
                  Drag and drop your files or use our intuitive web interface to
                  upload your data.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <BiShare className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Secure Sharing</h3>
                <p className="text-muted-foreground">
                  Share files with your team or clients with customizable access
                  permissions.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <BiFolder className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Automatic Sync</h3>
                <p className="text-muted-foreground">
                  Our desktop and mobile apps keep your files in sync across all
                  your devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
