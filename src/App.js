import './App.css';
import Me from './images/Moi.png'
import Typewriter from 'typewriter-effect';
import Card from "./Card";

function App() {
    return (
        <div className={"General"}>
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
    );
}

export default App;
