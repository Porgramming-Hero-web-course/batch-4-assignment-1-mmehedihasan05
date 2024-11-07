const sumArray = (givenNumbers: number[]): number => {
    let store = 0;
    for (let index = 0; index < givenNumbers.length; index++) {
        const element = givenNumbers[index];
        store += element;
    }
    return store;
};
console.log(sumArray([1, 2, 3, 4, 5]));
