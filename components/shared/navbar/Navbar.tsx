import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";
import { UserButton } from "@clerk/nextjs";
// import MobileNav from "./MobileNav";
// import GlobalSearch from "../search/GlobalSearch";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 backdrop-blur-sm fixed z-50 w-full gap-5 p-6 shadow-light-main dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/logo.png"
          width={50}
          height={50}
          alt="Rawabbit"
        />

        <p className="h1-bold text-dark-100 dark:text-light-900 max-sm:hidden">
          <span className="text-primary-500"> روابط</span>
        </p>
      </Link>

      <GlobalSearch />

      <div className="flex-between gap-5">
        <UserButton />

        <Theme />
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
