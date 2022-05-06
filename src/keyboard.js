export default function keyboard(state, isCapsLock) {  
    function render() {        
        const element = document.createElement("div");
        element.classList.add("keyboard");
        state.print().map((item) => {
            const button = document.createElement("button");
            button.classList.add("btn");
            if (isCapsLock && item.length === 1 && /[a-z]|[а-яё]/.test(item)) {
                item = item.toUpperCase();
            } else if (isCapsLock && item.length === 1 && /[A-Z]|[А-ЯЁ]/.test(item)) {
                item = item.toLowerCase();
            }
            button.innerText = item;
            button.setAttribute("data-type", item);
            button.classList.add(item);
            button.addEventListener("mousedown", () => {
                button.classList.add("clicked");
            });
            button.addEventListener("mouseup", () => {
                button.classList.remove("clicked");
            });
            button.addEventListener("mouseout", () => {
                button.classList.remove("clicked");
            });
            element.appendChild(button);
        });
        return element;
    }
    return render();    
}