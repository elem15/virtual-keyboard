import State from "./state";
import keyboard from "./keyboard";
import typing from "./typing";
import "./style.css";


const state = new State();

function renderCanvas() {
    const container = document.createElement("div");
    container.className = "container";
    const heading = document.createElement("h1");
    heading.className = "heading";
    heading.innerText = "Virtual keyboard";
    container.appendChild(heading);
    const textArea = document.createElement("textarea");
    textArea.className = "textarea";
    container.appendChild(textArea);
    const keyboardContainer = document.createElement("div");
    keyboardContainer.className = "keyboardContainer";
    keyboardContainer.appendChild(keyboard(state));
    container.appendChild(keyboardContainer);
    const footer = document.createElement("div");
    footer.className = "footer";
    footer.innerText = "Designed for Windows. \n Press Ctrl+Alt to switch language.";
    container.appendChild(footer);

    return container;
}


document.body.appendChild(renderCanvas());

typing(state);
