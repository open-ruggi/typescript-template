"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fizzbuzz = void 0;
let mod = (number, mod) => {
    return (number % mod == 0);
};
let fizzbuzz = (number) => {
    if (number == 0)
        return number;
    if (mod(number, 3) && mod(number, 5))
        return "fizzbuzz";
    if (mod(number, 3))
        return "fizz";
    if (mod(number, 5))
        return "buzz";
    return number;
};
exports.fizzbuzz = fizzbuzz;
for (let i = 0; i <= 20; i++) {
    console.log(exports.fizzbuzz(i));
}
//# sourceMappingURL=index.js.map