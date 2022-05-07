export default class {
    constructor() {
        this.layout = "english";
        this.register = "lower";
        this.isCapsLock = false;
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
    getRegister() {
        return this.register;
    }
    print() {
        return this[this.layout][this.register];
    }
    english = {
        lower: [
            "`", "1", "2", "3",
            "4", "5", "6", "7",
            "8", "9", "0", "-",
            "=", "Backspace", "Tab", "q",
            "w", "e", "r", "t",
            "y", "u", "i", "o",
            "p", "[", "]", "\u005C",
            "Del",
            "Caps", "a", "s", "d",
            "f", "g", "h", "j",
            "k", "l", ";", "'",
            "Enter", "Shift", "z", "x",
            "c", "v", "b", "n",
            "m", ",", ".", "/",
            "▲", "Shift", "Ctrl", "Win",
            "Alt", "Whitespace", "Alt", "◄",
            "▼", "►", "Ctrl"
        ],
        upper: [
            "~", "!", "@", "#",
            "$", "%", "^", "&",
            "*", "(", ")", "_",
            "+", "Backspace", "Tab", "Q",
            "W", "E", "R", "T",
            "Y", "U", "I", "O",
            "P", "{", "}", "|",
            "Del", "Caps", "A", "S",
            "D", "F", "G", "H",
            "J", "K", "L", ";",
            '"', "Enter", "Shift", "Z",
            "X", "C", "V", "B",
            "N", "M", "<", ">",
            "?", "▲", "Shift", "Ctrl",
            "Win", "Alt", "Whitespace", "Alt",
            "◄", "▼", "►", "Ctrl"
        ]
    };
    russian = {
        lower: [
            "ё", "1", "2", "3",
            "4", "5", "6", "7",
            "8", "9", "0", "-",
            "=", "Backspace", "Tab", "й",
            "ц", "у", "к", "е",
            "н", "г", "ш", "щ",
            "з", "х", "ъ", "\u005C",
            "Del", "Caps", "ф", "ы",
            "в", "а", "п", "р",
            "о", "л", "д", "ж",
            "э", "Enter", "Shift", "я",
            "ч", "с", "м", "и",
            "т", "ь", "б", "ю",
            ".", "▲", "Shift", "Ctrl",
            "Win", "Alt", "Whitespace", "Alt",
            "◄", "▼", "►", "Ctrl"
        ],
        upper: [
            "Ё", "!", '"', "№",
            ";", "%", ":", "?",
            "*", "(", ")", "_",
            "+", "Backspace", "Tab", "Й",
            "Ц", "У", "К", "Е",
            "Н", "Г", "Ш", "Щ",
            "З", "Х", "Ъ", "/",
            "Del", "Caps", "Ф", "Ы",
            "В", "А", "П", "Р",
            "О", "Л", "Д", "Ж",
            "Э", "Enter", "Shift", "Я",
            "Ч", "С", "М", "И",
            "Т", "Ь", "Б", "Ю",
            ",", "▲", "Shift", "Ctrl",
            "Win", "Alt", "Whitespace", "Alt",
            "◄", "▼", "►", "Ctrl"
        ]
    };
}