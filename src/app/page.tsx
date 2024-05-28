import Header from "./Componentes/Header";
import ImgHome from "./Componentes/ImgHome";
import TextHome from "./Componentes/TextHome";

export default function Home() {
  return (
    <main className="h-screen bg-[#0C0D37]">
      <Header/>
      <div className="flex justify-center gap-x-80 items-center ">
        <TextHome/>
        <ImgHome/>
      </div>
      
    </main>
  );
}
