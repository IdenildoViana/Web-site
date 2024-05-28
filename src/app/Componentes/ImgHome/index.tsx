import img1 from '../../../Imagens/img1.png'
import img2 from '../../../Imagens/img2.png'
import img3 from '../../../Imagens/img3.png'

function ImgHome(){
    return(
        <div className='mr-64'>
            <img src={img1.src} alt="primeira imagem" className="mt-10"/>
            <img src={img2.src} alt="primeira imagem" className="mt-10"/>
            <img src={img3.src} alt="primeira imagem" className="mt-10"/>
        </div>
    )
}
export default ImgHome