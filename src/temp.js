const englishLowLayout = "` 1 2 3 4 5 6 7 8 9 0 - = Backspace Tab q w e r t y u i o p [ ] u005C Caps a s d f g h j k l ; ' Enter Shift z x c v b n m , . / ▲ Shift Ctrl Win Alt Whitespace Alt ◄ ▼ ►";
function stringToArr(str) {
    const arr = str.split(" ");
    return arr;
}
console.log(stringToArr(englishLowLayout));