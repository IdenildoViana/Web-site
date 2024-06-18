import ListaOrcamento from "../ListaOrcamento";
import Questionario from "../Questionario";

function TextOrcamento() {
  return (
    <div className="ml-10 mr-10">
      <div className="mb-20 mt-10  sm:mt-20 ">
        <h1 className="text-center text-3xl sm:text-5xl font-extrabold max-w-screen-sm mx-auto mb-5 ">
          {" "}
          Precisando de um{" "}
          <span className="bg-gradient-to-r  from-[#01E1FF] to-[#1E53BB] text-transparent bg-clip-text">
            site{" "}
          </span>{" "}
          ou{" "}
          <span className="bg-gradient-to-r  from-[#01E1FF] to-[#1E53BB] text-transparent bg-clip-text">
            sistema
          </span>{" "}
          para sua empresa?{" "}
        </h1>
        <p className=" text-justify ml-5 mr-5 sm:text-center sm:max-w-screen-lg sm:mx-auto text-base sm:text-2xl font-light">
          Temos uma equipe de desenvolvedores especializados na área, com as
          mais novas tecnologias do mercado como TypeScript, JavaScript,
          ReactJs, NextJs, NodeJs, HTML5, Tailwind e outras tecnologias super em
          alta. Desenvolvendo sites modernos e responsivos, trazendo um ar de
          sofisticação para sua empresa, além de chamar a atenção para sua
          marca. Nossos Dev’s trabalham desenvolvendo Sites, portifólios,
          agregador de link, blog, entre outros modelos web.
        </p>
      </div>
      <div className="sm:flex gap-10">
        <div className=" mx-auto">
          <h2 className="text-2xl text-center sm:text-left sm:text-3xl">
            Como pedir um orçamento?
          </h2>
          <ListaOrcamento />
        </div>
        <Questionario />
      </div>
    </div>
  );
}
export default TextOrcamento;
