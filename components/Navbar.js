import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" max-w-[1300px] mx-auto">
      <Link
        className="inline-block pl-4 py-8"
        href="https://demarkelabs.com/"
        target="_blank"
      >
        <Image src="/images/logo.webp" alt="logo" width={150} height={77} />
      </Link>
    </div>
  );
};

export default Navbar;
