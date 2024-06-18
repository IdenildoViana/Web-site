import img1 from "../../Imagens/img1.png";
import img2 from "../../Imagens/img2.png";
import img3 from "../../Imagens/img3.png";

function ImgHome() {
  return (
    <div className="hidden mt-20 md:flex flex-col gap-20 max-w-md my-auto">
      <img
        src={img1.src}
        alt="primeira imagem"
        className=" scale-100 hover:scale-110"
      />
      <img
        src={img2.src}
        alt="primeira imagem"
        className=" scale-100 hover:scale-110"
      />
      <img
        src={img3.src}
        alt="primeira imagem"
        className=" scale-100 hover:scale-110"
      />
    </div>
  );
}
export default ImgHome;
