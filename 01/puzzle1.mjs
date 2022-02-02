import { windows } from "./puzzle2.mjs";
import { input } from "./input.mjs";

const depth = (measurements) => {
    let total = 0;
    for (let i = 1; i < measurements.length; i++) {
        if (measurements[i] > measurements[i - 1]) {
            total++;
        } 
    }
    return total;
}

console.log(depth(windows(input)));