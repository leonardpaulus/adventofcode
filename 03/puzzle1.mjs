import { input } from "./input.mjs";
import { testData } from "./testData.mjs";

const powerConsumption = (array) => {
  let oxygen = [...array];
  let co2 = [...array];
  let binaryNumber;
  let counterTrue = 0;
  let counterFalse = 0;
  const mostCommonBit = [];
  const leastCommonBit = [];
  for (let indexInner = 0; indexInner < oxygen[0].length; indexInner++) {
    counterTrue = 0;
    counterFalse = 0;
    for (let indexOuter = 0; indexOuter < oxygen.length; indexOuter++) {
      oxygen[indexOuter][indexInner] === 1 ? counterTrue++ : counterFalse++;
    }
    for (let indexOuter = 0; indexOuter < oxygen.length - 1; indexOuter++) {
      binaryNumber = counterTrue >= counterFalse ? 1 : 0;
      oxygen = oxygen.filter((entry) => entry[indexInner] === binaryNumber);
    }
  }
  for (let indexInner = 0; indexInner < co2[0].length; indexInner++) {
    counterTrue = 0;
    counterFalse = 0;
    for (let indexOuter = 0; indexOuter < co2.length; indexOuter++) {
      co2[indexOuter][indexInner] === 1 ? counterTrue++ : counterFalse++;
    }
    for (let indexOuter = 0; indexOuter < co2.length - 1; indexOuter++) {
      binaryNumber = counterFalse > counterTrue ? 1 : 0;
      co2 = co2.filter((entry) => entry[indexInner] === binaryNumber);
    }
  }

  const oxygenStatus = oxygen[0].join("");
  const co2Status = co2[0].join("");

  const result = parseInt(oxygenStatus, 2) * parseInt(co2Status, 2);

  return result;
};

console.log(powerConsumption(input));
