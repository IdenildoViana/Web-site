import Link from "next/link";
import { AltArrowRight, Dollar } from "react-solar-set";

function ButtonHome() {
  return (
    <div className=" flex text-base mt-10  items-center justify-center text-center font-normal ">
      <Link href="https://wa.me/5591985939736?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+como+criar+meu+site.">
        <button className=" md:text-2xl flex text-center justify-center items-center bg-gradient-to-r from-green-700 to-green-600 text-white px-4 py-2 rounded-full mr-10 hover:text-blue-900 hover:font-bold ">
          Saiba Mais
          <AltArrowRight size={20} />
        </button>
      </Link>
      <Link href="/Orcamento">
        <button className="md:text-2xl flex items-center gap-2 bg-gradient-to-r from-[#452A67] to-[#46299A] px-4 py-2 rounded-full hover:text-blue-400 hover:font-bold">
          Orçamento
          <Dollar size={20} />
        </button>
      </Link>
    </div>
  );
}
export default ButtonHome;
