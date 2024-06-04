import Questionario from "../Questionario"

function TextOrcamento (){
    return(
        <div>
            <div className="mb-20 mt-20 ">
                <h1 className="text-center text-4xl font-extrabold max-w-screen-sm mx-auto mb-5 "> Precisando de um <span className="bg-gradient-to-r  from-[#01E1FF] to-[#1E53BB] text-transparent bg-clip-text">site</span> ou  <span className="bg-gradient-to-r  from-[#01E1FF] to-[#1E53BB] text-transparent bg-clip-text">sistema</span> para sua empresa? </h1>
                <p className=" text-center max-w-screen-lg mx-auto text-xl font-light">Temos uma equipe de desenvolvedores especializados na área, com as mais novas tecnologias do mercado como TypeScript, JavaScript, ReactJs, HTML5, Tailwind e outras tecnologias super em alta. Desenvolvendo sites modernos e responsivos, trazendo um ar de sofisticação para sua empresa, além de chamar a atenção para sua marca. Nossos Dev’s trabalham desenvolvendo Sites, portifólios, agregador de link, blog, entre outros modelos web.</p>
            </div>
            <div className="flex">
                <div className=" mx-auto">
                    <h2 className="text-2xl">Como pedir um orçamento?</h2>
                        <ul className="text-sm font-extralight g-10 list-disc ml-10 mt-7">
                            <li> Descreva em detalhes o que você deseja com o site; </li>
                            <li> O que você espera, quais funcionalidades e ações ele deverá ter; </li>
                            <li> Descreva sua marca e como sua empresa funciona; </li>
                            <li> Mencione todos os detalhes que espera que o site tenha  </li>
                        </ul>
                </div>
                <Questionario/>
            </div>
            
        </div>

    )
}
export default TextOrcamento