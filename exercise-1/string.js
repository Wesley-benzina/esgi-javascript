
function prop_access(object, path) {
    if (typeof object!== "object") return "";
        if (typeof path !== "string"  || path === null) return object;
    let result = object;
    for (const element of path.split(".")){
        if(!(element in result)){
            return path + " not exist"

        }
        result = result[element]
    }
    return result;
}

const prairie = {
    animal:{
        type:{
            name:"chien"
        }
    }
};

console.log (prop_access(prairie, "animal.type.name"));
console.log (prop_access(prairie, "animal.gender"));


function ucfirst(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

console.log(ucfirst("hello world"))

function capitalize(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";

    return chaine
        .split(" ")
        .map((word) => ucfirst(word.toLowerCase()))
        .join(" ");
}

console.log(capitalize("helLo wORld"));

function camelCase(chaine) {
    return capitalize(chaine).replace(/\W/g, "");
}

console.log(camelCase("hello world"));

function snake_case(chaine) {
    return chaine.toLowerCase().replace(/(\W)+/g, "-");
}

console.log(snake_case("Hello world"));

function leet(chaine) {
    return chaine.replace(/[AEIOUY]/gi, function (e) {
        switch (e.toLowerCase()) {
            case "a":
                return 4;
            case "e":
                return 3;
            case "i":
                return 1;
            case "o":
                return 0;
            case "u":
                return "(_)";
            case "y":
                return 7;
        }
    });
}

console.log(leet("AnaCOnDA"));

function verlan(chaine) {
    return chaine
        .split(" ")
        .map((word) => {
            return word.split("").reverse().join("");
        })
        .join(" ");
}

console.log(verlan("Hello World"));

function yoda(chaine) {
    return chaine.split(" ").reverse().join(" ");
}

console.log(yoda("hello world"));


function vig(string, code) {
    if (typeof string !== "string") return "";
    if (string.length === 0) return string;

    while (code.length < string.length) {
        code += code;
    }
    code = code.substr(0, string.length);
    let codeIndex = 0;

    return string
        .split("")
        .map((letter, index) => {
            letter = letter.toLowerCase();
            const aCode = "a".charCodeAt(0);
            const letterNumber = letter.charCodeAt(0) - aCode; // [0-25]

            if (letterNumber < 0 || letterNumber > 25) return letter;

            const codeNumber = code.charCodeAt(codeIndex) - aCode; // [0-25]
            codeIndex++;

            return String.fromCharCode(((letterNumber + codeNumber) % 26) + aCode);
        })
        .join("");
}

console.log(vig('wikipedia', 'crypto'));
