const removeDuplicates = (givenNumbers: number[]): void => {
    let uniqueArray: number[] = [];
    givenNumbers.forEach((element) => {
        if (!uniqueArray.includes(element)) {
            uniqueArray.push(element);
        }
    });
    console.log(uniqueArray);
    // return uniqueArray;
};
