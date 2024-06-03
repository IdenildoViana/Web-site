function Questionario (){
    return( 
        <div className="max-w-screen-md mx-auto mb-10 ">
            <div>
                <div className="flex">
                    <input type="text" placeholder="Seu nome..." className="mr-10 mb-10 rounded-2xl py-2 px-11 text-black"/>
                    <input type="number" placeholder="Número com DDD" className="rounded-2xl mb-10 text-black px-11"/>
                </div>
                <input type="email" placeholder="Seu e-mail..." className="rounded-2xl py-2 px-56 mb-10 text-black " />
                <input type="text" placeholder="Descreva com detalhes seu pedido aqui..." className="rounded-2xl py-28 px-56 text-black " />
            </div>
            <p className="text-xs text-blue-300  ">Descreva exatamente o que está buscando. Quando mais detalhes, mais rápido conseguimos te dar um retorno. Descrições vagas demais irão atrasar muito o processo de entrega.</p>

            <div className=" items-center justify-center text-center" >
                <button className=" bg-violet-900 mt-10 py-2 px-4 rounded-2xl "> Solicitar Orçamento </button>
                
            </div>
           
        </div>
    )
}
export default Questionario;