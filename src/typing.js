import keyboard from "./keyboard";

export default function typing(state) {
    const localState = {
        shiftPressed: false,
        ctrlPressed: false,
        capsLockPressed: false,
    };
    const textArea = document.querySelector(".textarea");
    textArea.value = "123";
    const keyboardContainer = document.querySelector(".keyboardContainer");
    keyboardContainer.addEventListener("click", (e) => {
        const ctrl = document.querySelector("[data-type=Ctrl]");

        if (e.target.getAttribute("data-type")) { 
            const char = e.target.getAttribute("data-type");
            if (char.length === 1) {
                textArea.setRangeText(char, textArea.selectionStart, textArea.selectionEnd, "end");
                ctrl.classList.remove("active");
                const caps = document.querySelector("[data-type=Caps]");
                if(localState.capsLockPressed) caps.classList.add("active");
                
                if (localState.shiftPressed === true) {                    
                    localState.shiftPressed = !localState.shiftPressed;
                    let register = state.getRegister() === "lower" ? "upper" : "lower";
                    state.setRegister(register);
                    keyboardContainer.innerHTML = "";                    
                    keyboardContainer.appendChild(keyboard(state, localState.capsLockPressed));
                    const caps = document.querySelector("[data-type=Caps]");
                    if(localState.capsLockPressed) caps.classList.add("active");
                    const shift = document.querySelector("[data-type=Shift]");
                    shift.classList.remove("active");
                }
            } else if (char === "Ctrl") {
                localState.ctrlPressed = true;
                e.target.classList.toggle("active");
            } else if (char === "Alt") {
                if (localState.ctrlPressed === true) {
                    let layout = state.getLayout() === "english" ? "russian" : "english";
                    state.setLayout(layout);
                    keyboardContainer.innerHTML = "";                    
                    keyboardContainer.appendChild(keyboard(state, localState.capsLockPressed));
                    localState.ctrlPressed = false;
                    const caps = document.querySelector("[data-type=Caps]");
                    if(localState.capsLockPressed) caps.classList.add("active");
                }
            } else if (char === "Shift") {
                let register = state.getRegister() === "lower" ? "upper" : "lower";
                state.setRegister(register);
                keyboardContainer.innerHTML = "";       
                keyboardContainer.appendChild(keyboard(state, localState.capsLockPressed));
                const shift = document.querySelector("[data-type=Shift]");
                localState.shiftPressed = !localState.shiftPressed;
                const caps = document.querySelector("[data-type=Caps]");
                if(localState.capsLockPressed) caps.classList.add("active");
                if(localState.shiftPressed) shift.classList.add("active");
                else shift.classList.remove("active");
            } else if (char === "Caps") {
                localState.capsLockPressed = !localState.capsLockPressed;
                keyboardContainer.innerHTML = "";                    
                keyboardContainer.appendChild(keyboard(state, localState.capsLockPressed));
                const caps = document.querySelector("[data-type=Caps]");
                if(localState.capsLockPressed) caps.classList.add("active");
                else caps.classList.remove("active");
            }

            textArea.focus();
        }
    });
}