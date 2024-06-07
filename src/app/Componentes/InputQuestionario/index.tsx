function InputQuestonario() {
  return (
    <div className="flex flex-col gap-4 text-base md:text-xl md:ml-0 md:mr-0 ml-10 mr-10">
      <div className="flex flex-col md:flex w-full gap-4 md:gap-6">
        <div className="flex w-full flex-col gap-2">
          <span className="ml-2 ">Nome</span>
          <input
            type="text"
            placeholder="Seu nome..."
            required
            className="rounded-2xl py-1 md:py-2 px-5 md:px-11 text-black bg-slate-200 focus:border-2 focus:border-violet-600 invalid:focus:border-2 invalid:focus:border-red-400 "
          />
        </div>

        <div className="flex w-full flex-col gap-2">
          <span className="ml-2">Telefone</span>
          <input
            type="tel"
            required
            placeholder="Número com DDD"
            className="rounded-2xl text-black py-1 md:py-2 px-5 md:px-11 bg-slate-200 focus:border-violet-600 invalid:focus:border-2 invalid:focus:border-red-400"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="ml-2">E-mail</span>
        <input
          type="email"
          placeholder="Seu e-mail..."
          required
          className="rounded-2xl py-1 md:py-2 px-5 md:px-11 md:mb-10 text-black  bg-slate-200 focus:border-violet-600 invalid:focus:border-2 invalid:focus:border-red-400 "
        />
      </div>

      <div className="flex flex-col md:text-xl gap-2">
        <span className="ml-2 md:text-xl text-lg">Como podemos ajudar?</span>
        <textarea
          rows={3}
          placeholder="Descreva com detalhes seu pedido aqui..."
          required
          className="rounded-2xl py-1 md:py-2 px-5 md:px-11 text-black bg-slate-200 min-h-16 focus:border-violet-600 invalid:focus:border-2 invalid:focus:border-red-400"
        />
      </div>
    </div>
  );
}
export default InputQuestonario;
