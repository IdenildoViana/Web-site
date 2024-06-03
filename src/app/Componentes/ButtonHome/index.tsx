import Link from "next/link"

function ButtonHome (){
    return(
        <div className="text-xl mt-10 text-center  ">
            <button className="bg-green-500 px-4 py-2 rounded-full mr-10">Saiba mais </button>
            <button className="bg-violet-800 px-4 py-2 rounded-full"> <Link href='/Orcamento'> <a>Orçamento</a> </Link></button>
        </div>
    )
}
export default ButtonHome