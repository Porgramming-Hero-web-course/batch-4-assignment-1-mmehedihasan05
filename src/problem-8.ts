const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean => {
    for (let index = 0; index < keys.length; index++) {
        const element = keys[index];
        const isExistInObj = Object.prototype.hasOwnProperty.call(obj, element);
        if (isExistInObj === false) {
            // console.log(false);
            return false;
        }
    }

    // console.log(true);
    return true;
};
