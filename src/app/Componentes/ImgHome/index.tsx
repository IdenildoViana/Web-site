import img1 from "../../../Imagens/img1.png";
import img2 from "../../../Imagens/img2.png";
import img3 from "../../../Imagens/img3.png";

function ImgHome() {
  return (
    <div className="hidden mt-20 md:flex flex-col gap-28 max-w-md my-auto">
      <img
        src={img1.src}
        alt="primeira imagem"
        className=" scale-125 hover:scale-150"
      />
      <img
        src={img2.src}
        alt="primeira imagem"
        className=" scale-125 hover:scale-150"
      />
      <img
        src={img3.src}
        alt="primeira imagem"
        className=" scale-125 hover:scale-150"
      />
    </div>
  );
}
export default ImgHome;
