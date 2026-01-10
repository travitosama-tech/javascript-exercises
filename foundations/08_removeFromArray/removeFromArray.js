const removeFromArray = function(arr, ...args) {
    const result = arr.filter(element => {
        return !args.includes(element);
    })
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
