import "../index.css";
import "../App.css";
import ClaseColaboradores from "./ClaseColaboradores";
import Listacolaboradores from "./Json/ListaColaboradores.json";
import Row from "react-bootstrap/Row";
import Conteiner  from "react-bootstrap/Container";

function Colaboradores() {
    return (
        <Conteiner>
            <Row>
            {Listacolaboradores.map(listaC=>
            <ClaseColaboradores
            img={listaC.img}Nombre={listaC.Nombre}Descripcion={listaC.Descripcion}Edad={listaC.Edad}></ClaseColaboradores>)}
            </Row>
        </Conteiner>
    );
} export default Colaboradores;