const sumArray = (givenNumbers: number[]): number => {
    let total = 0;
    givenNumbers.forEach((element) => {
        total += element;
    });
    return total;
};
