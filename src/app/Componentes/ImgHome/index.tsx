import img1 from "../../../Imagens/img1.png";
import img2 from "../../../Imagens/img2.png";
import img3 from "../../../Imagens/img3.png";

function ImgHome() {
  return (
    <div className=" flex flex-col gap-10 mr-64 max-w-xs my-auto">
      <img
        src={img1.src}
        alt="primeira imagem"
        className=" mt-10 hover:bg-cover"
      />
      <img src={img2.src} alt="primeira imagem" className="" />
      <img src={img3.src} alt="primeira imagem" className="" />
    </div>
  );
}
export default ImgHome;
