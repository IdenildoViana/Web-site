import ButtonHome from "../ButtonHome"

function TextHome () {
    return(
        <div className="mt-14 ml-10 text-5xl font-semibold">
            <h1 className=""> Seu negócio com mais vida. </h1>
            <h1 className="mt-2"> Tenha mais Visibilidade. </h1>
            <h1 className="mt-2"> Conquiste seus sonhos. </h1>

            <h2 className="mt-14 text-3xl font-medium">Por que ter um site?</h2>
            <ul className="text-xl font-extralight g-10 list-disc ml-10 mt-7">
                <li>Ele amplia a presença digital;</li>
                <li>Alcança um público maior e supera barreiras geográficas e temporais;</li>
                <li>Um site bem projetado serve como uma poderosa ferramenta de marketing;</li>
                <li>Impulsionando o crescimento, aumentando a visibilidade da marca, gerando leads e conquistando novos clientes;</li>
                <li>Funciona como uma vitrine virtual para apresentar produtos e serviços de forma atrativa, incentivando o contato direto com a empresa.</li>
            </ul>
            <h2 className="mt-7 text-3xl font-medium "> Investir em um site é crucial para o crescimento da marca</h2>
            <ButtonHome/>
        </div>
    )
}
export default TextHome