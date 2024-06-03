import Header from "./Componentes/Header";
import ImgHome from "./Componentes/ImgHome";
import TextHome from "./Componentes/TextHome";

export default function Home() {
  return (
    <main className="h-screen overflow-auto mx-auto bg-gradient-to-r from-[#0E1218] via-[#0C0D37] to-[#0E1218] ">
      <Header/>
      <div className="flex justify-center items-center  gap-x-20">
        <TextHome/>
        <ImgHome/>
      </div>
      
    </main>
  );
}
