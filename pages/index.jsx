import Image from "next/image";
import React from "react";
import { BiFolder, BiShare } from "react-icons/bi";
import { FaUpload } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Link from "next/link";

const index = () => {
  return (
    <>
     
      <section className="w-full mt-5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Secure Cloud Storage for Your Files
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Store, share, and access your files from anywhere with our reliable and user-friendly cloud storage
                  service.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/sign-up"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Sign Up
                </Link>
              </div>
            </div>
            <img
              src="/hero.jpg"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              width="550"
              height="550"
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
