import Link from "next/link";
import { AltArrowRight, Dollar } from "react-solar-set";

function ButtonHome() {
  return (
    <div className=" flex text-base mt-10  items-center justify-center text-center font-normal ">
      <Link href="https://wa.me/5591985939736?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+como+criar+meu+site.">
        <button className="  flex text-center justify-center items-center bg-green-500 text-white px-4 py-2 rounded-full mr-10">
          Saiba Mais
          <AltArrowRight size={20} />
        </button>
      </Link>
      <Link href="/Orcamento">
        <button className=" flex items-center gap-2 bg-violet-800 px-4 py-2 rounded-full">
          Orçamento
          <Dollar size={20} />
        </button>
      </Link>
    </div>
  );
}
export default ButtonHome;
