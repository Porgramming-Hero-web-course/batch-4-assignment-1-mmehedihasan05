const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean => {
    for (let index = 0; index < keys.length; index++) {
        const element = keys[index];
        const isExistInObj = Object.prototype.hasOwnProperty.call(obj, element);
        if (isExistInObj === false) {
            return false;
        }
    }

    return true;
};
