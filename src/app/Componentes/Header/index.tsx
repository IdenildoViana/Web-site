const Header = () =>{
    return (
        <div className="flex h-20 bg-[#030937]  justify-between items-center px-5 sm:rounded-xl ">
            <button className="text-xl bg-violet-900 py-2 px-4 rounded-lg">VianaDev</button>
            <div className="flex ">
                <button className="mr-10"> Home </button>
                <button > Orçamentos </button>
            </div>

            <button className="bg-violet-900 py-2 px-4 rounded-full">Saiba Mais</button>
            
        </div>
    )
}
export default Header