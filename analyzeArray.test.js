import {analyze} from "./analyzeArray";

describe("analyze", () => {
	test("returns an object of the array", () => {
		expect(analyze([1,1,1,1,1])).toEqual({average: 1,
																					min: 1,
																					max: 1,
																					length: 5})
	})
})

test("regular array", () => {
	expect(analyze([1,2,3,4,5])).toEqual({average: 3,
																				min: 1,
																				max: 5,
																				length: 5})
});

test("returns empty array", () => {
	expect(analyze([])).toBe(null)
});

test("handles null/undefined", () => {
	expect(analyze(null)).toBeNull();
	expect(analyze(undefined)).toBeUndefined();
});

