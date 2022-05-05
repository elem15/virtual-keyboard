export default function keyboard(state) {  
    function render(state) {        
        const element = document.createElement("div");
        element.classList.add("keyboard");
        state.print().map((item) => {
            const button = document.createElement("button");
            button.classList.add("btn");
            button.innerText = item;
            button.setAttribute("data-type", item) ;
            element.appendChild(button);
        });
        return element;
    }
    return render(state);    
}