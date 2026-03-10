

class FancyArray extends Array {
    mapWithLogging(callback) {
        let resArray = new FancyArray()
        for (const [index, value] of this.entries()) {
            const callBackRes = callback(value, index)
            console.log(`Current: ${value}, After Callback: ${callBackRes}`)
            resArray.push(callBackRes)
        }
        return resArray
    }
}

/*
    1. Create a class called "FancyArray" that extends
       the built-in Array in Javascript

    2. Add a "mapWithLogging" method to "FancyArray"
       that works just like the regular array map (with)
       the same parameters, but also logs the following
       each iteration of the map:
       "Current: ____, After Callback: _____"
*/

const arr = new FancyArray();
console.log(arr);
arr.push(1);
arr.push(2);
arr.push(3);

const mapped = arr.mapWithLogging((item, i) => {
    return item + i;
});

console.log(mapped);

// FancyArray(0) []
// Current: 1, After Callback: 1
// Current: 2, After Callback: 3
// Current: 3, After Callback: 5
// FancyArray(3) [ 1, 3, 5 ]
