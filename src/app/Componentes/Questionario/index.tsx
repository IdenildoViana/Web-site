function Questionario() {
  return (
    <div className="max-w-screen-md mx-auto mb-10 ">
      <div className="flex flex-col gap-4">
        <div className="flex w-full gap-6">
          <div className="flex w-full flex-col gap-2">
            <span className="ml-2">Nome</span>
            <input
              type="text"
              placeholder="Seu nome..."
              className="rounded-2xl py-2 px-11 text-black bg-slate-200"
            />
          </div>

          <div className="flex w-full flex-col gap-2">
            <span className="ml-2">Telefone</span>
            <input
              type="tel"
              placeholder="Número com DDD"
              className="rounded-2xl text-black py-2 px-11  bg-slate-200"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="ml-2">E-mail</span>
          <input
            type="email"
            placeholder="Seu e-mail..."
            className="rounded-2xl py-2 px-11 mb-10 text-black  bg-slate-200 "
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="ml-2 text-lg">Como podemos ajudar?</span>
          <textarea
            rows={3}
            placeholder="Descreva com detalhes seu pedido aqui..."
            className="rounded-2xl py-2 px-11 text-black bg-slate-200 min-h-16"
          />
        </div>
      </div>
      <p className="text-sm text-blue-300 max-w-screen-sm ">
        Descreva exatamente o que está buscando. Quando mais detalhes, mais
        rápido conseguimos te dar um retorno. Descrições vagas demais irão
        atrasar muito o processo de entrega.
      </p>

      <div className=" items-center justify-center text-center">
        <button className=" bg-violet-900 mt-10 py-2 px-4 rounded-2xl ">
          Solicitar Orçamento
        </button>
      </div>
    </div>
  );
}
export default Questionario;
