import State from "./state";
import keyboard from "./keyboard";
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
function typing(state) {
    const textArea = document.querySelector(".textarea");
    textArea.value = "123";
    const keyboardContainer = document.querySelector(".keyboardContainer");
    keyboardContainer.addEventListener("click", (e) => {
        const char = e.target.getAttribute("data-type");
        textArea.value = textArea.value + char;
    });
}
typing(state);
