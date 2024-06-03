import Header from "./Componentes/Header";
import ImgHome from "./Componentes/ImgHome";
import TextHome from "./Componentes/TextHome";

export default function Home() {
  return (
    <main className="h-screen overflow-auto bg-[#0C0D37]">
      <Header/>
      <div className="flex gap-x-10">
        <TextHome/>
        <ImgHome/>
      </div>
      
    </main>
  );
}
