import { useState } from "react";
import Botao from "./components/Botao";

function App() {
    const [display, setDisplay] = useState("");

    const tocarSom = () => {
        const audio = new Audio("/sounds/clicar.mp3");
        audio.volume = "0.2";
        audio.play();
    };

    const adicionar = (valor, isOperador) => {
        if (display == "Error" || (isOperador && display == "")) return;

        tocarSom();
        setDisplay((d) => d + valor);
    };

    const excluir = () => {
        tocarSom();
        setDisplay((d) => d.slice(0, -1));
    };

    const calcular = () => {
        if (display == "" || display == "Error") return;

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

    return (
        <div className="calculadora">
            <input type="text" value={display} readOnly />
            <div className="buttons-grid">
                <Botao valor="C" onClick={limpar} isEspecial={true} />
                <Botao valor="del" onClick={excluir} />
                <Botao valor="/" onClick={adicionar} isOperador={true} />
                <Botao valor="1" onClick={adicionar} />
                <Botao valor="2" onClick={adicionar} />
                <Botao valor="3" onClick={adicionar} />
                <Botao valor="+" onClick={adicionar} isOperador={true} />
                <Botao valor="4" onClick={adicionar} />
                <Botao valor="5" onClick={adicionar} />
                <Botao valor="6" onClick={adicionar} />
                <Botao valor="-" onClick={adicionar} isOperador={true} />
                <Botao valor="7" onClick={adicionar} />
                <Botao valor="8" onClick={adicionar} />
                <Botao valor="9" onClick={adicionar} />
                <Botao valor="*" onClick={adicionar} isOperador={true} />
                <Botao valor="." onClick={adicionar} />
                <Botao valor="0" onClick={adicionar} />
                <Botao valor="=" onClick={calcular} isEspecial={true} />
            </div>
        </div>
    );
}

export default App;
