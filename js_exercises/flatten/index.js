function flatten(arr) {
	var x = [].concat.apply([], arr);
	var y = [].concat.apply([], x);
	var z = [].concat.apply([], y);

	return z;
}

module.exports = flatten;
