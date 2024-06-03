import Questionario from "../Questionario"

function TextOrcamento (){
    return(
        <div className="items-center">
            <div className="mb-20">
                <h1 className="text-center text-4xl max-w-3xl font-bold">Precisando de um site ou <br/> sistema para sua empresa?</h1>
                <p className=" text-center items-center justify-center max-w-3xl text-xl">Temos uma equipe de desenvolvedores especializados na área, com as mais novas tecnologias do mercado como TypeScript, JavaScript, ReactJs, HTML5, Tailwind e outras tecnologias super em alta. Desenvolvendo sites modernos e responsivos, trazendo um ar de sofisticação para sua empresa, além de chamar a atenção para sua marca. Nossos Dev’s trabalham desenvolvendo Sites, portifólios, agregador de link, blog, entre outros modelos web.</p>
            </div>
            <div className="flex">
                <div>
                    <h2>Como pedir um orçamento?</h2>
                        <ul className="text-xl font-extralight g-10 list-disc ml-10 mt-7">
                            <li>
                                Descreva em detalhes o que você deseja com o site; 
                            </li>
                            <li>
                                O que você espera, quais funcionalidades e ações ele deverá ter; 
                            </li>
                            <li>
                                Descreva sua marca e como sua empresa funciona; 
                            </li>
                            <li>
                                Mencione todos os detalhes que espera que o site tenha 
                            </li>
                        </ul>
                </div>
                <Questionario/>
            </div>
            
        </div>

    )
}
export default TextOrcamento