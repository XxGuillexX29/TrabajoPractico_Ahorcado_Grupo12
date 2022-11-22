import React from "react"

function ClaseColaboradores(props){
    return(
        <>
        <h1>{props.Nombre}</h1>
                 <p class="Edad"> {props.Edad}</p>
                <a href="#">
                <img class="ImagenColaborador" src={props.img} alt="Vista Previa" /></a>
                <h3 class="Descripcion">Descripcion</h3>
                <p class="Parrafo"> {props.Descripcion}</p>
        </>
    )
}


export default ClaseColaboradores;