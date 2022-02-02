export const windows = (measurements) => {
    const array = [];
    for (let i = 0; i < measurements.length; i++) {
        const sum = measurements[i] + measurements[i + 1] + measurements[i + 2];
        array.push(sum);
    }
    return array;
}
