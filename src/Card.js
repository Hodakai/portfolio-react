import './Card.css';
import React, {useState} from "react";

function Card() {

    const [name, setName] = useState('Thomas');
    const [job, setJob] = useState('Junior dev');
    const [about, setAbout] = useState('Bonjour je suis Thomas cliquez pour voir mon profil !')

    return (
        <div className={"card"}>
            <div className={"upContent"}>
                <img src="" alt="" height={"100px"} width={"100px"}/>
            </div>
            <div className={"content"}>
                <h2> {name} </h2>
                <h3> {job} </h3>
                <p> {about} </p>
                <button>Check profile</button>
            </div>
        </div>
    );
}

export default Card;