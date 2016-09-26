function nonNativeSort(arr) {
	var n = arr.length;
	while(n !== 0) {
		var newn = 0;
		for(var i = 1; i < arr.length; i++) {
			if(arr[i] < arr[i - 1]) {
				var save = arr[i];
				arr[i] = arr[i - 1];
				arr[i - 1] = save;
				newn = i;
			}
		}
		n = newn;
	}
	return arr;
}
console.log(nonNativeSort([4, 3, 9, 1, 5, 5, 10, 2])); // [ 1, 2, 3, 4, 5, 5, 9, 10 ]

module.exports = nonNativeSort;

