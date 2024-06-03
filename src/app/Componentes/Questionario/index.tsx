function Questionario (){
    return(
        <div className="">
            <div>
                <input type="text" placeholder="Seu nome..." className="mr-10 mb-10 rounded-full"/>
                <input type="number" placeholder="Número com DDD" className="rounded-full"/>
                <input type="email" placeholder="Seu e-mail..." className="rounded-full" />
                <input type="text" placeholder="Descreva com detalhes seu pedido aqui..." className="rounded-full" />
            </div>
            <p className="text-xs text-blue-300">Descreva exatamente o que está buscando. Quando mais detalhes, mais rápido conseguimos te dar um retorno. Descrições vagas demais irão atrasar muito o processo de entrega.</p>

            <button className=" bg-violet-700 mt-10 py-2 px-4 rounded-2xl"> Solicitar Orçamento </button>
                
        </div>
    )
}
export default Questionario;