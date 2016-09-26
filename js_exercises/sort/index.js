function nonNativeSort(arr) {
	var n = arr.length;
	while(n !== 0) {
		var x = 0;
		for(var i = 1; i < arr.length; i++) {
			if(arr[i] < arr[i - 1]) {
				var y = arr[i];
				arr[i] = arr[i - 1];
				arr[i - 1] = y;
				x = i;
			}
		}
		n = x;
	}
	return arr;
}
console.log(nonNativeSort([4, 3, 9, 1, 5, 5, 10, 2]));

module.exports = nonNativeSort;

