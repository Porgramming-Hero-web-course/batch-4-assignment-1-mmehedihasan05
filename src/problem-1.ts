const sumArray = (givenNumbers: number[]): number => {
    let total = 0;
    givenNumbers.forEach((element) => {
        total += element;
    });

    // console.log(total);
    return total;
};
