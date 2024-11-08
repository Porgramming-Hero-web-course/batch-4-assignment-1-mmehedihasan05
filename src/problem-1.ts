const sumArray = (givenNumbers: number[]): number => {
    let total: number = 0;
    givenNumbers.forEach((element) => {
        total += element;
    });

    // console.log(total);
    return total;
};
