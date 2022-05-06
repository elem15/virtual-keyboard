export default class {
    constructor() {
        this.layout = "english";
        this.register = "lower";
        this.englishLowLayout = "' 1 2 3 4 5 6 7 8 9 0 - = Backspace Tab q w e r t y u i o p [ ] / Caps a s d f g h j k l ;  Enter Shift z x c v b n m , . / ▲ Shift Ctrl Win Alt Whitespace Alt ◄ ▼ ►";
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
    stringToArr(str) {
        const arr = str.split(" ");
        return arr;
    }
    print() {
        return this[this.layout][this.register];
    }
    english = {
        lower: ['`',     '1',          '2',    '3',
        '4',     '5',          '6',    '7',
        '8',     '9',          '0',    '-',
        '=',     'Backspace',  'Tab',  'q',
        'w',     'e',          'r',    't',
        'y',     'u',          'i',    'o',
            'p', '[', ']', '\u005C',
        'Del',
        'Caps',  'a',          's',    'd',
        'f',     'g',          'h',    'j',
        'k',     'l',          ';',    "'",
        'Enter', 'Shift',      'z',    'x',
        'c',     'v',          'b',    'n',
        'm',     ',',          '.',    '/',
        '▲',     'Shift',      'Ctrl', 'Win',
        'Alt',   'Whitespace', 'Alt',  '◄',
        '▼',     '►', 'Ctrl'],
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