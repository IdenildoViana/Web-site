import Link from "next/link"

function ButtonHome (){
    return(
        <div className="text-base mt-10 text-center font-normal ">
            <button className="bg-green-500 px-4 py-2 rounded-full mr-10"><Link href="https://wa.me/5591985939736?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+como+criar+meu+site."> <a>Saiba Mais</a> </Link> </button>
            <button className="bg-violet-800 px-4 py-2 rounded-full"> <Link href='/Orcamento'> <a>Orçamento</a> </Link></button>
        </div>
    )
}
export default ButtonHome