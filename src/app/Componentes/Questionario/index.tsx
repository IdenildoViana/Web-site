import InputQuestonario from "../InputQuestionario";

function Questionario() {
  return (
    <div className="max-w-screen-md mx-auto mb-10 ">
      <InputQuestonario />

      <p className="text-sm sm:text-lg ml-10 mr-10 text-justify text-blue-300 max-w-screen-sm ">
        Descreva exatamente o que está buscando. Quando mais detalhes, mais
        rápido conseguimos te dar um retorno. Descrições vagas demais irão
        atrasar muito o processo de entrega.
      </p>

      <div className=" items-center sm:text-2xl justify-center text-center">
        <button className=" bg-violet-950 mt-5 py-2 px-4 rounded-2xl hover:bg-violet-900 ">
          Solicitar Orçamento
        </button>
      </div>
    </div>
  );
}
export default Questionario;
