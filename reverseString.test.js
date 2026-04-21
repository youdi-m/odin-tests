import {reverseString} from "./reverseString";

describe("reverseString", () => {
	test("reverses the string", () => {
		expect(reverseString("hello")).toBe("olleh");
	})
});

test("reverse a single word", () => {
	expect(reverseString("hello")).toBe("olleh");
});

test("returns empty string unchanged", () => {
	expect(reverseString("")).toBe("");
});

test("handles null/undefined", () => {
	expect(reverseString(null)).toBeNull();
	expect(reverseString(undefined)).toBeUndefined();
});