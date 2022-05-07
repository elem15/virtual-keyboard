import keyboard from "./keyboard";
export default function (state) {
    const textArea = document.querySelector(".textarea");
    const keyboardContainer = document.querySelector(".keyboard-container")
    document.addEventListener("keydown", (e) => {
        console.log(e.code);
        if (e.code === "CapsLock") {
            state.isCapsLock = !state.isCapsLock;
                keyboardContainer.innerHTML = "";                    
                keyboardContainer.appendChild(keyboard(state));
                const caps = document.querySelector("[data-type=Caps]");
                if(state.isCapsLock) caps.classList.add("active");
                else caps.classList.remove("active");
        }            
    });
 
    if (state.getLayout() === "english") {        
        document.addEventListener("keydown", (e) => {
            e.preventDefault();
            if (e.code === "KeyQ") {
                const button = document.querySelector(".q") || document.querySelector(".Q");            
                button.classList.add("clicked");
                const char = button.getAttribute("data-type");
                textArea.setRangeText(char, textArea.selectionStart, textArea.selectionEnd, "end");
            }            
        });
        document.addEventListener("keyup", (e) => {
            if (e.code === "KeyQ") {
                const button = document.querySelector(".q") || document.querySelector(".Q");            
                button.classList.remove("clicked");
            }
        });
    }
}