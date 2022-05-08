import keyboard from "./keyboard";

export default function typing(state) {   
    const textArea = document.querySelector(".textarea");
    const keyboardContainer = document.querySelector(".keyboard-container");
    keyboardContainer.addEventListener("click", (e) => {
        const ctrl = document.querySelector("[data-type=Ctrl]");

        if (e.target.getAttribute("data-type")) { 
            const char = e.target.getAttribute("data-type");
            if (char.length === 1 && char !== "◄" && char !== "►" && char !== "▲" && char !== "▼") {
                textArea.setRangeText(char, textArea.selectionStart, textArea.selectionEnd, "end");
                ctrl.classList.remove("active");
                const caps = document.querySelector("[data-type=Caps]");
                if (state.isCapsLock) caps.classList.add("active");
                
                if (state.shiftPressed === true) {
                    state.shiftPressed = !state.shiftPressed;
                    let register = state.getRegister() === "lower" ? "upper" : "lower";
                    state.setRegister(register);
                    keyboardContainer.innerHTML = "";
                    keyboardContainer.appendChild(keyboard(state));
                    const caps = document.querySelector("[data-type=Caps]");
                    if (state.isCapsLock) caps.classList.add("active");
                    const shift = document.querySelector("[data-type=Shift]");
                    shift.classList.remove("active");
                }
            } else if (char === "Ctrl") {
                state.ctrlPressed = true;
                e.target.classList.toggle("active");
            } else if (char === "Alt") {
                if (state.ctrlPressed === true) {
                    let layout = state.getLayout() === "english" ? "russian" : "english";
                    state.setLayout(layout);
                    localStorage.setItem("layout", layout);
                    keyboardContainer.innerHTML = "";
                    keyboardContainer.appendChild(keyboard(state, state.isCapsLock));
                    state.ctrlPressed = false;
                    const caps = document.querySelector("[data-type=Caps]");
                    if (state.isCapsLock) caps.classList.add("active");
                }
            } else if (char === "Shift") {
                let register = state.getRegister() === "lower" ? "upper" : "lower";
                state.setRegister(register);
                keyboardContainer.innerHTML = "";
                keyboardContainer.appendChild(keyboard(state, state.isCapsLock));
                const shift = document.querySelectorAll("[data-type=Shift]");
                state.shiftPressed = !state.shiftPressed;
                const caps = document.querySelector("[data-type=Caps]");
                if (state.isCapsLock) caps.classList.add("active");
                if (state.shiftPressed) (shift.forEach(item => item.classList.add("active")));
                else shift.forEach(item => item.classList.remove("active"));
            } else if (char === "Caps") {
                state.isCapsLock = !state.isCapsLock;
                keyboardContainer.innerHTML = "";
                keyboardContainer.appendChild(keyboard(state, state.isCapsLock));
                const caps = document.querySelector("[data-type=Caps]");
                if (state.isCapsLock) caps.classList.add("active");
                else caps.classList.remove("active");
            } else if (char === "Tab") {
                textArea.setRangeText("\t", textArea.selectionStart, textArea.selectionEnd, "end");
                ctrl.classList.remove("active");
            } else if (char === "Backspace") {
                textArea.setRangeText("", textArea.selectionStart - 1, textArea.selectionEnd, "end");
                ctrl.classList.remove("active");
            } else if (char === "Del") {
                textArea.setRangeText("", textArea.selectionStart, textArea.selectionEnd + 1, "end");
                ctrl.classList.remove("active");
            } else if (char === "Backslash") {
                textArea.setRangeText("\u005C", textArea.selectionStart, textArea.selectionEnd, "end");
                ctrl.classList.remove("active");
            } else if (char === "Quote") {
                textArea.setRangeText('"', textArea.selectionStart, textArea.selectionEnd, "end");
                ctrl.classList.remove("active");
            } else if (char === "Whitespace") {
                textArea.setRangeText(" ", textArea.selectionStart, textArea.selectionEnd, "end");
                ctrl.classList.remove("active");
            } else if (char === "Enter") {
                textArea.setRangeText("\n", textArea.selectionStart, textArea.selectionEnd, "end");
                ctrl.classList.remove("active");        
            } else if (char === "◄") {
                textArea.setRangeText("", textArea.selectionStart-1, textArea.selectionEnd-1, "end");
                ctrl.classList.remove("active");        
            } else if (char === "►") {
                textArea.setRangeText("", textArea.selectionStart+1, textArea.selectionEnd+1, "end");
                ctrl.classList.remove("active");      
            } else if (char === "▲") {
                let value = textArea.value;
                let pos = textArea.selectionStart;
                let posFromStrBegin;
                let nextPosition;
                for (let i = pos - 1; i >= 0; i--) {
                    if (posFromStrBegin === undefined && value[i] === "\n") {
                        posFromStrBegin = i;
                    }else  if (nextPosition === undefined && (value[i] === "\n" || i === 0)) {
                        nextPosition = i === 0 ? -1 : i;
                    }
                }
                posFromStrBegin = posFromStrBegin ?? 0;
                nextPosition = nextPosition ?? 0;          
                let newPosition = nextPosition + (pos - posFromStrBegin);
                newPosition = newPosition >= posFromStrBegin ? posFromStrBegin  : newPosition;
                textArea.setRangeText("", newPosition, newPosition, "end");
                ctrl.classList.remove("active");      
            } else if (char === "▼") {
                let value = textArea.value;
                let pos = textArea.selectionStart;
                let posFromStrBegin;
                let nextPosition = value.indexOf("\n", pos);
                for (let i = pos - 1; i >= 0; i--) {
                    if (posFromStrBegin === undefined && (value[i] === "\n" || i === 0)) {
                        posFromStrBegin = i === 0 ? -1 : i;
                    }
                }
                posFromStrBegin = posFromStrBegin ?? -1;          
                let newPosition = nextPosition >= 0 ? nextPosition + (pos - posFromStrBegin) : value.length;
                newPosition = newPosition >= value.length ? value.length : newPosition;
                textArea.setRangeText("", newPosition, newPosition, "end");
                ctrl.classList.remove("active");      
            }
            textArea.focus();
        }
    });
}