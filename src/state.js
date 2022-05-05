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
    print() {
        return this[this.layout][this.register];
    }
    english = {
        lower: [
            "`",
            "1",
            "Shift"
        ],
        upper: [
            "~",
            "!",
            "Shift"
        ]
    };
    russian = {
        lower: [
            "ё",
            "1",
            "Shift"
        ],
        upper: [
            "Ё",
            "!",
            "Shift"
        ]
    };
}