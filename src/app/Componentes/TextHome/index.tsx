import ButtonHome from "../ButtonHome";

function TextHome() {
  return (
    <div className="mt-14 text-3xl sm:text-6xl font-extrabold  ">
      <h1 className="ml-10">
        <span className=" bg-gradient-to-r  from-[#01E1FF] to-[#1E53BB] text-transparent bg-clip-text">
          Seu negócio
        </span>
        com mais vida.
      </h1>
      <h1 className="mt-2 ml-10">
        {" "}
        Tenha mais{" "}
        <span className="bg-gradient-to-r  from-[#01E1FF] to-[#1E53BB] text-transparent bg-clip-text">
          {" "}
          Visibilidade.{" "}
        </span>{" "}
      </h1>
      <h1 className="mt-2 ml-10">
        {" "}
        <span className="bg-gradient-to-r  from-[#01E1FF] to-[#1E53BB] text-transparent bg-clip-text">
          Conquiste
        </span>{" "}
        seus sonhos.{" "}
      </h1>

      <h2 className="mt-14  text-2xl text-center sm:text-3xl sm:text-left font-medium">
        Por que ter um site?
      </h2>
      <ul className="text-lg sm:text-xl font-extralight g-10 list-disc ml-10 mt-7 max-w-screen-lg mx-auto">
        <li>Ele amplia a presença digital;</li>
        <li>
          Alcança um público maior e supera barreiras geográficas e temporais;
        </li>
        <li>
          Um site bem projetado serve como uma poderosa ferramenta de marketing;
        </li>
        <li>
          Impulsionando o crescimento, aumentando a visibilidade da marca,
          gerando leads e conquistando novos clientes;
        </li>
        <li>
          Funciona como uma vitrine virtual para apresentar produtos e serviços
          de forma atrativa, incentivando o contato direto com a empresa.
        </li>
      </ul>
      <h2 className="mt-7 text-2xl text-center sm:text-3xl sm:text-left font-medium ">
        {" "}
        Investir em um site é crucial para o crescimento de sua marca.
      </h2>
      <ButtonHome />
    </div>
  );
}
export default TextHome;
