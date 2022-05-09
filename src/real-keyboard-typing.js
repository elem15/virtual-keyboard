import keyboard from "./keyboard-render";
import keyList from "./data/key-list";

export default function (state) {
    const textArea = document.querySelector(".textarea");
    const keyboardContainer = document.querySelector(".keyboard-container");
    document.addEventListener("keydown", (e) => {
        const key = keyList[e.code];
        if (e.code === "CapsLock") {
            e.preventDefault();
            state.isCapsLock = !state.isCapsLock;
            keyboardContainer.innerHTML = "";
            keyboardContainer.appendChild(keyboard(state));
            const caps = document.querySelector("[data-type=Caps]");
            if (state.isCapsLock) caps.classList.add("active");
            else caps.classList.remove("active");
        } else if (e.code === "Backspace"
            || e.code === "Delete"
            || e.code === "Enter"
            || e.code === "ArrowUp"
            || e.code === "ArrowDown"
            || e.code === "ArrowLeft"
            || e.code === "ArrowRight"
            || e.code === "AltLeft"
            || e.code === "ControlLeft"
            || e.code === "Space"
        ) {
            const button = document.querySelector("." + key);
            button.classList.add("clicked");
        } else if (e.code === "AltRight") {
            const button = document.querySelectorAll("." + key)[1];
            button.classList.add("clicked");
        } else if (e.code === "ControlRight") {
            const button = document.querySelectorAll("." + key)[1];
            button.classList.add("clicked");
        } else if (e.code === "MetaLeft") {
            e.preventDefault();
            const button = document.querySelector(".Win");
            button.classList.add("clicked");
        } else if (e.code === "Tab") {
            e.preventDefault();
            const button = document.querySelector("." + key);
            button.classList.add("clicked");
            textArea.setRangeText("\t", textArea.selectionStart, textArea.selectionEnd, "end");
        } else if (e.code === "Backslash" && state.register === "lower") {
            e.preventDefault();
            const button = document.querySelector("[data-type=Backslash]");
            button.classList.add("clicked");
            textArea.setRangeText("\u005C", textArea.selectionStart, textArea.selectionEnd, "end");
        } else if (e.code === "Quote" && state.register === "upper" && state.layout === "english") {
            e.preventDefault();
            const button = document.querySelector("[data-type=Quote]");
            button.classList.add("clicked");
            textArea.setRangeText('"', textArea.selectionStart, textArea.selectionEnd, "end");
        } else if (e.code === "ShiftLeft" || (e.code !== "ShiftLeft" && e.key === "Shift")) {
            let register = state.getRegister() === "lower" ? "upper" : "lower";
            state.setRegister(register);
            keyboardContainer.innerHTML = "";
            keyboardContainer.appendChild(keyboard(state));
            const shift = document.querySelectorAll("[data-type=Shift]");
            state.shiftPressed = !state.shiftPressed;
            const caps = document.querySelector("[data-type=Caps]");
            if (state.isCapsLock) caps.classList.add("active");
            if (e.code === "ShiftLeft") {
                if (state.shiftPressed) shift[0].classList.add("active");
                else {
                    shift[0].classList.remove("active");
                    shift[1].classList.remove("active");
                }
            } else {
                if (state.shiftPressed) shift[1].classList.add("active");
                else {
                    shift[0].classList.remove("active");
                    shift[1].classList.remove("active");
                }
            }
        } else if (Object.keys(keyList).includes(e.code)) {
            e.preventDefault();
            const button = document.querySelector(`[data-type="${key[0]}"]`)
                ?? document.querySelector(`[data-type="${key[1]}"]`)
                ?? document.querySelector(`[data-type="${key[2]}"]`)
                ?? document.querySelector(`[data-type="${key[3]}"]`);
            button.classList.add("clicked");
            let char = button.getAttribute("data-type");
            if (e.code === "Slash" && state.layout === "russian" && state.register === "upper") {
                char = ",";
            }
            textArea.setRangeText(char, textArea.selectionStart, textArea.selectionEnd, "end");
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
        }
        textArea.focus();
    });
    document.addEventListener("keyup", (e) => {
        const key = keyList[e.code];
        if (e.code === "AltRight") {
            const button = document.querySelectorAll("." + key)[1];
            button.classList.remove("clicked");
        }
        if (e.code === "ControlRight") {
            const button = document.querySelectorAll("." + key)[1];
            button.classList.remove("clicked");
        }
        if (Object.keys(keyList).includes(e.code)) {
            e.preventDefault();
            const button = document.querySelector(`[data-type="${key[0]}"]`)
                ?? document.querySelector(`[data-type="${key[1]}"]`)
                ?? document.querySelector(`[data-type="${key[2]}"]`)
                ?? document.querySelector(`[data-type="${key[3]}"]`);
            button.classList.remove("clicked");
        }
        textArea.focus();
    });
    let pressed = new Set();
    function switchLayout() {
        const codes = ["ControlLeft", "AltLeft"];
        document.addEventListener("keydown", (e) => {
            pressed.add(e.code);
            for (let code of codes) {
                if (!pressed.has(code)) return;
            }
            let layout = state.getLayout() === "english" ? "russian" : "english";
            state.setLayout(layout);
            localStorage.setItem("layout", layout);
            keyboardContainer.innerHTML = "";
            keyboardContainer.appendChild(keyboard(state));
            if (pressed.has("AltLeft")) {
                const button = document.querySelector(".Alt");
                button.classList.add("active");
            }
            if (pressed.has("ControlLeft")) {
                const button = document.querySelector(".Ctrl");
                button.classList.add("active");
            }
            state.ctrlPressed = false;
            const caps = document.querySelector("[data-type=Caps]");
            if (state.isCapsLock) caps.classList.add("active");
            pressed.clear();
        });
        document.addEventListener("keyup", function (event) {
            pressed.delete(event.code);
            const alt = document.querySelector(".Alt");
            const ctrl = document.querySelector(".Ctrl");
            alt.classList.remove("active");
            ctrl.classList.remove("active");
        });
        textArea.focus();
    }
    switchLayout();
    textArea.focus();
}
