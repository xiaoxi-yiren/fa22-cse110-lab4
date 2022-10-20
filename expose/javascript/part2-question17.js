function modifyArray(array, callback) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]));
    }
    return newArr;
}
function doSomething (num) {
    return num * 2;
}
let list = [1,2,3];
console.log(modifyArray(list, doSomething));
