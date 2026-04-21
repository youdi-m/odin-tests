export function analyze(arr) {
	if (!arr) return arr;

	var average = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
	var min = Math.min(...arr)
	var max = Math.max(...arr)
	var length = arr.length

	return {average, min, max, length}
}