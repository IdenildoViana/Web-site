import Link from "next/link"

const Header = () =>{
    return (
        <div className="flex h-20 bg-[#030937] bg-opacity-50 justify-between items-center px-5 sm:rounded-xl ">
            <button className="text-xl bg-violet-900 py-2 px-4 rounded-lg ">VianaDev</button>
            <div className="flex ">
                <button className="mr-10 hover:text-violet-600 focus:text-violet-600 ">  <Link href="/"> <a > Home </a> </Link></button>
                <button className=" hover:text-violet-600 hover:focus:text-violet-600"> <Link href="/Orcamento"> <a > Orçamentos </a> </Link></button>
            </div>
            <button className="bg-violet-900 py-2 px-4 rounded-full text-center items-center justify-center">Saiba Mais</button>
            
        </div>
    )
}
export default Header