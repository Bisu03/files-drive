import Image from "next/image";
import React from "react";
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100 px-4">
                <div className="flex-1">
                    <Image src="/logo.jpg" width={100} height={100} alt="logo" />
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
