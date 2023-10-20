const data = [10, 20, 30, 40, 50, 60, 70, 80];

// Map

Array.prototype.customMap = function(callback) {
    const newArr = [];
    
    for(let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i]));
    }

    return newArr;
};

const usingMap = data.customMap((d) => d + 1);

console.log(usingMap);