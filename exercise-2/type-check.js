function type_check_v1(variable, type) {
    switch (typeof variable) {
        case "symbol":
        case "number":
        case "string":
        case "boolean":
        case "undefined":
        case "function":
            return type === typeof variable;
        case "object":
            switch (type) {
                case "null":
                    return variable === null;
                case "array":
                    return Array.isArray(variable);
                default:
                    return variable !== null && !Array.isArray(variable);
            }
    }
}

console.log(type_check_v1(13, "string") === true);
console.log(type_check_v1('qlq chose', "string") === true);
console.log(type_check_v1({}, "string") === true);
console.log(type_check_v1(undefined, "undefined") === true);
