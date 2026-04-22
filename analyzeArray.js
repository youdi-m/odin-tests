export function analyze(arr) {
	if (arr === null) return null;
	if (arr === undefined) return undefined;
	if (arr.length == 0) return null;

	var average = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)/arr.length
	var min = Math.min(...arr)
	var max = Math.max(...arr)
	var length = arr.length

	return {average, min, max, length}
}