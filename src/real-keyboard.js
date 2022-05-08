import keyboard from "./keyboard";
const keyList = {
    Backquote: ["`", "~", "ё", "Ё"],
    Digit1: ["1", "!", "1", "!"],
    Digit2: ["2", "@", "2", '"'],
    Digit3: ["3", "#", "3", "№"],
    Digit4: ["4", "$", "4", ";"],
    Digit5: ["5", "%", "5", "%"],
    Digit6: ["6", "^", "6", ":"],
    Digit7: ["7", "&", "7", "&"],
    Digit8: ["8", "*", "8", "*"],
    Digit9: ["9", "(", "9", "("],
    Digit0: ["0", ")", "0", ")"],
    Minus: ["-", "_", "-", "_"],
    Equal: ["=", "+", "=", "+"],
    Backspace: ["Backspace", "Backspace", "Backspace", "Backspace"],
    Tab: ["Tab", "Tab", "Tab", "Tab"],
    KeyQ: ["q", "Q", "й", "Й"],
    KeyW: ["w", "W", "ц", "Ц"],
    KeyE: ["e", "E", "у", "У"],
    KeyR: ["r", "R", "к", "К"],
    KeyT: ["t", "T", "е", "Е"],
    KeyY: ["y", "Y", "н", "Н"],
    KeyU: ["u", "U", "г", "Г"],
    KeyI: ["i", "I", "ш", "Ш"],
    KeyO: ["o", "O", "щ", "Щ"],
    KeyP: ["p", "P", "з", "З"],
    BracketLeft: ["[", "{", "х", "Х"],
    BracketRight: ["]", "}", "ъ", "Ъ"],
    Backslash: ["Backslash", "|", "Backslash", "/"],
    Delete: ["Del", "Del", "Del", "Del"],
    CapsLock: ["Caps", "Caps", "Caps", "Caps"],
    KeyA: ["a", "A", "ф", "Ф"],
    KeyS: ["s", "S", "ы", "Ы"],
    KeyD: ["d", "D", "в", "В"],
    KeyF: ["f", "F", "а", "А"],
    KeyG: ["g", "G", "п", "П"],
    KeyH: ["h", "H", "р", "Р"],
    KeyJ: ["j", "J", "о", "О"],
    KeyK: ["k", "K", "л", "Л"],
    KeyL: ["l", "L", "д", "Д"],
    Semicolon: [";", ":", "ж", "Ж"],
    Quote: ["'", "Quote", "э", "Э"],
    Enter: ["Enter", "Enter", "Enter", "Enter"],
    Shift: ["Shift", "Shift", "Shift", "Shift"],
    KeyZ: ["z", "Z", "я", "Я"],
    KeyX: ["x", "X", "ч", "Ч"],
    KeyC: ["c", "C", "с", "С"],
    KeyV: ["v", "V", "м", "М"],
    KeyB: ["b", "B", "и", "И"],
    KeyN: ["n", "N", "т", "Т"],
    KeyM: ["m", "M", "ь", "Ь"],
    Comma: [",", "<", "б", "Б"],
    Period: [".", ">", "ю", "Ю"],
    ArrowUp: ["▲", "▲", "▲", "▲",],
    ArrowLeft: ["◄", "◄", "◄", "◄",],
    ArrowDown: ["▼", "▼", "▼", "▼",],
    ArrowRight: ["►", "►", "►", "►",],
};

export default function (state) {   
    const textArea = document.querySelector(".textarea");
    const keyboardContainer = document.querySelector(".keyboard-container");
    document.addEventListener("keydown", (e) => {
        console.log(e.code);

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
        ) {
            const button = document.querySelector("." + key);
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
        } else if (e.key === "Shift") {
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
        } else if (Object.keys(keyList).includes(e.code)) {
            e.preventDefault();
            const button = document.querySelector(`[data-type="${key[0]}"]`)
                ?? document.querySelector(`[data-type="${key[1]}"]`)
                ?? document.querySelector(`[data-type="${key[2]}"]`)
                ?? document.querySelector(`[data-type="${key[3]}"]`);
            button.classList.add("clicked");
            const char = button.getAttribute("data-type");
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
    });
    document.addEventListener("keyup", (e) => {
        const key = keyList[e.code];
        if (Object.keys(keyList).includes(e.code)) {
            e.preventDefault();
            const button = document.querySelector(`[data-type="${key[0]}"]`)
                ?? document.querySelector(`[data-type="${key[1]}"]`)
                ?? document.querySelector(`[data-type="${key[2]}"]`)
                ?? document.querySelector(`[data-type="${key[3]}"]`);
            button.classList.remove("clicked");
        }
    });
    textArea.focus();
}
     