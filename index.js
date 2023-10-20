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

// Filter

Array.prototype.customFilter = function(callback) {
    const newArr = [];

    for(let i = 0; i < this.length; i++) {
        if(callback(this[i])) {
            newArr.push(this[i]);
        }
    }

    return newArr;
}

const usingFilter = data.customFilter((d) => {
    return d == 60;
})

console.log(usingFilter);

