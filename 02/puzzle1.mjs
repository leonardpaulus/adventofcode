import { input } from "./input.mjs";

const position = (coordinates) => {
  let aim = 0;
  let horizontal = 0;
  let depth = 0;
  for (let i = 0; i < coordinates.length; i++) {
    if (coordinates[i].y) {
      aim = aim + -coordinates[i].y;
    };
    if (coordinates[i].x) {
      horizontal = horizontal + coordinates[i].x;
      depth = depth + (aim * coordinates[i].x);
    }
  }
  return horizontal * depth;
}

console.log(position(input));
