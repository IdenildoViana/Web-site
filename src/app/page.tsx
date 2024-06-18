import Header from "../Componentes/Header";
import ImgHome from "../Componentes/ImgHome";
import TextHome from "../Componentes/TextHome";

export default function Home() {
  return (
    <main className="h-screen overflow-y-auto mx-auto pb-12 bg-gradient-to-r from-[#0E1218] via-[#0C0D37] to-[#0E1218] ">
      <Header />
      <div className="sm:flex justify-center items-center gap-20 ml-10 mr-10">
        <TextHome />
        <ImgHome />
      </div>
    </main>
  );
}
