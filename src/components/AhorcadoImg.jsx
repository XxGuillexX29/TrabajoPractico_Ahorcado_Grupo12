import image0 from './images/0.jpg';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';
import './Hangman.css';

const images = [
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
]

export function AhorcadoImg({ imageNumber }) {

    if (imageNumber >= 6) {
        imageNumber = 6;
    }

    return (
        <section className='section__main__img-conteiner'>
            <h2 className='h2title-game'>Ahorcado</h2>
            <div className='div__img-conteiner'>
                <img
                    className='colgado-image'
                    src={images[imageNumber]}
                    alt="Imagen del ahorcado"
                />
            </div>
        </section>
    )
}