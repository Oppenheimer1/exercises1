function nonNativeMap(arr, x, y) {
  return function(arr, x) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      newArr.push(x(arr[i], i, arr));
    }

    return newArr;
  }.call(null, arr, x.bind(y));
}

module.exports = nonNativeMap;