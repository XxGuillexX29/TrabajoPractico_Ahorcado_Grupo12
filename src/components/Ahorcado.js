import { useEffect, useState } from 'react';
import { getPalabraRandom } from './getPalabraRandom.js';
import { letras } from './letras.js';
import { AhorcadoImg } from './AhorcadoImg.jsx';
import './Hangman.css';
import sonido01 from "./sonidos/sonidoGanar.mp3"
import sonido02 from "./sonidos/sonidoPerder.mp3"
import sonido03 from "./sonidos/sonidoClick.mp3"


function Juego() {
  const [verOpcion, setVerOpcion] = useState('btn-option');
  const [intentos, setIntentos] = useState(0);
  const [selectWord] = useState(getPalabraRandom);
  const [Incog, setIncog] = useState('_ '.repeat(selectWord.length));
  const [perder, setPerder] = useState(false);
  const [ganar, setGanar] = useState(false);

  useEffect(() => {
    if (intentos === 6) {
      setPerder(true);
      play(sonido02)
      setVerOpcion('ocultar');
    }
  }, [intentos])

  useEffect(() => {
    const actualIncog = Incog.split(' ').join('');
    if (actualIncog === selectWord) {
      setGanar(true);
      play(sonido01)
      setVerOpcion('ocultar');
    }
  }, [Incog, selectWord])

  const chequearLetra = (letter) => {
    if (perder) return;
    if (!selectWord.includes(letter)) {
      setIntentos(Math.min(intentos + 1, 9))
      play(sonido03);
      return;
    }
    const IncogArray = Incog.split(' ');
    for (let i = 0; i < selectWord.length; i++) {
      if (selectWord[i] === letter) {
        IncogArray[i] = letter;
      }
    }
    setIncog(IncogArray.join(' '));
  }

  return (
    <section className='game'>
      <AhorcadoImg imageNumber={intentos} />
      <h3 className='h3__incognita-conteiner'>{Incog}</h3>
      <h3 className='h3__intentos-conteiner'>Intentos: {intentos} /6</h3>
      <div className='respuestas'>
        {
          (perder)
            ? <h2 className='mensaje'>¡Perdiste! La palabra era: {selectWord}</h2>
            : ''
            
        }
        {
          (ganar)
            ? <h2 className='mensaje'>Felicidades: ¡Ganaste!</h2>
            : ''
        }
      </div>
      <div className='opciones'>
        {
          letras.map((letra) => (
            <button className={verOpcion}
              key={letra}
              onClick={() => chequearLetra(letra)}>
              {letra}
            </button>
          ))
        }
      </div>
      <div className='botones-page-game'>
        <a href="/"><button>Home</button></a>
        <a href="/Jugar"><button>Reiniciar</button></a>
      </div>
    </section>
  )
}
function play(sonido) {
  new Audio(sonido).play();
}
export default Juego;
