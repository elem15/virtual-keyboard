export default class {
    constructor() {
        this.layout = "english";
        this.register = "lower";
    }
    setLayout(layout) {
        this.layout = layout;
    }
    setRegister(register) {
        this.register = register;
    }
    getLayout() {
        return this.layout;
    }
    getRegister(register) {
        return this.register;
    }
    print() {
        return this[this.layout][this.register];
    }
    english = {
        lower: [
            "`",
            "1",
            "q",
            "Caps",
            "Shift", 
            "Ctrl",
            "Alt",
        ],
        upper: [
            "~",
            "!",
            "Q",
            "Caps",
            "Shift", 
            "Ctrl",
            "Alt",
        ]
    };
    russian = {
        lower: [
            "ё",
            "ц",
            "1",
            "Caps",
            "Shift", 
            "Ctrl",
            "Alt",
        ],
        upper: [
            "Ё",
            "Ц",
            "!",
            "Caps",
            "Shift", 
            "Ctrl",
            "Alt",
        ]
    };
}