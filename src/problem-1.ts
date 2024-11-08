const sumArray = (givenNumbers: number[]): void => {
    let total = 0;
    givenNumbers.forEach((element) => {
        total += element;
    });

    console.log(total);
    // return total;
};
