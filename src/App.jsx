import { useState } from "react";
import Botao from "./components/Botao";

function App() {
    const [display, setDisplay] = useState("");

    const adicionar = (valor, isOperador) => {
        if (isOperador && display == "") {
            return;
        }

        tocarSom();
        setDisplay((prev) => prev + valor);
    };

    const calcular = () => {
        tocarSom();
        try {
            setDisplay(eval(display).toString());
        } catch (error) {
            setDisplay("Error");
        }
    };

    const limpar = () => {
        tocarSom();
        setDisplay("");
    };

    const tocarSom = () => {
        const audio = new Audio("/sounds/clicar.mp3");
        audio.volume = "0.2";
        audio.play();
    };

    return (
        <div className="calculadora">
            <input type="text" value={display} readOnly />
            <div className="buttons-grid">
                <Botao valor="1" onClick={adicionar} />
                <Botao valor="2" onClick={adicionar} />
                <Botao valor="3" onClick={adicionar} />
                <Botao valor="/" onClick={adicionar} operador={true} />
                <Botao valor="4" onClick={adicionar} />
                <Botao valor="5" onClick={adicionar} />
                <Botao valor="6" onClick={adicionar} />
                <Botao valor="*" onClick={adicionar} operador={true} />
                <Botao valor="7" onClick={adicionar} />
                <Botao valor="8" onClick={adicionar} />
                <Botao valor="9" onClick={adicionar} />
                <Botao valor="-" onClick={adicionar} operador={true} />
                <Botao valor="C" onClick={limpar} />
                <Botao valor="0" onClick={adicionar} />
                <Botao valor="." onClick={adicionar} />
                <Botao valor="+" onClick={adicionar} operador={true} />
                <Botao valor="=" onClick={calcular} />
            </div>
        </div>
    );
}

export default App;
