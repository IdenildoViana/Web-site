import ButtonHome from "../ButtonHome";
import ListaHome from "../ListaHome";

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
      <ListaHome />
      <h2 className="mt-7 text-2xl text-center sm:text-3xl sm:text-left font-medium ">
        {" "}
        Investir em um site é crucial para o crescimento de sua marca.
      </h2>
      <ButtonHome />
    </div>
  );
}
export default TextHome;
