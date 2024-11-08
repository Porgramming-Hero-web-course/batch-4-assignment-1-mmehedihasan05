const removeDuplicates = (givenNumbers: number[]): number[] => {
    let uniqueArray: number[] = [];
    givenNumbers.forEach((element: number) => {
        if (!uniqueArray.includes(element)) {
            uniqueArray.push(element);
        }
    });
    // console.log(uniqueArray);
    return uniqueArray;
};
