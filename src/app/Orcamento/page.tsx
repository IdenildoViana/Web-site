import Header from "../Componentes/Header";
import TextOrcamento from "../Componentes/TextOrcamento";



export default function Home() {
  return (
    <main className="h-screen overflow-auto bg-gradient-to-r from-[#0E1218] via-[#0C0D37] to-[#0E1218] ">
      <Header/>
      <TextOrcamento/>
      
    </main>
  );
}