var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function getShippingCost(country) {
    switch (country) {
        case "VN":
            return 10000;
        case "US":
            return 20000;
        case "UK":
            return 30000;
        default:
            throw new Error("Invalid country");
    }
}
// #2
var tuple = [42, "Hello", true];
var _a = __spreadArray([], tuple, true), number = _a[0], string = _a[1], boolean = _a[2];
function isSuccess(status) {
    return status === "success";
}
// #5
var person = ["abc", 1234];
var abc = [11.5, -11.5];
function priceTotal(item) {
    var name = item[0], price = item[1], quantity = item[2];
    return price * quantity;
}
// #10
var student = ["a", 1, 1];
function descBill(bill) {
    var billNumber = bill[0], creationDate = bill[1], totalAmount = bill[2];
    return "h\u00F3a \u0111\u01A1n ".concat(billNumber, " t\u1EA1o ng\u00E0y ").concat(creationDate, " t\u1ED5ng ti\u1EC1n l\u00E0 ").concat(totalAmount);
}
// #1
function parseInput(input) {
    switch (input) {
        case "number":
            return 1;
        case "boolean":
            return true;
        case "string":
            return "string";
        case "null":
            return null;
        case "undefined":
            return undefined;
        default:
            return undefined;
    }
}
function validatePerson(obj) {
    if (typeof obj === "object" &&
        obj !== null &&
        "name" in obj &&
        typeof obj.name === "string" &&
        "age" in obj &&
        typeof obj.age === "number" &&
        "address" in obj &&
        typeof obj.address === "object") {
        return true;
    }
    return false;
}
function calculateArea(shape) {
    if (shape.shape === "square") {
        var square = shape;
        return Math.pow(square.sideLength, 2);
    }
    else if (shape.shape === "circle") {
        var circle = shape;
        return Math.PI * Math.pow(circle.radius, 2);
    }
    else {
        return -1;
    }
}
