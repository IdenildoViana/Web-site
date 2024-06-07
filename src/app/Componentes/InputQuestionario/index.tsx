function InputQuestonario() {
  return (
    <div className="flex flex-col gap-4 text-base ml-2 mr-2">
      <div className="flex w-full gap-6">
        <div className="flex w-72 sm:w-full flex-col gap-2">
          <span className="ml-2 ">Nome</span>
          <input
            type="text"
            placeholder="Seu nome..."
            required
            className="rounded-2xl py-1 sm:py-2 px-5 sm:px-11 text-black bg-slate-200 focus:border-2 focus:border-violet-600 invalid:focus:border-2 invalid:focus:border-red-400 "
          />
        </div>

        <div className="flex w-72 sm:w-full flex-col gap-2">
          <span className="ml-2">Telefone</span>
          <input
            type="tel"
            required
            placeholder="Número com DDD"
            className="rounded-2xl text-black py-1 sm:py-2 px-5 sm:px-11 bg-slate-200 focus:border-violet-600 invalid:focus:border-2 invalid:focus:border-red-400"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="ml-2">E-mail</span>
        <input
          type="email"
          placeholder="Seu e-mail..."
          required
          className="rounded-2xl py-1 sm:py-2 px-5 sm:px-11 sm:mb-10 text-black  bg-slate-200 focus:border-violet-600 invalid:focus:border-2 invalid:focus:border-red-400 "
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="ml-2 text-lg">Como podemos ajudar?</span>
        <textarea
          rows={3}
          placeholder="Descreva com detalhes seu pedido aqui..."
          required
          className="rounded-2xl py-1 sm:py-2 px-5 sm:px-11 text-black bg-slate-200 min-h-16 focus:border-violet-600 invalid:focus:border-2 invalid:focus:border-red-400"
        />
      </div>
    </div>
  );
}
export default InputQuestonario;
