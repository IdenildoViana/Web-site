import img1 from "../../Imagens/img1.png";
import img2 from "../../Imagens/img2.png";
import img3 from "../../Imagens/img3.png";

function ImgHome() {
  return (
    <div className=" hidden mt-10 md:flex flex-col  sm:gap-16 max-w-md my-auto mr-5">
      <img
        src={img1.src}
        alt="primeira imagem"
        className="  hover:scale-100 sm:scale-100 sm:hover:scale-110"
      />
      <img
        src={img2.src}
        alt="primeira imagem"
        className=" sm:scale-100 sm:hover:scale-110"
      />
      <img
        src={img3.src}
        alt="primeira imagem"
        className=" sm:scale-100 sm:hover:scale-110"
      />
    </div>
  );
}
export default ImgHome;
