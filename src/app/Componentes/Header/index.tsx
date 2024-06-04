"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AltArrowRight, ArrowRight } from "react-solar-set";

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
            className="mr-10 hover:text-blue-500 aria-selected:text-violet-500 "
          >
            Home
          </button>
        </Link>
        <Link href="/Orcamento">
          <button
            aria-selected={isActive("/Orcamento")}
            className="hover:text-blue-500 aria-selected:text-violet-500  "
          >
            Orçamentos
          </button>
        </Link>
      </div>

      <Link href="https://wa.me/5591985939736?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+como+criar+meu+site.">
        <button className="flex bg-gradient-to-r from-[#452A67] to-[#46299A] text-white py-2 px-4 gap-2 rounded-full text-center items-center justify-center hover:font-bold hover:text-blue-400">
          Saiba Mais
          <AltArrowRight size={16} />
        </button>
      </Link>
    </div>
  );
};
export default Header;
