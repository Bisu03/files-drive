import Image from "next/image";
import React, { useContext } from "react";
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { ShowSidebarContext } from "../context/SidebarContext";

const Navbar = () => {


    const { ShowContext, setShowContext } = useContext(ShowSidebarContext)

    return (
        <>
            <div className="navbar bg-base-100 px-4">
                <div className="flex-1 items-center">
                    <Image src="/logo.jpg" width={100} height={100} alt="logo" />
                    <SignedIn>
                        <BiMenu className="w-6 h-6 ml-2 cursor-pointer" onClick={() => setShowContext(!ShowContext)} />
                    </SignedIn>
                </div>
                <div className="flex-none gap-2">
                    <div className="dropdown dropdown-end">
                        <SignedIn>
                            <div className="flex justify-between items-center">
                                <div className="navbar-end mr-2 ">
                                    <Link href="/files">Dashboard</Link>
                                </div>
                                <UserButton />
                            </div>
                        </SignedIn>
                    </div>
                    <SignedOut>
                        <Link
                            href="/sign-up"
                            className="inline-flex h-10 text-white items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                        >
                            Sign Up
                        </Link>
                    </SignedOut>
                </div>
            </div>
        </>
    );
};

export default Navbar;
