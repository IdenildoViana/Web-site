function Questionario (){
    return( 
        <div className="max-w-screen-md mx-auto mb-10 ">
            <div>
                <div className="flex">
                    <div className="">
                        <span className="ml-2"> Nome <br/> </span> 
                        <input type="text" placeholder="Seu nome..." className="mr-10 mb-10 rounded-2xl py-2 px-11 text-black bg-slate-200"/>
                    </div>

                    <div className="">
                       <span className="ml-2"> Telefone <br/> </span> 
                       <input type="number" placeholder="Número com DDD" className="rounded-2xl text-black py-2 px-11  bg-slate-200"/>
                    </div>                    
                </div>

                
                <div className="">
                       <span className="ml-2"> E-mail <br/> </span> 
                       <input type="email" placeholder="Seu e-mail..." className="rounded-2xl py-2 px-56 mb-10 text-black  bg-slate-200 " />
                </div> 
                
                <div className="text-lg">
                       <span className="ml-2"> Como podemos ajudar? <br/> </span> 
                       <input type="text" placeholder="Descreva com detalhes seu pedido aqui..." className="rounded-2xl py-28 px-56 text-black   bg-slate-200" />
                </div> 

                
               
            </div>
            <p className="text-sm text-blue-300 max-w-screen-sm ">Descreva exatamente o que está buscando. Quando mais detalhes, mais rápido conseguimos te dar um retorno. Descrições vagas demais irão atrasar muito o processo de entrega.</p>

            <div className=" items-center justify-center text-center" >
                <button className=" bg-violet-900 mt-10 py-2 px-4 rounded-2xl "> Solicitar Orçamento </button>
                
            </div>
           
        </div>
    )
}
export default Questionario;