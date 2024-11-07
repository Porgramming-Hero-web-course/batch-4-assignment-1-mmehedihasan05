const removeDuplicates = (givenNumbers: number[]): number[] => {
    let uniqueArray: number[] = [];
    givenNumbers.forEach((element) => {
        if (!uniqueArray.includes(element)) {
            uniqueArray.push(element);
        }
    });
    return uniqueArray;
};
