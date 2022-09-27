import inicio from "./img/Ahorcado.jpg";
import "../index.css";
import "../App.css";
import { Link } from "react-router-dom";



function Home() {
    return (
        <><><><div className="principal">
            <h1>Ahorcado</h1>

        </div>


            <div className="imagen">

                <img src={inicio} alt="Juego" />

            </div></>
            <div className="jugar">
                <Link to="/jugar" className="botonJugar">Jugar</Link>
            </div></>
            <div >
                <Link to="/Colaboradores" className="botonColaboradores">Colaboradores</Link>
            </div></>

    );
}

export default Home;