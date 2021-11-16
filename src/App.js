import './App.css';
import Me from './images/Moi.png'
import Typewriter from 'typewriter-effect';
import Card from "./Card";
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Toolbar';

const header = (
    <AppBar position={"fixed"} color={"transparent"}>
        <Toolbar sx={{flexWrap: 'wrap'}}>
            <Typography variant="h6" noWrap sx={{flexGrow: 1, color:"#dcb547", fontSize:"x-large"}}>
                Thomas GRAVY's portfolio
            </Typography>
            <nav>
                <Link
                    variant="button"
                    underline={"none"}
                    href="#"
                    sx={{my: 1, mx: 1.5, color: "#dcb547", fontSize:"large"}}
                >
                    Formation
                </Link>
                <Link
                    variant="button"
                    underline={"none"}
                    href="#"
                    sx={{my: 1, mx: 1.5, color: "#dcb547", fontSize:"large"}}
                >
                    Projets
                </Link>
                <Link
                    variant="button"
                    underline={"none"}
                    href="#"
                    sx={{my: 1, mx: 1.5, color: "#dcb547", fontSize:"large"}}
                >
                    Experiences
                </Link>
            </nav>
        </Toolbar>
    </AppBar>
)

const App = (
    <div className={"General"}>
        <div className={"header"}>{header}</div>
        <div className={"img"}>
            <img src={Me} alt="My pic"/>
        </div>
        <div className={"hello"}>
            <h1>
                <Typewriter options={{
                    cursor: "_",
                    delay: 75,
                    strings: "Hello, I'm Thomas",
                    autoStart: true,
                    autoStop: true
                }}
                />
            </h1>
            <p>
                <Typewriter options={{
                    cursor: "_",
                    loop: true,
                    deleteSpeed: 50,
                    delay: 125,
                    strings: ["Junior dev web", "Junior dev React", "Junior dev C/C++/C#", "Junior dev Java", "Junior dev Unity/UE5", "Junior dev Xamarin"],
                    autoStart: true,
                }}
                />
            </p>
        </div>
        <div className={"allCards"}>
            <div className={"cards"}>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    </div>
)

export default function MyPortfolio(){
    return (
        <div className={"MyPortfolio"}>
            {App}
        </div>
    );
}
