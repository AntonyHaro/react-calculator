import { useState } from "react";
import Botao from "./components/Botao";

function App() {
    const [display, setDisplay] = useState("");

    const adicionar = (value) => {
        setDisplay((prev) => prev + value); //o parametro prev é uma convenção de prévia, ele pega o estado anterior da variavel
    };

    const calcular = () => {
        try {
            setDisplay(eval(display).toString());
        } catch (error) {
            setDisplay("Erro");
        }
    };

    const limpar = () => {
        setDisplay("");
    };

    return (
        <div className="container">
            <input type="text" value={display} readOnly />
            <div className="buttons-grid">
                <Botao valor="1" onClick={adicionar} />
                <Botao valor="2" onClick={adicionar} />
                <Botao valor="3" onClick={adicionar} />
                <Botao valor="/" onClick={adicionar} operador={true}/>
                <Botao valor="4" onClick={adicionar} />
                <Botao valor="5" onClick={adicionar} />
                <Botao valor="6" onClick={adicionar} />
                <Botao valor="*" onClick={adicionar} operador={true} />
                <Botao valor="7" onClick={adicionar} />
                <Botao valor="8" onClick={adicionar} />
                <Botao valor="9" onClick={adicionar} />
                <Botao valor="-" onClick={adicionar} operador={true} />
                <Botao valor="c" onClick={limpar} />
                <Botao valor="0" onClick={adicionar} />
                <Botao valor="." onClick={adicionar} />
                <Botao valor="+" onClick={adicionar} operador={true} />
                <Botao valor="=" onClick={calcular} />
            </div>
        </div>
    );
}

export default App;
