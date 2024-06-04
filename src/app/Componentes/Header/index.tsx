"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  function isActive(path: string) {
    return pathname.endsWith(path);
  }

  return (
    <div className="flex h-20 bg-[#030937] bg-opacity-50 justify-between items-center px-5 sm:rounded-xl sticky top-0">
      <button className="text-2xl font-extrabold  bg-gradient-to-r  from-violet-500 to-violet-800 text-transparent bg-clip-text py-2 px-4 rounded-lg ">
        VianaDev
      </button>
      <div className="flex ">
        <Link href="/">
          <button
            aria-selected={isActive("/")}
            className="mr-10 hover:text-violet-600 aria-selected:text-violet-600 focus:text-violet-600 "
          >
            <a> Home </a>
          </button>
        </Link>
        <Link href="/Orcamento">
          <button
            aria-selected={isActive("/Orcamento")}
            className="hover:text-violet-600 aria-selected:text-violet-600 focus:text-violet-600"
          >
            <a> Orçamentos </a>
          </button>
        </Link>
      </div>

      <button className="bg-violet-900 py-2 px-4 rounded-full text-center items-center justify-center">
        {" "}
        <Link href="https://wa.me/5591985939736?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+como+criar+meu+site.">
          {" "}
          <a>Saiba Mais</a>{" "}
        </Link>
      </button>
    </div>
  );
};
export default Header;
