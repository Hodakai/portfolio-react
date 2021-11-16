import './Card.css';
import * as React from "react";
import Button from "@mui/material/Button";
import {useState} from "react";

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
                <Button className={"btn"} variant="contained">
                    Know more
                </Button>
            </div>
        </div>
    );
}

export default Card;